import React, {ReactNode} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Fonts from '../utils/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

interface IProps {
  isVisible: boolean;
  close: () => void;
  children?: undefined | ReactNode;
  text?: string;
}

const MoalComponent = ({isVisible, close, children, text}: IProps) => {
  const {width, height} = Dimensions.get('window');
  return (
    <Modal
      isVisible={isVisible}
      deviceWidth={width}
      deviceHeight={height}
      style={styles.modalContainerStyle}>
      <View style={styles.contentModal}>
        <View style={styles.rowBettween}>
          <Text style={styles.labelRegular}>{text}</Text>
          <MaterialCommunityIcons
            name="close"
            size={20}
            onPress={close}
            color={'black'}
          />
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default MoalComponent;
export const styles = StyleSheet.create({
  modalContainerStyle: {
    justifyContent: 'flex-end',
    margin: 0,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  contentModal: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  iconClose: {
    width: 16,
    height: 16,
  },
  labelRegular: {
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
    fontSize: Fonts.size.medium,
    textAlign: 'left',
  },
  rowBettween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
