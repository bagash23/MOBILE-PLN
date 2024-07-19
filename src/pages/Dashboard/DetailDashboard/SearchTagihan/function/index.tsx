import {useEffect} from 'react';
import {useDashboard} from '../../../../../domain/usecase';

interface IProps {
  loadingTagihan: boolean;
  dataTagihan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    IDTagihan: string;
    JumlahMeter: number;
    Status: string;
    Tahun: number;
  }[];
}

export const useSearchTagihan = () => {
  const {handleTagihan, loadingTagihan, dataTagihan} = useDashboard();
  useEffect(() => {
    handleTagihan(true);
  }, []);
  return {
    loadingTagihan,
    dataTagihan,
  };
};
