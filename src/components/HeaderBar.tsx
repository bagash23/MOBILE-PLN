import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonts from '../utils/Fonts';
import Gap from './Gap';

interface HeaderProps {
  title: string;
  onPress?: () => void;
}

const HeaderBar = ({title, onPress}: HeaderProps) => {
  return (
    <View style={styles.headerBar}>
      <AntDesign name="arrowleft" size={20} color={'black'} onPress={onPress} />
      <Gap width={2} />
      <Text style={styles.labelBold}>{title}</Text>
    </View>
  );
};

export default HeaderBar;

export const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 8,
    zIndex: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 2,
    backgroundColor: 'white',
  },
  labelBold: {
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
    fontSize: Fonts.size.large,
  },
});
