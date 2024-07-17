import React from 'react';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
const Loading = () => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      statusBarTranslucent={true}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.content}>
          <ActivityIndicator color={'#1a94aa'} size={'small'} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0,0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
  },
});
