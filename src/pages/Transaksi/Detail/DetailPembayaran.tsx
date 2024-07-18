import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Fonts from '../../../utils/Fonts';
import {Gap, HeaderBar, Loading} from '../../../components';
import {goBack} from '../../../utils/Navigation';
import {TypeDataPembayaran, useDetailPembayaran} from './function';
import moment from 'moment';
import {formatCurrency} from '../../../utils/Helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailPembayaran = () => {
  const {
    dataRouter,
    keyExtractorPembayaran,
    loadingPembayaran,
    dataPembayaran,
    onPressBayar,
  } = useDetailPembayaran();

  const RenderItem = ({item}: {item: TypeDataPembayaran}) => {
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.labelRegular}>ID Pembayaran: </Text>
          <Text style={styles.labelBold}>{item.IDPembayaran}</Text>
        </View>
        <Gap height={12} />
        <View>
          <Text style={styles.labelRegular}>ID Tagihan: </Text>
          <Text style={styles.labelBold}>{item.IDTagihan}</Text>
        </View>
        <Gap height={12} />
        <View>
          <Text style={styles.labelRegular}>ID Pelanggan: </Text>
          <Text style={styles.labelBold}>{item.IDPelanggan}</Text>
        </View>
        <Gap height={12} />
        <View>
          <Text style={styles.labelRegular}>Tanggal Bayar: </Text>
          <Text style={styles.labelBold}>
            {moment(item.TglBayar).format('DD MMM YYYY')}
          </Text>
        </View>
        <Gap height={12} />
        <View>
          <Text style={styles.labelRegular}>Biaya Admin: </Text>
          <Text style={styles.labelBold}>
            {formatCurrency(item.BiayaAdmin)}
          </Text>
        </View>
        <Gap height={12} />
        <View>
          <Text style={styles.labelRegular}>Total Bayar: </Text>
          <Text style={styles.labelBold}>
            {formatCurrency(item.TotalBayar)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="Detail Pembayaran" onPress={() => goBack()} />
      <FlatList
        scrollEnabled={false}
        data={dataPembayaran.filter(e => e.IDTagihan === dataRouter)}
        keyExtractor={keyExtractorPembayaran}
        renderItem={({item}) => <RenderItem item={item} />}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={[styles.labelRegular, {textAlign: 'center'}]}>
                Sepertinya data pembayaran anda belum dibuat
              </Text>
            </View>
          );
        }}
      />
      {dataPembayaran.filter(e => e.IDTagihan === dataRouter).length > 0 && (
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => onPressBayar()}>
          <Text style={styles.labelEdit}>Bayar Sekarang!</Text>
          <MaterialCommunityIcons name="bank" size={20} color={'white'} />
        </TouchableOpacity>
      )}
      {loadingPembayaran && <Loading />}
    </View>
  );
};

export default DetailPembayaran;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  labelBold: {
    color: 'black',
    fontFamily: Fonts.fontFamily.bold,
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
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  labelEdit: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.fontFamily.medium,
    color: 'white',
  },
});
