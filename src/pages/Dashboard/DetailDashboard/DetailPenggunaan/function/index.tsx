import {useRoute} from '@react-navigation/native';
import {TypePenggunaan} from '../../../function';
import {useDashboard} from '../../../../../domain/usecase/useDashboard';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {goBack} from '../../../../../utils/Navigation';
import EncryptedStorage from 'react-native-encrypted-storage';
import {jwtDecode} from 'jwt-decode';
import { Alert } from 'react-native';

interface IProps {
  dataRouter: TypePenggunaan;
  onPressRemove: () => void;
  onPressEdit: () => void;
  loadingPenggunaan: boolean;
  form: {
    bulan: number;
    tahun: number;
    meter_awal: number;
    meter_akhir: number;
  };
  setForm: Dispatch<
    SetStateAction<{
      bulan: number;
      tahun: number;
      meter_awal: number;
      meter_akhir: number;
    }>
  >;
  tokenParse: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
}

export const useDetailPenggunaan = (): IProps => {
  const router = useRoute();
  // @ts-ignore
  const dataRouter: TypePenggunaan = router?.params?.data;
  const {handleRemovePenggunaan, handleEditPenggunaan, loadingPenggunaan} =
    useDashboard();
  const [form, setForm] = useState({
    bulan: dataRouter.Bulan ?? router?.params?.data?.Bulan,
    tahun: dataRouter.Tahun,
    meter_awal: dataRouter.MeterAwal,
    meter_akhir: dataRouter.MeterAkhir,
  });
  const [tokenParse, setTokenParse] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onPressRemove = () => {
    Alert.alert(
      `Hapus tagihan ${dataRouter.IDPenggunaan}`,
      'Apakah kamu yakin untuk menghapusnya? Jika sudah terhapus, data tidak bisa ditemukan lagi.',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: () => {
            handleRemovePenggunaan(dataRouter.IDPenggunaan, true);
            goBack();
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  const onPressEdit = () => {
    handleEditPenggunaan(
      Number(form.bulan),
      Number(form.tahun),
      Number(form.meter_awal),
      Number(form.meter_akhir),
      true,
      dataRouter.IDPenggunaan,
    );
  };

  const decryptToken = async () => {
    const tokens = await EncryptedStorage.getItem('token');
    const res = jwtDecode(tokens ?? '');
    // @ts-ignore
    setTokenParse(res?.id_user);
  };

  useEffect(() => {
    decryptToken();
  }, []);

  return {
    dataRouter,
    onPressRemove,
    onPressEdit,
    loadingPenggunaan,
    setForm,
    tokenParse,
    openModal,
    setOpenModal,
    form,
  };
};
