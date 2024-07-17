import React, {Dispatch, SetStateAction} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../../../utils/Fonts';
import {Divider, Gap} from '../../../../../components';
import {goBack} from '../../../../../utils/Navigation';

interface IProps {
  value: {
    bulan: number;
    tahun: number;
    meter_awal: number;
    meter_akhir: number;
  };
  setForm: Dispatch<
    SetStateAction<{
      bulan: number;
      tahun: number;
      meter_awal: number;
      meter_akhir: number;
    }>
  >;
  isVisible: boolean;
  close: () => void;
  onPress: () => void;
}

const ModalInputan = ({value, setForm, isVisible, close, onPress}: IProps) => {
  const {width, height} = Dimensions.get('screen');
  return (
    <Modal
      isVisible={isVisible}
      deviceWidth={width}
      deviceHeight={height}
      style={styles.modalContainerStyle}>
      <View style={styles.contentModal}>
        <View style={styles.rowCenterBetween}>
          <Text style={styles.labelBold}>Ubah Penggunaan</Text>
          <TouchableOpacity accessible={true} onPress={close}>
            <MaterialCommunityIcons name="close" size={20} color={'black'} />
          </TouchableOpacity>
        </View>
        <Gap height={12} />
        <Divider />
        <Gap height={12} />
        <View style={{marginVertical: 12}}>
          <View>
            <Text style={styles.labelRegular}>Masukan Bulan:</Text>
            <TextInput
              placeholder="Masukan bulan"
              placeholderTextColor={'#000'}
              value={value.bulan.toString()}
              style={styles.inputan}
              keyboardType="numeric"
              onChangeText={bulan => {
                const bulanInt = parseInt(bulan, 10); // Convert to integer
                if (!isNaN(bulanInt) && bulanInt >= 1 && bulanInt <= 12) {
                  setForm({...value, bulan: bulanInt});
                } else if (bulan === '') {
                  setForm({...value, bulan: ''});
                }
              }}
            />
          </View>
          <Gap height={12} />
          <View>
            <Text style={styles.labelRegular}>Masukan Tahun:</Text>
            <TextInput
              placeholder="Masukan tahun"
              placeholderTextColor={'#000'}
              value={value.tahun.toString()}
              style={styles.inputan}
              keyboardType="numeric"
              onChangeText={tahun => setForm({...value, tahun})}
            />
          </View>
          <Gap height={12} />
          <View>
            <Text style={styles.labelRegular}>Masukan Meter Awal:</Text>
            <TextInput
              placeholder="Masukan tahun"
              placeholderTextColor={'#000'}
              value={value.meter_awal.toString()}
              style={styles.inputan}
              keyboardType="numeric"
              onChangeText={meter_awal => setForm({...value, meter_awal})}
            />
          </View>
          <Gap height={12} />
          <View>
            <Text style={styles.labelRegular}>Masukan Meter Akhir:</Text>
            <TextInput
              placeholder="Masukan tahun"
              placeholderTextColor={'#000'}
              value={value.meter_akhir.toString()}
              style={styles.inputan}
              keyboardType="numeric"
              onChangeText={meter_akhir => setForm({...value, meter_akhir})}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => {
            onPress();
            close();
            goBack();
          }}>
          <Text style={styles.labelEdit}>Ubah Sekarang!</Text>
          <MaterialCommunityIcons
            name="circle-edit-outline"
            size={20}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalInputan;
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
  rowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelBold: {
    color: 'black',
    fontFamily: Fonts.fontFamily.medium,
    fontSize: Fonts.size.large,
  },
  labelRegular: {
    color: 'black',
    fontFamily: Fonts.fontFamily.regular,
    fontSize: Fonts.size.small,
  },
  inputan: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#FFF',
    color: '#000',
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
