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
} from '../pages';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarLabelStyle: {
            color: '#1a94aa',
            fontFamily: Fonts.fontFamily.medium,
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-roof"
              color={'#1a94aa'}
              size={26}
            />
          ),
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
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
