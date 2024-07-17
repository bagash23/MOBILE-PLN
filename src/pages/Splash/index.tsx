import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {replace} from '../../utils/Navigation';
import {Gap} from '../../components';
import Fonts from '../../utils/Fonts';
import { LogoPLN } from '../../assets';

const SplashScreen = () => {
  const checkToken = async () => {
    const token = await EncryptedStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        replace('MainApp');
      } else {
        replace('LoginScreen');
      }
    }, 3000);
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={LogoPLN} style={styles.logoImg} resizeMode="contain" />
      <Text style={styles.textLogo}>PLN by Mobile</Text>
      <Gap height={20} />
      <ActivityIndicator color={'black'} size={'small'} />
    </View>
  );
};

export default SplashScreen;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    fontSize: Fonts.size.medium,
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
  },
  logoImg: {
    width: 70,
    height: 70,
  },
});
