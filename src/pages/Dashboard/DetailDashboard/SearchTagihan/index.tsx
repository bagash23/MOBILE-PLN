import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSearchTagihan} from './function';
import {Divider, HeaderBar, Loading} from '../../../../components';
import Fonts from '../../../../utils/Fonts';
import {goBack} from '../../../../utils/Navigation';
import SectionTagihan from '../../components/SectionTagihan';

const SearchTagihan = () => {
  const {loadingTagihan, dataTagihan} = useSearchTagihan();
  return (
    <View style={styles.container}>
      <HeaderBar title="Lihat Semua Tagihan" onPress={() => goBack()} />
      <FlatList
        scrollEnabled={false}
        data={dataTagihan ?? []}
        keyExtractor={item => item.IDTagihan}
        renderItem={({item}) => <SectionTagihan item={item} />}
        ItemSeparatorComponent={() => <Divider />}
      />
      {loadingTagihan && <Loading />}
    </View>
  );
};

export default SearchTagihan;
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
