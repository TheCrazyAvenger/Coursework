import {noHeaderScreenOption, Screens} from '@/constants';
import {ProfileScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.profile}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
