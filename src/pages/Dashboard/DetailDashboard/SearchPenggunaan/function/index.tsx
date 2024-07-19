import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useDashboard} from '../../../../../domain/usecase';
import {jwtDecode} from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';

interface IProps {
  dataPenggunaan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    MeterAkhir: number;
    MeterAwal: number;
    Tahun: number;
  }[];
  loadingPenggunaan: boolean;
  idUser: string;
  infoShow: string;
  setInfoShow: Dispatch<SetStateAction<string>>;
  listShow: {
    title: string;
  }[];
}

export const useSearchPenggunaan = (): IProps => {
  const {handlePenggunaan, dataPenggunaan, loadingPenggunaan} = useDashboard();
  const [idUser, setIdUser] = useState<string>('');
  const [infoShow, setInfoShow] = useState<string>('Saya');

  const listShow = [
    {
      title: 'Saya',
    },
    {
      title: 'Semua',
    },
  ];

  const decryptToken = async () => {
    const tokens = await EncryptedStorage.getItem('token');
    const res = jwtDecode(tokens ?? '');
    // @ts-ignore
    setIdUser(res?.id_user);
  };

  useEffect(() => {
    decryptToken();
    handlePenggunaan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dataPenggunaan,
    loadingPenggunaan,
    idUser,
    infoShow,
    setInfoShow,
    listShow,
  };
};
