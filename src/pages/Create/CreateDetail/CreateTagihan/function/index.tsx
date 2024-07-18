import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useCreateCase, useDashboard} from '../../../../../domain/usecase';
import {replace} from '../../../../../utils/Navigation';

type TypeForm = {
  id_tagihan: string;
  id_penggunaan: string;
  id_pelanggan: string;
  bulan: number;
  tahun: string;
  jumlah_meter: number;
  status: string;
};

interface IProps {
  form: TypeForm;
  setForm: Dispatch<SetStateAction<TypeForm>>;
  last5Years: number[];
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowModalPenggunaan: Dispatch<SetStateAction<boolean>>;
  setShowModalPelanggan: Dispatch<SetStateAction<boolean>>;
  setKey: Dispatch<SetStateAction<string>>;
  penggunaan: string;
  pelanggan: string;
  handlePressModal: (val: string) => void;
  handleDataModal: (val: string) => void;
  dataPenggunaan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    MeterAkhir: number;
    MeterAwal: number;
    Tahun: number;
  }[];
  showModalPenggunaan: boolean;
  showModalPelanggan: boolean;
  dataPelanggan: {
    Alamat: string;
    IDPelanggan: string;
    IDTarif: string;
    NamaPelanggan: string;
    NomorKWH: string;
    Password: string;
    Username: string;
  }[];
  onPressSimpan: () => void;
}

export const useCreateTagihan = (): IProps => {
  const {dataPenggunaan, handlePenggunaan, dataPelanggan, handlePelangan} =
    useDashboard();
  const [year, setYear] = useState<string>('');
  const [penggunaan, setPenggunaan] = useState<string>('');
  const [pelanggan, setPelanggan] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalPenggunaan, setShowModalPenggunaan] = useState(false);
  const [showModalPelanggan, setShowModalPelanggan] = useState(false);
  const [key, setKey] = useState('');
  const {handleCreateTagihan} = useCreateCase();

  const jumlahMeters = dataPenggunaan
    .filter(e => e.IDPenggunaan === penggunaan)
    .map(e => e.MeterAwal + e.MeterAkhir)
    .reduce((acc, curr) => acc + curr, 0);

  const [form, setForm] = useState({
    id_tagihan: '',
    id_penggunaan: '',
    id_pelanggan: '',
    bulan: 0,
    tahun: '',
    jumlah_meter: 0,
    status: 'UNPAID',
  });

  const currentYear = new Date().getFullYear();
  const last5Years = Array.from({length: 5}, (_, index) => currentYear - index);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    return `TG${randomNumber}`;
  };

  const onPressSimpan = () => {
    handleCreateTagihan(
      form.id_tagihan,
      form.id_penggunaan,
      form.id_pelanggan,
      form.bulan,
      Number(form.tahun),
      form.jumlah_meter,
      form.status,
      true,
    );
    replace('CreatePemabayaran');
  };

  const handlePressModal = (key: string) => {
    switch (key) {
      case 'tahun':
        setKey(key);
        setShowModal(true);
        break;
      case 'penggunaan':
        setKey(key);
        setShowModalPenggunaan(true);
        break;
      case 'pelanggan':
        setKey(key);
        setShowModalPelanggan(true);
        break;
    }
  };

  const handleDataModal = (value: string) => {
    switch (key) {
      case 'tahun':
        setYear(value);
        setForm({...form, tahun: year});
        setKey('');
        setShowModal(false);
        break;
      case 'penggunaan':
        setPenggunaan(value);
        setForm({...form, id_penggunaan: penggunaan});
        setKey('');
        setShowModalPenggunaan(false);
        break;
      case 'pelanggan':
        setPelanggan(value);
        setForm({...form, id_pelanggan: pelanggan});
        setKey('');
        setShowModalPelanggan(false);
        break;
    }
  };

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      id_tagihan: generateRandomNumber(),
      id_pelanggan: pelanggan,
      id_penggunaan: penggunaan,
      jumlah_meter: jumlahMeters,
      tahun: year,
    }));
    handlePenggunaan(true);
    handlePelangan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [penggunaan, pelanggan, year]);

  return {
    form,
    setForm,
    last5Years,
    year,
    setYear,
    showModal,
    setShowModal,
    setKey,
    penggunaan,
    pelanggan,
    handlePressModal,
    handleDataModal,
    dataPenggunaan,
    showModalPelanggan,
    showModalPenggunaan,
    setShowModalPelanggan,
    setShowModalPenggunaan,
    dataPelanggan,
    onPressSimpan,
  };
};
