import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Fonts from '../../../../utils/Fonts';
import {useCreateTagihan} from './function';
import {Gap, HeaderBar, Modal} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';

const CreateTagihan = () => {
  const {
    form,
    setForm,
    last5Years,
    year,
    showModal,
    setShowModal,
    penggunaan,
    pelanggan,
    handlePressModal,
    handleDataModal,
    dataPenggunaan,
    showModalPelanggan,
    showModalPenggunaan,
    setShowModalPelanggan,
    setShowModalPenggunaan,
    dataPelanggan,
    onPressSimpan,
  } = useCreateTagihan();  
  return (
    <View style={styles.container}>
      <HeaderBar title="Buat Data Tagihan" onPress={() => goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.labelRegular}>Masukan ID Tarif</Text>
          <Gap height={12} />
          <TextInput
            value={form.id_tagihan}
            placeholder="Masukan ID Tagihan"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            keyboardType="numeric"
            editable={false}
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih ID Penggunaan</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => handlePressModal('penggunaan')}>
            <Text style={styles.labelRegular}>
              {penggunaan.length > 0 ? penggunaan : 'Pilih ID Penggunaan'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih ID Pelanggan</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => handlePressModal('pelanggan')}>
            <Text style={styles.labelRegular}>
              {pelanggan.length > 0 ? pelanggan : 'Pilih ID Pelanggan'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Bulan</Text>
          <Gap height={12} />
          <TextInput
            value={form.bulan.toString()}
            placeholder="Bulan"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            onChangeText={bulan => {
              const bulanInt = parseInt(bulan, 10);
              if (!isNaN(bulanInt) && bulanInt >= 1 && bulanInt <= 12) {
                setForm({...form, bulan: bulanInt});
              } else if (bulan === '') {
                setForm({...form, bulan: ''});
              }
            }}
            keyboardType="numeric"
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih Tahun</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => handlePressModal('tahun')}>
            <Text style={styles.labelRegular}>
              {year.length > 0 ? year : 'Pilih Tahun'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Jumlah Meter</Text>
          <Gap height={12} />
          <TextInput
            value={form.jumlah_meter.toString()}
            placeholder="Masukan Jumlah Meter"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            editable={false}
            keyboardType="numeric"
          />
          <Gap height={12} />
          <TouchableOpacity
            disabled={
              (form.id_tagihan && form.id_penggunaan && form.id_pelanggan) ===
              ''
                ? true
                : false
            }
            style={styles.buttonEdit}
            onPress={onPressSimpan}>
            <Text style={styles.labelEdit}>Buat Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* modal */}
      <Modal
        isVisible={showModal}
        close={() => setShowModal(false)}
        text="Pilih Tahun">
        <FlatList
          data={last5Years}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    year === item.toString() ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                handleDataModal(item.toString());
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: year === item.toString() ? 'white' : 'black',
                  },
                ]}>
                {item.toString()}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      <Modal
        isVisible={showModalPenggunaan}
        close={() => setShowModalPenggunaan(false)}
        text="Pilih Penggunaan">
        <FlatList
          data={dataPenggunaan}
          keyExtractor={item => item.IDPenggunaan}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    penggunaan === item.IDPenggunaan ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                handleDataModal(item.IDPenggunaan);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: penggunaan === item.IDPenggunaan ? 'white' : 'black',
                  },
                ]}>
                {item.IDPenggunaan}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      <Modal
        isVisible={showModalPelanggan}
        close={() => setShowModalPelanggan(false)}
        text="Pilih Pelanggan">
        <FlatList
          data={dataPelanggan}
          keyExtractor={item => item.IDPelanggan}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    pelanggan === item.IDPelanggan ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                handleDataModal(item.IDPelanggan);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: pelanggan === item.IDPelanggan ? 'white' : 'black',
                  },
                ]}>
                {item.IDPelanggan}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      {/* end modal */}
    </View>
  );
};

export default CreateTagihan;
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
  content: {paddingHorizontal: 12, paddingVertical: 12, position: 'relative'},
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputan: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#FFF',
    color: '#000',
  },
  dropDown: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  buttonEdit: {
    backgroundColor: '#1a94aa',
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
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
