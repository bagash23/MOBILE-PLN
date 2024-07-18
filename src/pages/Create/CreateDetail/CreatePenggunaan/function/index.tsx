import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useCreateCase, useDashboard} from '../../../../../domain/usecase';
import {replace} from '../../../../../utils/Navigation';

type TypePenggunaan = {
  Alamat: string;
  IDPelanggan: string;
  IDTarif: string;
  NamaPelanggan: string;
  NomorKWH: string;
  Password: string;
  Username: string;
};

interface IProps {
  dataPelanggan: TypePenggunaan[];
  loadingPenggunaan: boolean;
  handlePressDropDown: (val: string) => void;
  form: {
    id_penggunaan: string;
    id_pelanggan: string;
    bulan: number;
    tahun: string;
    meter_awal: string;
    meter_akhir: string;
  };
  setForm: Dispatch<
    SetStateAction<{
      id_penggunaan: string;
      id_pelanggan: string;
      bulan: number;
      tahun: string;
      meter_awal: string;
      meter_akhir: string;
    }>
  >;
  showDropdown: boolean;
  valueDropDown: string;
  setShowDropdown: (val: boolean) => void;
  handlePressBuat: () => void;
  last5Years: number[];
  valueYear: string;
  setValueYear: Dispatch<SetStateAction<string>>;
  showYear: boolean;
  setShowYear: Dispatch<SetStateAction<boolean>>;
}

export const useCreatPenggunaan = (): IProps => {
  const [valueDropDown, setValueDropDown] = useState<string>('');
  const [valueYear, setValueYear] = useState<string>('');
  const [form, setForm] = useState({
    id_penggunaan: 'PN',
    id_pelanggan: '',
    bulan: 0,
    tahun: valueYear,
    meter_awal: '',
    meter_akhir: '',
  });
  const {handlePelangan, dataPelanggan, loadingPenggunaan} = useDashboard();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showYear, setShowYear] = useState<boolean>(false);
  const {handleCreatePenggunaan} = useCreateCase();

  const currentYear = new Date().getFullYear();
  const last5Years = Array.from({length: 5}, (_, index) => currentYear - index);

  const handlePressDropDown = (e: string) => {
    setValueDropDown(e);
    setShowDropdown(false);
  };

  const handlePressBuat = () => {
    handleCreatePenggunaan(
      form.id_penggunaan,
      form.id_pelanggan,
      form.bulan,
      Number(form.tahun),
      Number(form.meter_awal),
      Number(form.meter_akhir),
      true,
    );
    replace('MainApp');
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    return `PN${randomNumber}`;
  };

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      id_penggunaan: generateRandomNumber(),
      id_pelanggan: valueDropDown,
      tahun: valueYear,
    }));
  }, [valueDropDown, valueYear]);

  useEffect(() => {
    handlePelangan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dataPelanggan,
    loadingPenggunaan,
    handlePressDropDown,
    form,
    setForm,
    showDropdown,
    valueDropDown,
    setShowDropdown,
    handlePressBuat,    
    last5Years,
    valueYear,
    setValueYear,
    showYear,
    setShowYear,
  };
};
