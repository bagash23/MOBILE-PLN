import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TypeTagihan} from '../function';
import Fonts from '../../../utils/Fonts';
import moment from 'moment';
import {Direct, Gap} from '../../../components';
import {navigate} from '../../../utils/Navigation';

const SectionTagihan = ({item}: {item: TypeTagihan}) => {
  return (
    <View style={styles.contentRow}>
      <View>
        <Text style={styles.labelRegular}>{`${moment(item.Bulan, 'M').format(
          'MMM',
        )} - ${item.Tahun}`}</Text>
        <Text style={styles.labelIDPelanggan}>{item.IDTagihan}</Text>
        <Text style={styles.labelRegular}>{item.IDPelanggan}</Text>
        <Gap height={12} />
        <Direct
          text="Lihat Detail"
          show
          onPress={() =>
            navigate('DetailTagihan', {
              data: item,
            })
          }
        />
      </View>
      <View>
        <View>
          <Text style={[styles.labelStatus, colorTextStatus(item.Status)]}>
            {item.Status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SectionTagihan;
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
  labelRegular: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.xsmall,
  },
  labelStatus: {
    fontFamily: Fonts.fontFamily.bold,
    fontSize: Fonts.size.xsmall,
    color: 'white',
  },
});

export const colorTextStatus = (text: string) => ({
  backgroundColor: text === 'UNPAID' ? 'red' : '#1a94aa',
  paddingHorizontal: 12,
  paddingVertical: 5,
  borderRadius: 12,
});
