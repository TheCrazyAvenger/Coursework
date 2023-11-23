import {noHeaderScreenOption, Screens} from '@/constants';
import {ScheduleScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const ScheduleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.scheduleScreen}
        component={ScheduleScreen}
      />
    </Stack.Navigator>
  );
};
