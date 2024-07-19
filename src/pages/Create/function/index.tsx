import {jwtDecode} from 'jwt-decode';
import {useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

interface IPRops {
  id: string;
}

export const useCreate = (): IPRops => {
  const [id, setId] = useState<string>('');
  const decryptToken = async () => {
    const tokens = await EncryptedStorage.getItem('token');
    const res = jwtDecode(tokens ?? '');
    // @ts-ignore
    setId(res?.id_user);
  };
  useEffect(() => {
    decryptToken();
  }, []);
  return {
    id,
  };
};
