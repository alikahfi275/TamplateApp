import React from 'react';
import {Routes} from './Routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../modules/HomeScreen';
import DetailScreen from '../modules/DetailScreen';
import ProfileScreen from '../modules/ProfileScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, animation: 'none'}}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.Detail} component={DetailScreen} />
      <Stack.Screen name={Routes.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
