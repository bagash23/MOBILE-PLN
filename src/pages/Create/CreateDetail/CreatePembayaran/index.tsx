import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Fonts from '../../../../utils/Fonts';
import {Gap, HeaderBar, Modal} from '../../../../components';
import {goBack} from '../../../../utils/Navigation';
import {useCreatePembayaran} from './function';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {formatCurrency} from '../../../../utils/Helper';

const CreatePembayaran = () => {
  const {
    form,
    setForm,
    tagihanValue,
    setTagihanValue,
    pelangganvalue,
    setPelangganValue,
    showModalTagihan,
    setShowModalTagihan,
    showModalPelanggan,
    setShowModalPelanggan,
    showModalTanggal,
    setShowModalTanggal,
    dataTagihan,
    dataPelanggan,
    tanggalValue,
    setTanggalValue,
    onPressBuat,
  } = useCreatePembayaran();
  return (
    <View style={styles.container}>
      <HeaderBar title="Buat Data Pembayaran" onPress={() => goBack()} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.labelRegular}>Masukan ID Tarif</Text>
          <Gap height={12} />
          <TextInput
            value={form.id_pembayaran}
            placeholder="Masukan ID Pembayaran"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            keyboardType="numeric"
            editable={false}
          />
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih ID Tagihan</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => setShowModalTagihan(true)}>
            <Text style={styles.labelRegular}>
              {tagihanValue.length > 0 ? tagihanValue : 'Pilih ID Tagihan'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih ID Pelanggan</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => setShowModalPelanggan(true)}>
            <Text style={styles.labelRegular}>
              {pelangganvalue.length > 0
                ? pelangganvalue
                : 'Pilih ID Pelanggan'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <Text style={styles.labelRegular}>Pilih Tanggal Bayar</Text>
          <Gap height={12} />
          <TouchableOpacity
            style={[styles.inputan, {paddingVertical: 12}]}
            onPress={() => setShowModalTanggal(true)}>
            <Text style={styles.labelRegular}>
              {tanggalValue.length > 0 ? tanggalValue : 'Pilih Tanggal Bayar'}
            </Text>
          </TouchableOpacity>
          <Gap height={12} />
          <Text style={styles.labelRegular}>Masukan Total Bayar</Text>
          <Gap height={12} />
          <TextInput
            value={form.total_bayar}
            placeholder="Masukan Total Bayar"
            style={styles.inputan}
            placeholderTextColor={'#000'}
            keyboardType="numeric"
            onChangeText={total_bayar => setForm({...form, total_bayar})}
          />
          <Gap height={5} />
          <Text style={styles.labelRegular}>
            {`${formatCurrency(Number(form.total_bayar))} +  ${formatCurrency(
              form.biaya_admin.toString(),
            )}`}
          </Text>
          <Gap height={12} />
          <TouchableOpacity
            disabled={
              (form.id_pelanggan &&
                form.id_tagihan &&
                form.total_bayar &&
                form.tgl_bayar) === ''
                ? true
                : false
            }
            style={styles.buttonEdit}
            onPress={onPressBuat}>
            <Text style={styles.labelEdit}>Buat Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* modal */}
      <Modal
        isVisible={showModalTagihan}
        close={() => setShowModalTagihan(false)}
        text="Pilih Tagihan">
        <FlatList
          data={dataTagihan}
          keyExtractor={item => item.IDTagihan}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    tagihanValue === item.IDTagihan ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                setTagihanValue(item.IDTagihan);
                setShowModalTagihan(false);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color: tagihanValue === item.IDTagihan ? 'white' : 'black',
                  },
                ]}>
                {item.IDTagihan}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      <Modal
        isVisible={showModalPelanggan}
        close={() => setShowModalPelanggan(false)}
        text="Pilih Pelanggan">
        <FlatList
          data={dataPelanggan}
          keyExtractor={item => item.IDPelanggan}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.dropDown,
                {
                  backgroundColor:
                    pelangganvalue === item.IDPelanggan ? '#1a94aa' : 'white',
                },
              ]}
              onPress={() => {
                setPelangganValue(item.IDPelanggan);
                setShowModalPelanggan(false);
              }}>
              <Text
                style={[
                  styles.labelRegular,
                  {
                    color:
                      pelangganvalue === item.IDPelanggan ? 'white' : 'black',
                  },
                ]}>
                {item.IDPelanggan}
              </Text>
            </TouchableOpacity>
          )}
        />
      </Modal>
      <Modal
        isVisible={showModalTanggal}
        close={() => setShowModalTanggal(false)}
        text="Pilih Tanggal">
        <View style={styles.contentModal}>
          <Calendar
            initialDate={moment().format('YYYY-MM-DD')}
            hideExtraDays={true}
            markingType={'period'}
            hideArrows={true}
            onDayPress={day => {
              setTanggalValue(day.dateString);
              setShowModalTanggal(false);
            }}
            markedDates={{
              [tanggalValue]: {
                selected: true,
                disableTouchEvent: true,
                color: '#1a94aa',
              },
            }}
          />
        </View>
      </Modal>
      {/* end modal */}
    </View>
  );
};

export default CreatePembayaran;
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
  contentModal: {
    marginHorizontal: 16,
  },
});
