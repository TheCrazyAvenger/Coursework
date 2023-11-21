import {Stacks} from '@/constants';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {HomeStack} from './HomeStackNavigator';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Stacks.home} component={HomeStack} />
    </Tab.Navigator>
  );
};
