import {useRoute} from '@react-navigation/native';
import {TypeTagihan} from '../../../function';
import {useEffect, useState} from 'react';
import {jwtDecode} from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDashboard} from '../../../../../domain/usecase/useDashboard';
import { goBack } from '../../../../../utils/Navigation';

interface IProps {
  dataRouter: TypeTagihan;
  token: string;
  onPressRemove: () => void;
}

export const useDetailTagihan = (): IProps => {
  const router = useRoute();
  const dataRouter: TypeTagihan = router?.params?.data;
  const [token, setToken] = useState<string>('');
  const {handleRemoveTagihan} = useDashboard();

  const onPressRemove = () => {
    handleRemoveTagihan(dataRouter.IDTagihan, true);
    goBack();
  };

  const decryptToken = async () => {
    const tokens = await EncryptedStorage.getItem('token');
    const res = jwtDecode(tokens ?? '');
    // @ts-ignore
    setToken(res?.id_user);
  };

  useEffect(() => {
    decryptToken();
  }, []);

  return {
    dataRouter,
    token,
    onPressRemove
  };
};
