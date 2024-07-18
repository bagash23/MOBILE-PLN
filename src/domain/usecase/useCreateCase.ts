import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {create} from 'zustand';
import {
  APP_PRIVATE_BASE_URL,
  APP_PRIVATE_CREATE_PENGGUNAAN,
  APP_PRIVATE_CREATE_TARIF,
  APP_PRIVATE_CREATE_TAGIHAN,
  APP_PRIVATE_CREATE_PEMBAYARAN,
} from '@env';
import {useDashboard} from './useDashboard';

interface IProps {
  handleCreatePenggunaan: (
    id_penggunaan: string,
    id_pelanggan: string,
    bulan: number,
    tahun: string,
    meter_awal: string,
    meter_akhir: string,
    loading: boolean,
  ) => void;

  handleCreateTarif: (
    id_tarif: string,
    daya: string,
    tarif_perkwh: string,
  ) => void;

  handleCreateTagihan: (
    id_tagihan: string,
    id_penggunaan: string,
    id_pelanggan: string,
    bulan: number,
    tahun: string,
    jumlah_meter: number,
    status: string,
    loading: boolean,
  ) => void;

  handleCreatePembayaran: (
    id_pembayaran: string,
    id_tagihan: string,
    id_pelanggan: string,
    tgl_bayar: string,
    biaya_admin: number,
    total_bayar: string,
    id_user: string,
  ) => void;
}

export const useCreateCase = create<IProps>(set => ({
  async handleCreatePenggunaan(
    id_penggunaan,
    id_pelanggan,
    bulan,
    tahun,
    meter_awal,
    meter_akhir,
    loading,
  ) {
    useDashboard.getState().loadingPenggunaan = loading;
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        id_penggunaan,
        id_pelanggan,
        bulan,
        tahun,
        meter_awal,
        meter_akhir,
      };
      await axios.post(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_CREATE_PENGGUNAAN,
        data,
        config,
      );
      useDashboard.getState().loadingPenggunaan = false;
    } catch (error) {
      useDashboard.getState().loadingPenggunaan = false;
    }
  },
  async handleCreateTarif(id_tarif, daya, tarif_perkwh) {
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        id_tarif,
        daya: `${daya}VA`,
        tarif_perkwh,
      };
      await axios.post(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_CREATE_TARIF,
        data,
        config,
      );
    } catch (error) {
      console.log(error);
    }
  },
  async handleCreateTagihan(
    id_tagihan,
    id_penggunaan,
    id_pelanggan,
    bulan,
    tahun,
    jumlah_meter,
    status,
    loading,
  ) {
    useDashboard.getState().loadingTagihan = loading;
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        id_tagihan,
        id_penggunaan,
        id_pelanggan,
        bulan,
        tahun,
        jumlah_meter,
        status,
      };
      await axios.post(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_CREATE_TAGIHAN,
        data,
        config,
      );
      useDashboard.getState().loadingTagihan = false;
    } catch (error) {
      useDashboard.getState().loadingTagihan = false;
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
  ) {
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
    } catch (error) {
      console.log(error);
    }
  },
}));
