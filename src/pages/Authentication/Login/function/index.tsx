import {Dispatch, SetStateAction, useState} from 'react';
import {useAuthentication} from '../../../../domain/usecase/useAuthentication';
import { replace } from '../../../../utils/Navigation';

interface IProps {
  iForm: {
    username: string;
    password: string;
  };
  setIForm: Dispatch<
    SetStateAction<{
      username: string;
      password: string;
    }>
  >;
  handleOnPress: () => void;
  loadingLogin: boolean;
}

export const useLogin = (): IProps => {
  const [iForm, setIForm] = useState({
    username: '',
    password: '',
  });
  const {handleLogin, loadingLogin} = useAuthentication();

  const handleOnPress = () => {
    handleLogin(true, iForm.username, iForm.password).then(res => {
      if (res?.statusCode === 200) {
        replace('MainApp');
      }
    });
  };

  return {
    iForm,
    setIForm,
    handleOnPress,
    loadingLogin,
  };
};
