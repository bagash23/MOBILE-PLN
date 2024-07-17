import {NavigationContainer} from '@react-navigation/native';
import React, {Suspense} from 'react';
import Router from './router';
import {navigationRef} from './utils/Navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Suspense>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Router />
      </Suspense>
    </NavigationContainer>
  );
};

export default App;
