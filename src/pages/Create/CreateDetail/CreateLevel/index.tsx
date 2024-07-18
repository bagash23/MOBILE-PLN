import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useCreateLevel} from './function';
import Fonts from '../../../../utils/Fonts';
import {Gap, HeaderBar} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';

const CreateLevel = () => {
  const {form, setForm, onPressBuat} = useCreateLevel();
  return (
    <View style={styles.container}>
      <HeaderBar title="Buat Data Level" onPress={() => goBack()} />
      <View style={styles.content}>
        <Text style={styles.labelRegular}>Masukan ID LEVEL</Text>
        <Gap height={12} />
        <TextInput
          value={form.id_level}
          placeholder="ID LEVEL"
          style={styles.inputan}
          placeholderTextColor={'#000'}
          onChangeText={id_level => setForm({...form, id_level})}
        />
        <Gap height={12} />
        <Text style={styles.labelRegular}>Masukan Level</Text>
        <Gap height={12} />
        <TextInput
          value={form.level}
          placeholder="LEVEL"
          style={styles.inputan}
          placeholderTextColor={'#000'}
          onChangeText={level => setForm({...form, level})}
        />
        <Gap height={12} />
        <TouchableOpacity
          disabled={(form.id_level && form.level) === '' ? true : false}
          style={styles.buttonEdit}
          onPress={onPressBuat}>
          <Text style={styles.labelEdit}>Buat Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateLevel;
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
