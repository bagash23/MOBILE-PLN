import {create} from 'zustand';
// @ts-ignore
import {APP_PUBLIC_LOGIN, APP_PUBLIC_BASE_URL} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';

interface IProps {
  handleLogin: (
    loading: boolean,
    username: string,
    password: string,
  ) => Promise<
    | {
        success?: boolean;
        statusCode?: number;
        message?: string;
        data?: string;
      }
    | undefined
  >;
  loadingLogin: boolean;
}

export const useAuthentication = create<IProps>(set => ({
  loadingLogin: false,

  async handleLogin(loading: boolean, username: string, password: string) {
    set({loadingLogin: loading});
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      };
      const data = {
        username,
        password,
      };
      const response = await axios.post(
        APP_PUBLIC_BASE_URL + APP_PUBLIC_LOGIN,
        data,
        config,
      );
      await EncryptedStorage.setItem('token', response.data.data);
      return {
        success: response.data.meta.status,
        message: response.data.meta.message,
        statusCode: response.data.meta.code,
        data: response.data.data,
      };
    } catch (error) {
      console.log(error);
    } finally {
      set({loadingLogin: false});
    }
  },
}));
