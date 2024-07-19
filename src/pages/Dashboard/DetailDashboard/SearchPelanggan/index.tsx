import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSearchPelanggan} from './function';
import {Divider, HeaderBar, Loading} from '../../../../components';
import Fonts from '../../../../utils/Fonts';
import {goBack} from '../../../../utils/Navigation';
import SectionPelanggan from '../../components/SectionPelanggan';

const SearchPelanggan = () => {
  const {loadingPelanggan, dataPelanggan} = useSearchPelanggan();
  return (
    <View style={styles.container}>
      <HeaderBar title="Lihat Semua Penggunaan" onPress={() => goBack()} />
      <FlatList
        scrollEnabled={false}
        data={dataPelanggan ?? []}
        keyExtractor={item => item.IDPelanggan}
        renderItem={({item}) => <SectionPelanggan item={item} />}
        ItemSeparatorComponent={() => <Divider />}
      />
      {loadingPelanggan && <Loading />}
    </View>
  );
};

export default SearchPelanggan;
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
    gap: 12,
  },
});
