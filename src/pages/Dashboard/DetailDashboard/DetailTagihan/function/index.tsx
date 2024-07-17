import {useRoute} from '@react-navigation/native';
import {TypeTagihan} from '../../../function';
import {useEffect, useState} from 'react';
import {jwtDecode} from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDashboard} from '../../../../../domain/usecase/useDashboard';
import {goBack} from '../../../../../utils/Navigation';
import {Alert} from 'react-native';

interface IProps {
  dataRouter: TypeTagihan;
  token: string;
  onPressRemove: () => void;
  loadingTagihan: boolean;
}

export const useDetailTagihan = (): IProps => {
  const router = useRoute();
  const dataRouter: TypeTagihan = router?.params?.data;
  const [token, setToken] = useState<string>('');
  const {handleRemoveTagihan, loadingTagihan} = useDashboard();

  const onPressRemove = () => {
    Alert.alert(
      `Hapus tagihan ${dataRouter.IDTagihan}`,
      'Apakah kamu yakin untuk menghapusnya? Jika sudah terhapus, data tidak bisa ditemukan lagi.',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => {
            handleRemoveTagihan(dataRouter.IDTagihan, true);
            goBack();
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
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
    onPressRemove,
    loadingTagihan,
  };
};
