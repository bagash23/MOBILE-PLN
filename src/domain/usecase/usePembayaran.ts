import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {create} from 'zustand';
import {
  APP_PRIVATE_BASE_URL,
  APP_PRIVATE_PEMBAYARAN,
  APP_PRIVATE_CREATE_PEMBAYARAN,
  APP_PRIVATE_EDIT_TAGIHAN,
} from '@env';

interface IProps {
  loadingPembayaran: boolean;
  dataPembayaran: {
    IDPembayaran: string;
    IDTagihan: string;
    IDPelanggan: string;
    TglBayar: string;
    BiayaAdmin: number;
    TotalBayar: number;
    IDUser: string;
  }[];
  handleListPembayaran: (loading: true) => void;
  handleCreatePembayaran: (
    id_pembayaran: string,
    id_tagihan: string,
    id_pelanggan: string,
    tgl_bayar: string,
    biaya_admin: number,
    total_bayar: number,
    id_user: string,
    loading: boolean,
  ) => void;
  handleUpdatePembayaran: (
    loading: boolean,
    status: string,
    id: string,
  ) => void;
}

export const usePembayaran = create<IProps>(set => ({
  loadingPembayaran: false,
  dataPembayaran: [
    {
      IDPembayaran: '',
      IDTagihan: '',
      IDPelanggan: '',
      TglBayar: '',
      BiayaAdmin: 0,
      TotalBayar: 0,
      IDUser: '',
    },
  ],
  async handleListPembayaran(loading) {
    set({loadingPembayaran: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_PEMBAYARAN,
        config,
      );
      set({
        loadingPembayaran: false,
        dataPembayaran: response.data.data,
      });
    } catch (error) {
      set({loadingPembayaran: false});
    }
  },
  async handleCreatePembayaran(
    id_pembayaran,
    id_tagihan,
    id_pelanggan,
    tgl_bayar,
    biaya_admin,
    total_bayar,
    id_user,
    loading,
  ) {
    set({loadingPembayaran: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        id_pembayaran,
        id_tagihan,
        id_pelanggan,
        tgl_bayar,
        biaya_admin,
        total_bayar,
        id_user,
      };
      await axios.post(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_CREATE_PEMBAYARAN,
        data,
        config,
      );
      set({loadingPembayaran: false});
    } catch (error) {
      set({loadingPembayaran: false});
    }
  },
  async handleUpdatePembayaran(loading, status, id) {
    set({loadingPembayaran: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        status,
      };
      await axios.patch(
        `${APP_PRIVATE_BASE_URL}${APP_PRIVATE_EDIT_TAGIHAN}/${id}`,
        data,
        config,
      );
      set({loadingPembayaran: false});
    } catch (error) {
      set({loadingPembayaran: false});
    }
  },
}));
