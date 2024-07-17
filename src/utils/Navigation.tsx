import {
  NavigationContainerRef,
  RouteProp,
  StackActions,
} from '@react-navigation/native';
import React from 'react';

type RootStackParamList = {
  LoginScreen: {
    username: string;
    password: string;
  };
};

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const navigate = (
  name: string,
  params?: Record<string, unknown>,
): void => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = (): void => {
  navigationRef.current?.goBack();
};

export const replace = (name: string, params?: object): void => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};
