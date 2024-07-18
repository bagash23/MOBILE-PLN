import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Gap, HeaderBar} from '../../components';
import {goBack, navigate} from '../../utils/Navigation';
import Fonts from '../../utils/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Create = () => {
  return (
    <View style={styles.container}>
      <HeaderBar title="Buat Data" onPress={() => goBack()} />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.borderModel}
          onPress={() => navigate('CreatePenggunaan')}>
          <View style={styles.rowContent}>
            <Entypo name="bar-graph" size={20} color={'#1a94aa'} />
            <Gap width={10} />
            <Text style={styles.labelRegular}>Buat Data Penggunaan</Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={'#1a94aa'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.borderModel}
          onPress={() => navigate('CreateTarif')}>
          <View style={styles.rowContent}>
            <MaterialIcons name="discount" size={20} color={'#1a94aa'} />
            <Gap width={10} />
            <Text style={styles.labelRegular}>Buat Data Tarif</Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={'#1a94aa'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.borderModel}
          onPress={() => navigate('CreateTagihan')}>
          <View style={styles.rowContent}>
            <Ionicons name="document-text" size={20} color={'#1a94aa'} />
            <Gap width={10} />
            <Text style={styles.labelRegular}>Buat Data Tagihan</Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={'#1a94aa'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderModel}>
          <View style={styles.rowContent}>
            <MaterialCommunityIcons
              name="account"
              size={20}
              color={'#1a94aa'}
            />
            <Gap width={10} />
            <Text style={styles.labelRegular}>Buat Data Pelanggan</Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={'#1a94aa'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.borderModel}
          onPress={() => navigate('CreatePembayaran')}>
          <View style={styles.rowContent}>
            <MaterialCommunityIcons name="cash" size={20} color={'#1a94aa'} />
            <Gap width={10} />
            <Text style={styles.labelRegular}>Buat Data Pembayaran</Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={'#1a94aa'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderModel}>
          <View style={styles.rowContent}>
            <MaterialCommunityIcons
              name="chevron-double-up"
              size={20}
              color={'#1a94aa'}
            />
            <Gap width={10} />
            <Text style={styles.labelRegular}>Buat Data Level</Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={'#1a94aa'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderModel}>
          <View style={styles.rowContent}>
            <MaterialCommunityIcons
              name="account-hard-hat"
              size={20}
              color={'#1a94aa'}
            />
            <Gap width={10} />
            <Text style={styles.labelRegular}>Buat Data Karyawan</Text>
          </View>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={'#1a94aa'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  },
  borderModel: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: '#F0EBE3',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
});
