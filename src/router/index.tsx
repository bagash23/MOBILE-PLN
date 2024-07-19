import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen} from '../pages/Authentication';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../pages/Splash';
import Fonts from '../utils/Fonts';
import {
  Dashboard,
  DetailPelanggan,
  DetailPembayaran,
  DetailPenggunaan,
  DetailTagihan,
  Create,
  CreatePenggunaan,
  CreateTarif,
  CreateTagihan,
  CreatePembayaran,
  CreatePelanggan,
  CreateLevel,
  CreateKaryawan,
  SearchPenggunaan,
  SearchPelanggan,
  SearchTagihan,
} from '../pages';
import {Alert, Platform, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EncryptedStorage from 'react-native-encrypted-storage';
import {replace} from '../utils/Navigation';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Logout = () => {
  Alert.alert(
    `Keluar Aplikasi PLN`,
    'Apakah kamu yakin untuk keluar ?',
    [
      {
        text: 'Batal',
        style: 'cancel',
      },
      {
        text: 'Keluar',
        onPress: async () => {
          await EncryptedStorage.removeItem('token');
          replace('LoginScreen');
        },
        style: 'destructive',
      },
    ],
    {cancelable: false},
  );
};

const MainApp = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          color: '#1a94aa',
          fontFamily: Fonts.fontFamily.medium,
        },
      }}>
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home-roof"
              color={focused ? '#1a94aa' : 'gray'}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Buat Data"
        component={Create}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? -10 : -20,
                width: Platform.OS === 'ios' ? 50 : 60,
                height: Platform.OS === 'ios' ? 50 : 60,
                borderRadius: Platform.OS === 'ios' ? 25 : 30,
                backgroundColor: 'white',
              }}>
              <Icon
                name="pluscircle"
                size={Platform.OS === 'ios' ? 50 : 60}
                color={focused ? '#1a94aa' : 'gray'}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Keluar"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={focused ? '#1a94aa' : 'gray'}
              size={26}
            />
          ),
          tabBarButton: props => <View {...props} onTouchEnd={Logout} />,
        }}
      />
    </Tabs.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DetailPenggunaan" component={DetailPenggunaan} />
      <Stack.Screen name="DetailPelanggan" component={DetailPelanggan} />
      <Stack.Screen name="DetailTagihan" component={DetailTagihan} />
      <Stack.Screen name="DetailPembayaran" component={DetailPembayaran} />
      <Stack.Screen name="CreatePenggunaan" component={CreatePenggunaan} />
      <Stack.Screen name="CreateTarif" component={CreateTarif} />
      <Stack.Screen name="CreateTagihan" component={CreateTagihan} />
      <Stack.Screen name="CreatePembayaran" component={CreatePembayaran} />
      <Stack.Screen name="CreatePelanggan" component={CreatePelanggan} />
      <Stack.Screen name="CreateLevel" component={CreateLevel} />
      <Stack.Screen name="CreateKaryawan" component={CreateKaryawan} />
      <Stack.Screen name="SearchPenggunaan" component={SearchPenggunaan} />
      <Stack.Screen name="SearchPelanggan" component={SearchPelanggan} />
      <Stack.Screen name="SearchTagihan" component={SearchTagihan} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
