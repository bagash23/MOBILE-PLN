import {useEffect} from 'react';
import {useDashboard} from '../../../../../domain/usecase';

interface IProps {
  loadingPelanggan: boolean;
  dataPelanggan: {
    Alamat: string;
    IDPelanggan: string;
    IDTarif: string;
    NamaPelanggan: string;
    NomorKWH: string;
    Password: string;
    Username: string;
  }[];
}

export const useSearchPelanggan = (): IProps => {
  const {handlePelangan, loadingPelanggan, dataPelanggan} = useDashboard();
  useEffect(() => {
    handlePelangan(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loadingPelanggan,
    dataPelanggan,
  };
};
