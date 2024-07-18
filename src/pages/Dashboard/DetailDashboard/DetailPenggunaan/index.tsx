import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Fonts from '../../../../utils/Fonts';
import {Gap, HeaderBar, Loading} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';
import {Divider} from 'react-native-paper';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDetailPenggunaan} from './function';
import ModalInputan from './components/ModalInputan';

const DetailPenggunaan = () => {
  const {
    dataRouter,
    onPressRemove,
    onPressEdit,
    loadingPenggunaan,
    setForm,
    tokenParse,
    setOpenModal,
    openModal,
    form,
  } = useDetailPenggunaan();
  return (
    <View style={styles.container}>
      <View>
        <HeaderBar title="Detail Penggunaan" onPress={() => goBack()} />
        <View style={styles.content}>
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>Tanggal & Tahun:</Text>
            <Text style={styles.labelBold}>{`${moment(
              dataRouter.Bulan,
              'M',
            ).format('MMM')} - ${dataRouter.Tahun}`}</Text>
          </View>
          <Divider />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>ID Penggunaan:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.IDPenggunaan}`}</Text>
          </View>
          <Divider />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>ID Pelanggan:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.IDPelanggan}`}</Text>
          </View>
          <Divider />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>Meter Awal:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.MeterAwal}`}</Text>
          </View>
          <Divider />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>Meter Akhir:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.MeterAkhir}`}</Text>
          </View>
          <Divider />
        </View>
      </View>
      {(tokenParse === 'ADM0000' || tokenParse === 'ADM') && (
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.buttonEdit}
            onPress={() => setOpenModal(true)}>
            <Text style={styles.labelEdit}>Ubah</Text>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
          <Gap height={12} />
          <TouchableOpacity style={styles.buttonHapus} onPress={onPressRemove}>
            <Text style={styles.labelHapus}>Hapus</Text>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      )}
      {openModal && (
        <ModalInputan
          isVisible={openModal}
          close={() => setOpenModal(false)}
          value={{
            bulan: form.bulan,
            tahun: form.tahun,
            meter_awal: form.meter_awal,
            meter_akhir: form.meter_akhir,
          }}
          setForm={setForm}
          onPress={onPressEdit}
        />
      )}
      {loadingPenggunaan && <Loading />}
    </View>
  );
};

export default DetailPenggunaan;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  labelBold: {
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
    fontSize: Fonts.size.large,
  },
  labelRegular: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.xsmall,
  },
  content: {paddingHorizontal: 12, paddingVertical: 12},
  contentMargin: {
    marginVertical: 12,
  },
  buttonEdit: {
    backgroundColor: '#1a94aa',
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  labelEdit: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.fontFamily.medium,
    color: 'white',
  },
  buttonHapus: {
    backgroundColor: 'red',
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  labelHapus: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.fontFamily.medium,
    color: 'white',
  },
});
