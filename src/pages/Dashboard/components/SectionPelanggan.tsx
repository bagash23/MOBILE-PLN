import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TypePelanggan} from '../function';
import Fonts from '../../../utils/Fonts';
import {Direct, Gap} from '../../../components';
import {navigate} from '../../../utils/Navigation';

const SectionPelanggan = ({item}: {item: TypePelanggan}) => {
  return (
    <View style={styles.contentRow}>
      <View>
        <Text style={styles.labelIDPelanggan}>{item.IDPelanggan}</Text>
        <Text style={styles.labelRegular}>{item.NamaPelanggan}</Text>
        <Gap height={12} />
        <Direct
          text="Lihat Detail"
          show
          onPress={() =>
            navigate('DetailPelanggan', {
              data: item,
            })
          }
        />
      </View>
      <View>
        <Text
          style={styles.labelRegularRight}>{`ID Tarif: ${item.IDTarif}`}</Text>
        <Text style={styles.labelRegularRight}>{`KWH: ${item.NomorKWH}`}</Text>
      </View>
    </View>
  );
};

export default SectionPelanggan;
export const styles = StyleSheet.create({
  contentRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  labelIDPelanggan: {
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
    fontSize: Fonts.size.large,
  },
  labelRegularRight: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.xsmall,
    textAlign: 'right',
  },
  labelRegular: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.xsmall,
  },
});
