import React from 'react';
import {View, StyleSheet} from 'react-native';

interface DividerProps {
  mode?: string;
}

const Divider = ({mode}: DividerProps) => {
  const styles = StyleSheet.create({
    divider: {
      width: mode === 'vertical' ? 1 : '100%',
      height: mode === 'vertical' ? '100%' : 1,
      backgroundColor: '#F0EBE3',
      opacity: 8,
    },
  });
  return <View style={styles.divider} />;
};

export default Divider;
