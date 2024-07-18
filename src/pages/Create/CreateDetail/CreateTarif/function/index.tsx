import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useCreateCase} from '../../../../../domain/usecase';
import {replace} from '../../../../../utils/Navigation';

interface IProps {
  form: {
    id_tarif: string;
    daya: string;
    tarif_perkwh: string;
  };
  setForm: Dispatch<
    SetStateAction<{
      id_tarif: string;
      daya: string;
      tarif_perkwh: string;
    }>
  >;
  onPressCreate: () => void;  
}

export const useCreateTarif = (): IProps => {
  const [form, setForm] = useState({
    id_tarif: '',
    daya: '',
    tarif_perkwh: '',
  });

  const {handleCreateTarif} = useCreateCase();

  const onPressCreate = () => {
    handleCreateTarif(form.id_tarif, form.daya, Number(form.tarif_perkwh));
    replace('MainApp');
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    return `TRF${randomNumber}`;
  };

  useEffect(() => {
    setForm(prevForm => ({...prevForm, id_tarif: generateRandomNumber()}));
  }, []);

  return {
    form,
    setForm,
    onPressCreate,
  };
};
