import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Fonts from '../utils/Fonts';
import Feather from 'react-native-vector-icons/Feather';

interface IProps {
  text: string;
  show?: boolean;
  onPress?: () => void;
}

const Direct = ({text, show, onPress}: IProps) => {
  return (
    <TouchableOpacity style={styles.contentBtn} onPress={onPress}>
      <Text style={styles.lableBtn}>{text}</Text>
      {show && <Feather name="arrow-right" size={16} color={'#1a94aa'} />}
    </TouchableOpacity>
  );
};

export default Direct;
export const styles = StyleSheet.create({
  lableBtn: {
    fontFamily: Fonts.fontFamily.bold,
    fontSize: Fonts.size.small,
    color: '#1a94aa',
  },
  contentBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
