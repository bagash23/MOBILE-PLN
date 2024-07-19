import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider, HeaderBar, Loading} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';
import Fonts from '../../../../utils/Fonts';
import {useSearchPenggunaan} from './function';
import {FlatList} from 'react-native';
import SectionPenggunaan from '../../components/SectionPenggunaan';

const SearchPenggunaan = () => {
  const {
    dataPenggunaan,
    loadingPenggunaan,
    idUser,
    infoShow,
    setInfoShow,
    listShow,
  } = useSearchPenggunaan();
  return (
    <View style={styles.container}>
      <HeaderBar title="Lihat Semua Penggunaan" onPress={() => goBack()} />
      <View style={[styles.content, styles.rowContent]}>
        {listShow.map(i => (
          <TouchableOpacity onPress={() => setInfoShow(i.title)}>
            <Text style={{color: infoShow === i.title ? 'orange' : 'black'}}>
              {i.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={
          infoShow === 'Saya'
            ? dataPenggunaan.filter(e => e.IDPelanggan === idUser) ?? []
            : dataPenggunaan ?? []
        }
        keyExtractor={item => item.IDPenggunaan}
        renderItem={({item}) => <SectionPenggunaan item={item} />}
        ListEmptyComponent={() => (
          <View style={styles.content}>
            <Text style={styles.labelRegular}>Data tidak ditemukan</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <Divider />}
      />
      {loadingPenggunaan && <Loading />}
    </View>
  );
};

export default SearchPenggunaan;
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
