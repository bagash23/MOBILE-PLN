import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {create} from 'zustand';
// @ts-ignore
import {
  APP_PRIVATE_PENGGUNAAN,
  APP_PRIVATE_BASE_URL,
  APP_PRIVATE_PELANGGAN,
  APP_PRIVATE_TAGIHAN,
  APP_PRIVATE_DELETE_PENGGUNAAN,
  APP_PRIVATE_EDIT_PENGGUNAAN,
  APP_PRIVATE_DELETE_TAGIHAN,
  APP_PRIVATE_LEVEL,
} from '@env';

interface IProps {
  loadingPenggunaan: boolean;
  loadingPelanggan: boolean;
  loadingTagihan: boolean;
  handlePenggunaan: (loading: boolean) => void;
  dataPenggunaan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    MeterAkhir: number;
    MeterAwal: number;
    Tahun: number;
  }[];
  handlePelangan: (loading: boolean) => void;
  dataPelanggan: {
    Alamat: string;
    IDPelanggan: string;
    IDTarif: string;
    NamaPelanggan: string;
    NomorKWH: string;
    Password: string;
    Username: string;
  }[];
  handleTagihan: (loading: boolean) => void;
  dataTagihan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    IDTagihan: string;
    JumlahMeter: number;
    Status: string;
    Tahun: number;
  }[];
  handleRemovePenggunaan: (id: string, loading: boolean) => void;
  handleEditPenggunaan: (
    bulan: number,
    tahun: number,
    meter_awal: number,
    meter_akhir: number,
    loading: boolean,
    id: string,
  ) => void;
  handleRemoveTagihan: (id: string, loading: boolean) => void;
  getLevel: () => void;
  dataLevel: {
    IDLevel: string;
    Level: string;
  }[];
}

export const useDashboard = create<IProps>(set => ({
  loadingPenggunaan: false,
  loadingTagihan: false,
  dataPenggunaan: [
    {
      Bulan: 0,
      IDPelanggan: '',
      IDPenggunaan: '',
      MeterAkhir: 0,
      MeterAwal: 0,
      Tahun: 0,
    },
  ],
  loadingPelanggan: false,
  dataPelanggan: [
    {
      Alamat: '',
      IDPelanggan: '',
      IDTarif: '',
      NamaPelanggan: '',
      NomorKWH: '',
      Password: '',
      Username: '',
    },
  ],
  dataTagihan: [
    {
      Bulan: 0,
      IDPelanggan: '',
      IDPenggunaan: '',
      IDTagihan: '',
      JumlahMeter: 0,
      Status: '',
      Tahun: 0,
    },
  ],
  dataLevel: [
    {
      IDLevel: '',
      Level: '',
    },
  ],
  async handlePenggunaan(loading) {
    set({loadingPenggunaan: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_PENGGUNAAN,
        config,
      );
      set({
        dataPenggunaan: response.data.data,
        loadingPenggunaan: false,
      });
    } catch (error) {
      set({loadingPenggunaan: false});
      console.log(error);
    }
  },
  async handlePelangan(loading) {
    set({loadingPelanggan: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_PELANGGAN,
        config,
      );
      set({
        loadingPelanggan: false,
        dataPelanggan: response.data.data,
      });
    } catch (error) {
      console.log(error);
      set({loadingPelanggan: false});
    }
  },
  async handleTagihan(loading) {
    set({loadingTagihan: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_TAGIHAN,
        config,
      );
      set({
        loadingTagihan: false,
        dataTagihan: response.data.data,
      });
    } catch (error) {
      set({loadingTagihan: false});
      console.log(error);
    }
  },
  async handleRemovePenggunaan(id, loading) {
    set({loadingPenggunaan: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(
        `${APP_PRIVATE_BASE_URL}${APP_PRIVATE_DELETE_PENGGUNAAN}/${id}`,
        config,
      );
      set({loadingPenggunaan: false});
    } catch (error) {
      set({loadingPenggunaan: false});
      console.log(error);
    }
  },
  async handleEditPenggunaan(
    bulan,
    tahun,
    meter_awal,
    meter_akhir,
    loading,
    id,
  ) {
    set({loadingPenggunaan: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        bulan,
        tahun,
        meter_awal,
        meter_akhir,
      };
      await axios.patch(
        `${APP_PRIVATE_BASE_URL}${APP_PRIVATE_EDIT_PENGGUNAAN}/${id}`,
        data,
        config,
      );
      set({loadingPenggunaan: false});
    } catch (error) {
      set({loadingPenggunaan: false});
      console.log(error);
    }
  },
  async handleRemoveTagihan(id, loading) {
    set({loadingTagihan: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(
        `${APP_PRIVATE_BASE_URL}${APP_PRIVATE_DELETE_TAGIHAN}/${id}`,
        config,
      );
      set({loadingTagihan: false});
    } catch (error) {
      set({loadingPenggunaan: false});
    }
  },
  async getLevel() {
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_LEVEL,
        config,
      );
      set({
        dataLevel: response.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
