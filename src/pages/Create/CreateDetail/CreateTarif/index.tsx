import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../../../utils/Fonts';
import {useCreateTarif} from './function';
import {Gap, HeaderBar} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';

const CreateTarif = () => {
  const {form, setForm, onPressCreate} = useCreateTarif();
  return (
    <View style={styles.container}>
      <HeaderBar title="Buat Data Tarif" onPress={() => goBack()} />
      <View style={styles.content}>
        <Text style={styles.labelRegular}>Masukan ID Tarif</Text>
        <Gap height={12} />
        <TextInput
          value={form.id_tarif}
          placeholder="Masukan ID Tarif"
          style={styles.inputan}
          placeholderTextColor={'#000'}
          keyboardType="numeric"
          editable={false}
        />
        <Gap height={12} />
        <Text style={styles.labelRegular}>Masukan Daya</Text>
        <Gap height={12} />
        <TextInput
          value={form.daya}
          placeholder="Masukan Daya"
          style={styles.inputan}
          placeholderTextColor={'#000'}
          onChangeText={daya => setForm({...form, daya})}
          keyboardType="numeric"
        />
        <Gap height={12} />
        <Text style={styles.labelRegular}>Masukan Tarif KWH</Text>
        <Gap height={12} />
        <TextInput
          value={form.tarif_perkwh}
          placeholder="Masukan tarif per-kwh"
          style={styles.inputan}
          placeholderTextColor={'#000'}
          onChangeText={tarif_perkwh => setForm({...form, tarif_perkwh})}
          keyboardType="numeric"
        />
        <Gap height={12} />
        <TouchableOpacity
          disabled={
            (form.id_tarif || form.daya || form.tarif_perkwh) === ''
              ? true
              : false
          }
          style={styles.buttonEdit}
          onPress={onPressCreate}>
          <Text style={styles.labelEdit}>Buat Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateTarif;
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
