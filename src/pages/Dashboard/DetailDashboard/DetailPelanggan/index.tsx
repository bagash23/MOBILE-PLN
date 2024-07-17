import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Gap, HeaderBar} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';
import Fonts from '../../../../utils/Fonts';
import {useDetailPelanggan} from './function';

const DetailPelanggan = () => {
  const {dataRouter} = useDetailPelanggan();
  return (
    <View style={styles.container}>
      <View>
        <HeaderBar title="Detail Pelanggan" onPress={() => goBack()} />
        <View style={styles.content}>
          <View style={styles.rowContent}>
            <Text style={styles.labelRegular}>ID Pelanggan: </Text>
            <Text style={styles.labelBold}>{dataRouter.IDPelanggan}</Text>
          </View>
          <Gap height={12} />
          <View style={styles.rowContent}>
            <Text style={styles.labelRegular}>ID Tarif: </Text>
            <Text style={styles.labelBold}>{dataRouter.IDTarif}</Text>
          </View>
          <Gap height={12} />
          <View style={styles.rowContent}>
            <Text style={styles.labelRegular}>Nama Pelanggan: </Text>
            <Text style={styles.labelBold}>{dataRouter.NamaPelanggan}</Text>
          </View>
          <Gap height={12} />
          <View style={styles.rowContent}>
            <Text style={styles.labelRegular}>Username: </Text>
            <Text style={styles.labelBold}>{dataRouter.Username}</Text>
          </View>
          <Gap height={12} />
          <View style={styles.rowContent}>
            <Text style={styles.labelRegular}>Nomor KwH: </Text>
            <Text style={styles.labelBold}>{dataRouter.NomorKWH}</Text>
          </View>
          <Gap height={12} />
          <View>
            <Text style={styles.labelRegular}>Alamat: </Text>
            <Text style={styles.labelBold}>{dataRouter.Alamat}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailPelanggan;
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
});
