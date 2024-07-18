import {useRoute} from '@react-navigation/native';
import {usePembayaran} from '../../../../domain/usecase';
import {useCallback, useEffect} from 'react';
import {goBack} from '../../../../utils/Navigation';

export type TypeDataPembayaran = {
  IDPembayaran: string;
  IDTagihan: string;
  IDPelanggan: string;
  TglBayar: string;
  BiayaAdmin: number;
  TotalBayar: number;
  IDUser: string;
};

interface IProps {
  dataRouter: string;
  keyExtractorPembayaran: (_: TypeDataPembayaran, index: number) => string;
  loadingPembayaran: boolean;
  dataPembayaran: TypeDataPembayaran[];
  onPressBayar: () => void;
}

export const useDetailPembayaran = (): IProps => {
  const router = useRoute();
  const dataRouter: string = router?.params?.id;  
  const {
    loadingPembayaran,
    dataPembayaran,
    handleListPembayaran,
    handleUpdatePembayaran,
  } = usePembayaran();

  const keyExtractorPembayaran = useCallback(
    (_: TypeDataPembayaran, index: number) => index?.toString(),
    [],
  );

  const onPressBayar = () => {
    const id = dataPembayaran.filter(e => e.IDTagihan === dataRouter);
    handleUpdatePembayaran(true, 'PAID', id[0].IDTagihan);
    goBack();
  };

  useEffect(() => {
    handleListPembayaran(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dataRouter,
    keyExtractorPembayaran,
    loadingPembayaran,
    dataPembayaran,
    onPressBayar,
  };
};
