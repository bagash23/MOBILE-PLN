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
import {Gap, HeaderBar, Modal} from '../../../../components';
import {useCreatPenggunaan} from './function';

const CreatePenggunaan = () => {
  const {
    dataPelanggan,
    handlePressDropDown,
    form,
    setForm,
    showDropdown,
    valueDropDown,
    setShowDropdown,
    handlePressBuat,
    handleChangeText,
    last5Years,
    valueYear,
    setValueYear,
    showYear,
    setShowYear,
  } = useCreatPenggunaan();
  return (
    <View style={styles.container}>
      <View>
        <HeaderBar title="Buat Data Penggunaan" />
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.labelRegular}>Masukan ID Pengguna</Text>
            <Gap height={12} />
            <TextInput
              value={form.id_penggunaan}
              placeholder="ID Penggunaan"
              style={styles.inputan}
              placeholderTextColor={'#000'}
              editable={false}
            />
            <Gap height={12} />
            <Text style={styles.labelRegular}>Masukan ID Pelanggan</Text>
            <Gap height={12} />
            <TouchableOpacity
              style={[styles.inputan, {paddingVertical: 12}]}
              onPress={() => setShowDropdown(true)}>
              <Text style={styles.labelRegular}>
                {valueDropDown.length > 0
                  ? valueDropDown
                  : 'Pilih ID Pelanggan'}
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
            <Text style={styles.labelRegular}>Masukan Tahun</Text>
            <Gap height={12} />
            <TouchableOpacity
              style={[styles.inputan, {paddingVertical: 12}]}
              onPress={() => setShowYear(true)}>
              <Text style={styles.labelRegular}>
                {valueYear.length > 0 ? valueYear : 'Pilih Tahun'}
              </Text>
            </TouchableOpacity>
            <Gap height={12} />
            <Text style={styles.labelRegular}>Masukan Meter Awal</Text>
            <Gap height={12} />
            <TextInput
              value={form.meter_awal}
              placeholder="Masukan Meter Awal"
              style={styles.inputan}
              placeholderTextColor={'#000'}
              onChangeText={meter_awal => setForm({...form, meter_awal})}
              keyboardType="numeric"
            />
            <Gap height={12} />
            <Text style={styles.labelRegular}>Masukan Meter Akhir</Text>
            <Gap height={12} />
            <TextInput
              value={form.meter_akhir}
              placeholder="Masukan Meter Akhir"
              style={styles.inputan}
              placeholderTextColor={'#000'}
              onChangeText={meter_akhir => setForm({...form, meter_akhir})}
              keyboardType="numeric"
            />
            <Gap height={12} />
            <TouchableOpacity
              disabled={
                (form.id_penggunaan &&
                  form.id_pelanggan &&
                  form.bulan &&
                  form.meter_akhir &&
                  form.tahun &&
                  form.meter_awal) === ''
                  ? true
                  : false
              }
              style={styles.buttonEdit}
              onPress={handlePressBuat}>
              <Text style={styles.labelEdit}>Buat Data</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal
        isVisible={showDropdown}
        close={() => setShowDropdown(false)}
        text="Pilih ID Pelanggan">
        <FlatList
          data={dataPelanggan}
          keyExtractor={item => item.IDPelanggan}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    valueDropDown === item.IDPelanggan ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => handlePressDropDown(item.IDPelanggan)}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color:
                      valueDropDown === item.IDPelanggan ? 'white' : 'black',
                  },
                ]}>
                {item.IDPelanggan}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      <Modal
        isVisible={showYear}
        close={() => setShowYear(false)}
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
                    valueYear === item.toString() ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                setValueYear(item.toString());
                setShowYear(false);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: valueYear === item.toString() ? 'white' : 'black',
                  },
                ]}>
                {item.toString()}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
};

export default CreatePenggunaan;
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
