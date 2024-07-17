import React from 'react';
import {View} from 'react-native';

interface IProps {
  width?: number;
  height?: number;
}

const Gap = ({width, height}: IProps) => {
  return <View style={{width, height}} />;
};

export default Gap;
