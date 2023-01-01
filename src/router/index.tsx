import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddItem, Cart, Home} from 'Screens';

const Stack = createNativeStackNavigator();

const RootStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default RootStack;
