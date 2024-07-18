import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TypePenggunaan} from '../function';
import moment from 'moment';
import Fonts from '../../../utils/Fonts';
import {Direct, Gap} from '../../../components';
import {navigate} from '../../../utils/Navigation';

const SectionPenggunaan = ({item}: {item: TypePenggunaan}) => {
  const convertBulan = moment(item.Bulan, 'M').format('MMM');
  return (
    <View style={styles.contentPenggunaan}>
      <View>
        <Text
          style={
            styles.labelBulanPenggunaan
          }>{`${convertBulan} - ${item.Tahun}`}</Text>
        <Text style={styles.labelIDPenggunaan}>{item.IDPenggunaan}</Text>
        <Text style={styles.labelIDPelanggan}>{item.IDPelanggan}</Text>
        <Gap height={12} />
        <Direct
          text="Lihat Detail"
          show
          onPress={() =>
            navigate('DetailPenggunaan', {
              data: item,
            })
          }
        />
      </View>
      <Text
        style={
          styles.labelMater
        }>{`Meter Awal ${item.MeterAwal} - Meter Akhir ${item.MeterAkhir}`}</Text>
    </View>
  );
};

export default SectionPenggunaan;
export const styles = StyleSheet.create({
  contentPenggunaan: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  labelBulanPenggunaan: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.xsmall,
  },
  labelIDPenggunaan: {
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
    fontSize: Fonts.size.large,
  },
  labelIDPelanggan: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.xsmall,
  },
  labelMater: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.xsmall,
  },
});
