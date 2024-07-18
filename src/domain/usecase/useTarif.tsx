import {create} from 'zustand';
import {APP_PRIVATE_BASE_URL, APP_PRIVATE_TARIF} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';

interface IProps {
  getTarifList: (loading: boolean) => void;
  dataTarif: {
    IDTarif: string;
    Daya: string;
    TarifPerkwh: number;
  }[];
  loadingTarif: boolean;
}

export const useTarifCase = create<IProps>(set => ({
  loadingTarif: false,
  dataTarif: [
    {
      IDTarif: '',
      Daya: '',
      TarifPerkwh: 0,
    },
  ],
  async getTarifList(loading) {
    set({loadingTarif: loading});
    try {
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        APP_PRIVATE_BASE_URL + APP_PRIVATE_TARIF,
        config,
      );
      set({
        dataTarif: response.data.data,
        loadingTarif: false,
      });
    } catch (error) {
      set({loadingTarif: false});
    }
  },
}));
