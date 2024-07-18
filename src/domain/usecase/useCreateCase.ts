import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {create} from 'zustand';
import {
  APP_PRIVATE_BASE_URL,
  APP_PRIVATE_CREATE_PENGGUNAAN,
  APP_PRIVATE_CREATE_TARIF,
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
      console.log(data);
      await axios.post(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_CREATE_TARIF,
        data,
        config,
      );
    } catch (error) {
      console.log(error);
    }
  },
}));
