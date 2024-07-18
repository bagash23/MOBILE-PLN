import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../../../utils/Fonts';
import {Gap, HeaderBar, Modal} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';
import {useCreateKaryawan} from './function';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';

const CreateKaryawan = () => {
  const {
    form,
    setForm,
    idValue,
    setIDValue,
    showModal,
    setShowModal,
    idUserValue,
    setIDUseValue,
    showModalUser,
    setShowMoalUser,
    dataLevel,
    onPressBuat,
  } = useCreateKaryawan();
  return (
    <View style={styles.container}>
      <HeaderBar title="Buat Data Karywan" onPress={() => goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.labelRegular}>Pilih ID User</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => setShowMoalUser(true)}>
            <Text style={styles.labelRegular}>
              {idUserValue.length > 0 ? idUserValue : 'Pilih ID User'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Username</Text>
          <Gap height={12} />
          <TextInput
            value={form.username}
            placeholder="Masukan Username"
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
          <Text style={styles.labelRegular}>Masukan Nama Admin</Text>
          <Gap height={12} />
          <TextInput
            value={form.nama_admin}
            placeholder="Masukan nama Admin"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            onChangeText={nama_admin => setForm({...form, nama_admin})}
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih ID Level</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => setShowModal(true)}>
            <Text style={styles.labelRegular}>
              {idValue.length > 0 ? idValue : 'Pilih ID Pelanggan'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <TouchableOpacity
            disabled={
              (form.id_user &&
                form.username &&
                form.password &&
                form.nama_admin &&
                form.id_level) === ''
                ? true
                : false
            }
            style={styles.buttonEdit}
            onPress={onPressBuat}>
            <Text style={styles.labelEdit}>Buat Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        isVisible={showModalUser}
        close={() => setShowMoalUser(false)}
        text="Pilih ID">
        <FlatList
          data={dataLevel}
          keyExtractor={item => item.IDLevel}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    idUserValue === item.IDLevel ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                setIDUseValue(item.IDLevel);
                setShowMoalUser(false);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: idUserValue === item.IDLevel ? 'white' : 'black',
                  },
                ]}>
                {item.IDLevel}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      <Modal
        isVisible={showModal}
        close={() => setShowModal(false)}
        text="Pilih ID">
        <FlatList
          data={dataLevel}
          keyExtractor={item => item.IDLevel}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    idValue === item.IDLevel ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                setIDValue(item.IDLevel);
                setShowMoalUser(false);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: idValue === item.IDLevel ? 'white' : 'black',
                  },
                ]}>
                {item.IDLevel}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
};

export default CreateKaryawan;
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
