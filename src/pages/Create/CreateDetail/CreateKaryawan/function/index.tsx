import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useCreateCase, useDashboard} from '../../../../../domain/usecase';
import { replace } from '../../../../../utils/Navigation';

interface IProps {
  form: {
    id_user: string;
    username: string;
    password: string;
    nama_admin: string;
    id_level: string;
  };
  setForm: Dispatch<
    SetStateAction<{
      id_user: string;
      username: string;
      password: string;
      nama_admin: string;
      id_level: string;
    }>
  >;
  idValue: string;
  setIDValue: Dispatch<SetStateAction<string>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  idUserValue: string;
  setIDUseValue: Dispatch<SetStateAction<string>>;
  showModalUser: boolean;
  setShowMoalUser: Dispatch<SetStateAction<boolean>>;
  dataLevel: {
    IDLevel: string;
    Level: string;
  }[];
  onPressBuat: () => void;
}

export const useCreateKaryawan = () => {
  const [idValue, setIDValue] = useState<string>('');
  const {getLevel, dataLevel} = useDashboard();
  const {handleCreateKaryawan} = useCreateCase();
  const [idUserValue, setIDUseValue] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalUser, setShowMoalUser] = useState<boolean>(false);
  const [form, setForm] = useState({
    id_user: '',
    username: '',
    password: '',
    nama_admin: '',
    id_level: '',
  });

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      id_user: idUserValue,
      id_level: idValue,
    }));
  }, [idUserValue, idValue]);

  const onPressBuat = () => {
    handleCreateKaryawan(
      form.id_user,
      form.username,
      form.password,
      form.nama_admin,
      form.id_level,
    );
    replace('MainApp');
  };

  useEffect(() => {
    getLevel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    form,
    setForm,
    idValue,
    setIDValue,
    showModal,
    setShowModal,
    idUserValue,
    setIDUseValue,
    showModalUser,
    setShowMoalUser,
    dataLevel,
    onPressBuat,
  };
};
