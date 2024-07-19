import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Fonts from '../../../../utils/Fonts';
import {Divider, Gap, HeaderBar, Loading} from '../../../../components';
import {goBack, navigate} from '../../../../utils/Navigation';
import {useDetailTagihan} from './function';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailTagihan = () => {
  const {dataRouter, token, onPressRemove, loadingTagihan} = useDetailTagihan();
  return (
    <View style={styles.container}>
      <View>
        <HeaderBar title="Detail Tagihan" onPress={() => goBack()} />
        <Gap height={5} />
        <View style={styles.content}>
          <Text
            style={[styles.labelStatus, colorTextStatus(dataRouter.Status)]}>
            {dataRouter.Status}
          </Text>
          <Gap height={5} />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>Tanggal & Tahun:</Text>
            <Text style={styles.labelBold}>{`${moment(
              dataRouter.Bulan,
              'M',
            ).format('MMM')} - ${dataRouter.Tahun}`}</Text>
          </View>
          <Divider />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>ID Tagihan:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.IDTagihan}`}</Text>
          </View>
          <Divider />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>ID Pelanggan:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.IDPelanggan}`}</Text>
          </View>
          <Divider />
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>ID Penggunaan:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.IDPenggunaan}`}</Text>
          </View>
          <View style={styles.contentMargin}>
            <Text style={styles.labelRegular}>Jumlah Meter:</Text>
            <Text style={styles.labelBold}>{`${dataRouter.JumlahMeter}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        {dataRouter.IDPelanggan === token && (
          <TouchableOpacity
            style={styles.buttonEdit}
            disabled={dataRouter.Status === 'PAID' ? true : false}
            onPress={() =>
              navigate('DetailPembayaran', {id: dataRouter.IDTagihan})
            }>
            <Text style={styles.labelEdit}>
              {dataRouter.Status === 'PAID'
                ? 'Pembayaran Selesai!'
                : 'Bayar Sekarang!'}
            </Text>
            <MaterialCommunityIcons name="bank" size={20} color={'white'} />
          </TouchableOpacity>
        )}
        <Gap height={12} />
        {(token === 'ADM0000' || token === 'ADM') && (
          <TouchableOpacity style={styles.buttonHapus} onPress={onPressRemove}>
            <Text style={styles.labelHapus}>Hapus</Text>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        )}
      </View>
      {loadingTagihan && <Loading />}
    </View>
  );
};

export default DetailTagihan;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  labelBold: {
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
    fontSize: Fonts.size.medium,
  },
  labelRegular: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.medium,
    textAlign: 'left',
  },
  content: {paddingHorizontal: 12, paddingVertical: 12},
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelStatus: {
    fontFamily: Fonts.fontFamily.bold,
    fontSize: Fonts.size.xsmall,
    color: 'white',
    textAlign: 'center',
  },
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

export const colorTextStatus = (text: string) => ({
  backgroundColor: text === 'UNPAID' ? 'red' : '#1a94aa',
  paddingHorizontal: 12,
  paddingVertical: 5,
  borderRadius: 12,
  width: 70,
});
