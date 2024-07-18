import {Dispatch, SetStateAction, useState} from 'react';
import {useCreateCase} from '../../../../../domain/usecase';
import { replace } from '../../../../../utils/Navigation';

interface IProps {
  form: {
    id_level: string;
    level: string;
  };
  setForm: Dispatch<
    SetStateAction<{
      id_level: string;
      level: string;
    }>
  >;
  onPressBuat: () => void;
}

export const useCreateLevel = (): IProps => {
  const {handleCreateLevel} = useCreateCase();
  const [form, setForm] = useState({
    id_level: '',
    level: '',
  });
  const onPressBuat = () => {
    handleCreateLevel(form.id_level, form.level);
    replace('MainApp');
  };
  return {
    form,
    setForm,
    onPressBuat,
  };
};
