/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useFunctionDashboard} from './function';
import {Direct, Divider, Gap} from '../../components';
import Fonts from '../../utils/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LogoPLN} from '../../assets';
import {ScrollView} from 'react-native';
import SectionPenggunaan from './components/SectionPenggunaan';
import SectionPelanggan from './components/SectionPelanggan';
import SectionTagihan from './components/SectionTagihan';
import {navigate} from '../../utils/Navigation';
const Dashboard = () => {
  const {
    dataPenggunaan,
    dataPelanggan,
    dataTagihan,
    keyExtractorPenggunaan,
    keyExtractorPelanggan,
    keyExtractorTagihan,
    handleRefresh,
    loadingPelanggan,
    loadingPenggunaan,
    loadingTagihan,
  } = useFunctionDashboard();

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={loadingPelanggan || loadingPenggunaan || loadingTagihan}
            onRefresh={handleRefresh}
          />
        }>
        <Image source={LogoPLN} style={styles.logoImg} resizeMode="contain" />
        <Text style={styles.label}>Fitur Utama</Text>
        <View style={styles.contentFitur}>
          <View style={styles.borderModel}>
            <Entypo name="bar-graph" size={20} color={'#1a94aa'} />
            <Gap height={12} />
            <Text style={styles.labelKolom}>Jumlah Penggunaan</Text>
            <Text style={styles.lableLength}>{dataPenggunaan.length ?? 0}</Text>
          </View>
          <View style={styles.borderModel}>
            <MaterialCommunityIcons
              name="account"
              size={20}
              color={'#1a94aa'}
            />
            <Gap height={12} />
            <Text style={styles.labelKolom}>Jumlah Pelanggan</Text>
            <Text style={styles.lableLength}>{dataPelanggan.length ?? 0}</Text>
          </View>
          <View style={styles.borderModel}>
            <Ionicons name="document-text" size={20} color={'#1a94aa'} />
            <Gap height={12} />
            <Text style={styles.labelKolom}>Jumlah Tagihan</Text>
            <Text style={styles.lableLength}>{dataTagihan.length ?? 0}</Text>
          </View>
        </View>
        <Gap height={12} />
        <Divider />
        <Gap height={12} />
        <FlatList
          scrollEnabled={false}
          data={dataPenggunaan.slice(0, 3) ?? []}
          keyExtractor={keyExtractorPenggunaan}
          renderItem={({item}) => <SectionPenggunaan item={item} />}
          ListHeaderComponent={() => (
            <View style={styles.contetRowCenter}>
              <Text style={styles.label}>Ringkasan Penggunaan</Text>
              <Direct
                text="Lihat Semua"
                show
                onPress={() => navigate('SearchPenggunaan')}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
        <Gap height={12} />
        <Divider />
        <Gap height={12} />
        <FlatList
          scrollEnabled={false}
          data={dataPelanggan.slice(0, 3) ?? []}
          keyExtractor={keyExtractorPelanggan}
          renderItem={({item}) => <SectionPelanggan item={item} />}
          ListHeaderComponent={() => (
            <View style={styles.contetRowCenter}>
              <Text style={styles.label}>Ringkasan Pelanggan</Text>
              <Direct
                text="Lihat Semua"
                show
                onPress={() => navigate('SearchPelanggan')}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
        <Gap height={12} />
        <Divider />
        <Gap height={12} />
        <FlatList
          scrollEnabled={false}
          data={dataTagihan.slice(0, 3) ?? []}
          keyExtractor={keyExtractorTagihan}
          renderItem={({item}) => <SectionTagihan item={item} />}
          ListHeaderComponent={() => (
            <View style={styles.contetRowCenter}>
              <Text style={styles.label}>Ringkasan Tagihan</Text>
              <Direct
                text="Lihat Semua"
                show
                onPress={() => navigate('SearchTagihan')}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
        <Gap height={12} />
      </ScrollView>
    </View>
  );
};

export default Dashboard;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  label: {
    color: 'black',
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.fontFamily.medium,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  contentFitur: {
    // flex: 1 / 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
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
  },
  labelKolom: {
    color: 'black',
    width: 95,
    fontSize: Fonts.size.xsmall,
    fontFamily: Fonts.fontFamily.regular,
  },
  lableLength: {
    color: '#1a94aa',
    fontSize: Fonts.size.small,
    fontFamily: Fonts.fontFamily.bold,
  },
  logoImg: {
    width: 70,
    height: 70,
  },
  contetRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
