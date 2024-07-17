import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useLogin} from './function';
import {Gap, Loading} from '../../../components';

const LoginScreen = () => {
  const {iForm, setIForm, handleOnPress, loadingLogin} = useLogin();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PT PLN (Persero)</Text>
      <Gap height={20} />
      <View style={styles.viewInputan}>
        <Text style={styles.label}>Masukan Username</Text>
        <Gap height={12} />
        <TextInput
          value={iForm.username}
          style={styles.inputan}
          placeholderTextColor={'#000'}
          placeholder="Username input"
          onChangeText={username => setIForm({...iForm, username})}
        />
        <Gap height={12} />
        <Text style={styles.label}>Masukan Kata Sandi</Text>
        <Gap height={12} />
        <TextInput
          value={iForm.password}
          placeholder="Password input"
          style={styles.inputan}
          placeholderTextColor={'#000'}
          onChangeText={password => setIForm({...iForm, password})}
          secureTextEntry
        />
        <Gap height={12} />
        <TouchableOpacity
          disabled={
            (iForm.username && iForm.password).length > 0 ? false : true
          }
          style={styles.button}
          onPress={() => handleOnPress()}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
      </View>
      {loadingLogin && <Loading />}
    </View>
  );
};

export default LoginScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  inputan: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#FFF',
    color: '#000',
  },
  viewInputan: {
    paddingHorizontal: 12,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#1a94aa',
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  textBtn: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  label: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
  },
});
