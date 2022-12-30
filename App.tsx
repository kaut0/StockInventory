import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './src/router/index';
import {NavigationContainer} from '@react-navigation/native';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
