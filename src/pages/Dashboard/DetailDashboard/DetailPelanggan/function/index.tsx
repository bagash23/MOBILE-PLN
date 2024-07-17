import {useRoute} from '@react-navigation/native';
import {TypePelanggan} from '../../../function';

interface IProps {
  dataRouter: TypePelanggan;
}

export const useDetailPelanggan = (): IProps => {
  const router = useRoute();
  // @ts-ignore
  const dataRouter: TypePelanggan = router?.params?.data;
  return {
    dataRouter,
  };
};
