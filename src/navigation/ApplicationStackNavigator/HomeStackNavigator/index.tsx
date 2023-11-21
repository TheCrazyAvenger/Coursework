import {noHeaderScreenOption, Screens} from '@/constants';
import {HomeScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.homeScreen}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
