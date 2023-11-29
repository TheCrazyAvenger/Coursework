import {noHeaderScreenOption, Screens} from '@/constants';
import {ClassScreen, HomeScreen, PartyScreen} from '@/screens';
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
      <Stack.Screen
        options={{title: 'Занятие'}}
        name={Screens.class}
        component={ClassScreen}
      />
      <Stack.Screen
        options={{title: 'Вечеринка'}}
        name={Screens.party}
        component={PartyScreen}
      />
    </Stack.Navigator>
  );
};
