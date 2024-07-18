import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useCreateCase, useTarifCase} from '../../../../../domain/usecase';
import { replace } from '../../../../../utils/Navigation';

type TypePelanggan = {
  id_pelanggan: string;
  nama_pelanggan: string;
  username: string;
  password: string;
  nomor_kwh: string;
  alamat: string;
  id_tarif: string;
};

interface IProps {
  dataTarif: {
    IDTarif: string;
    Daya: string;
    TarifPerkwh: number;
  }[];
  tarifValue: string;
  setTarifValue: Dispatch<SetStateAction<string>>;
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  form: TypePelanggan;
  setForm: Dispatch<SetStateAction<TypePelanggan>>;
  onPressBuat: () => void;
}

export const useCreatePelanggan = (): IProps => {
  const {dataTarif, getTarifList} = useTarifCase();
  const {handleCreatePelanggan} = useCreateCase()
  const [tarifValue, setTarifValue] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const [form, setForm] = useState({
    id_pelanggan: '',
    nama_pelanggan: '',
    username: '',
    password: '',
    nomor_kwh: '',
    alamat: '',
    id_tarif: '',
  });

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    return `PLG${randomNumber}`;
  };

  const onPressBuat = () => {
    handleCreatePelanggan(
      form.id_pelanggan,
      form.nama_pelanggan,
      form.username,
      form.password,
      form.nomor_kwh,
      form.alamat,
      form.id_tarif,
      true,
    );
    replace('MainApp');
  };

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      id_pelanggan: generateRandomNumber(),
      id_tarif: tarifValue,
    }));
  }, [tarifValue]);

  useEffect(() => {
    getTarifList(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dataTarif,
    tarifValue,
    setTarifValue,
    form,
    setForm,
    modal,
    setModal,
    onPressBuat
  };
};
