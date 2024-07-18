import {jwtDecode} from 'jwt-decode';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useCreateCase, useDashboard} from '../../../../../domain/usecase';
import {replace} from '../../../../../utils/Navigation';

type TypePembayaran = {
  id_pembayaran: string;
  id_tagihan: string;
  id_pelanggan: string;
  tgl_bayar: string;
  biaya_admin: number;
  total_bayar: string;
  id_user: string;
};

interface IProps {
  form: TypePembayaran;
  setForm: Dispatch<SetStateAction<TypePembayaran>>;
  tagihanValue: string;
  setTagihanValue: Dispatch<SetStateAction<string>>;
  pelangganvalue: string;
  setPelangganValue: Dispatch<SetStateAction<string>>;
  showModalTagihan: boolean;
  setShowModalTagihan: Dispatch<SetStateAction<boolean>>;
  showModalPelanggan: boolean;
  setShowModalPelanggan: Dispatch<SetStateAction<boolean>>;
  showModalTanggal: boolean;
  setShowModalTanggal: Dispatch<SetStateAction<boolean>>;
  dataPelanggan: {
    Alamat: string;
    IDPelanggan: string;
    IDTarif: string;
    NamaPelanggan: string;
    NomorKWH: string;
    Password: string;
    Username: string;
  }[];
  dataTagihan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    IDTagihan: string;
    JumlahMeter: number;
    Status: string;
    Tahun: number;
  }[];
  tanggalValue: string;
  setTanggalValue: Dispatch<SetStateAction<string>>;
  onPressBuat: () => void;
}

export const useCreatePembayaran = (): IProps => {
  const {handleTagihan, handlePelangan, dataPelanggan, dataTagihan} =
    useDashboard();
  const {handleCreatePembayaran} = useCreateCase();
  const [tagihanValue, setTagihanValue] = useState('');
  const [pelangganvalue, setPelangganValue] = useState('');
  const [tanggalValue, setTanggalValue] = useState('');
  const [token, setToken] = useState<string>('');

  const [showModalTagihan, setShowModalTagihan] = useState<boolean>(false);
  const [showModalPelanggan, setShowModalPelanggan] = useState<boolean>(false);
  const [showModalTanggal, setShowModalTanggal] = useState<boolean>(false);

  const [form, setForm] = useState({
    id_pembayaran: '',
    id_tagihan: '',
    id_pelanggan: '',
    tgl_bayar: '',
    biaya_admin: 2500,
    total_bayar: '',
    id_user: '',
  });

  const onPressBuat = () => {
    handleCreatePembayaran(
      form.id_pembayaran,
      form.id_tagihan,
      form.id_pelanggan,
      form.tgl_bayar,
      form.biaya_admin,
      Number(form.total_bayar),
      form.id_user,
    );
    replace('MainApp');
  };

  const decryptToken = async () => {
    const tokens = await EncryptedStorage.getItem('token');
    const res = jwtDecode(tokens ?? '');
    // @ts-ignore
    setToken(res?.id_user);
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    return `PAY${randomNumber}`;
  };

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      id_pembayaran: generateRandomNumber(),
      id_tagihan: tagihanValue,
      id_pelanggan: pelangganvalue,
      tgl_bayar: tanggalValue,
      id_user: token,
    }));
  }, [tagihanValue, pelangganvalue, tanggalValue, token]);

  useEffect(() => {
    decryptToken();
    handlePelangan(true);
    handleTagihan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    form,
    setForm,
    tagihanValue,
    setTagihanValue,
    pelangganvalue,
    setPelangganValue,
    showModalTagihan,
    setShowModalTagihan,
    showModalPelanggan,
    setShowModalPelanggan,
    showModalTanggal,
    setShowModalTanggal,
    dataPelanggan,
    dataTagihan,
    tanggalValue,
    setTanggalValue,
    onPressBuat,
  };
};
