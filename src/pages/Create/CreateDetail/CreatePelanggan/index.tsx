import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Fonts from '../../../../utils/Fonts';
import {Gap, HeaderBar, Modal} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';
import {useCreatePelanggan} from './function';

const CreatePelanggan = () => {
  const {
    dataTarif,
    tarifValue,
    setTarifValue,
    form,
    setForm,
    modal,
    setModal,
    onPressBuat,
  } = useCreatePelanggan();
  return (
    <View style={styles.container}>
      <HeaderBar title="Buat Data Pelanggan" onPress={() => goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.labelRegular}>Masukan ID Pengguna</Text>
          <Gap height={12} />
          <TextInput
            value={form.id_pelanggan}
            placeholder="ID Penggunaan"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            editable={false}
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Nama Pelanggan</Text>
          <Gap height={12} />
          <TextInput
            value={form.nama_pelanggan}
            placeholder="Masukan Nama Pelanggan"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            onChangeText={nama_pelanggan => setForm({...form, nama_pelanggan})}
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Username</Text>
          <Gap height={12} />
          <TextInput
            value={form.username}
            placeholder="Masukan Nama Pelanggan"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            onChangeText={username => setForm({...form, username})}
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Kata Sandi</Text>
          <Gap height={12} />
          <TextInput
            value={form.password}
            placeholder="Masukan Kata Sandi"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            onChangeText={password => setForm({...form, password})}
            secureTextEntry
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Nomor KWH</Text>
          <Gap height={12} />
          <TextInput
            value={form.nomor_kwh}
            placeholder="Masukan Nomor KWH"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            onChangeText={nomor_kwh => setForm({...form, nomor_kwh})}
            keyboardType="numeric"
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Alamat</Text>
          <Gap height={12} />
          <TextInput
            value={form.alamat}
            placeholder="Masukan Alamat"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            onChangeText={alamat => setForm({...form, alamat})}
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih ID Tarif</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => setModal(true)}>
            <Text style={styles.labelRegular}>
              {tarifValue.length > 0 ? tarifValue : 'Pilih ID Tarif'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <TouchableOpacity
            disabled={
              (form.nama_pelanggan &&
                form.username &&
                form.password &&
                form.nomor_kwh &&
                form.alamat &&
                form.id_tarif) === ''
                ? true
                : false
            }
            style={styles.buttonEdit}
            onPress={onPressBuat}>
            <Text style={styles.labelEdit}>Buat Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal isVisible={modal} close={() => setModal(false)} text="Pilih Tarif">
        <FlatList
          data={dataTarif}
          keyExtractor={item => item.IDTarif}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    tarifValue === item.IDTarif ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                setTarifValue(item.IDTarif);
                setModal(false);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: tarifValue === item.IDTarif ? 'white' : 'black',
                  },
                ]}>
                {item.IDTarif}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
};

export default CreatePelanggan;
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
