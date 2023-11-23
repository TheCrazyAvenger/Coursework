import {Stacks} from '@/constants';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeStack} from './HomeStackNavigator';

const Tab = createMaterialBottomTabNavigator();

export type TabIconProps = {
  name: string;
  color: string;
};

const tabBarIcon = ({name, color}: TabIconProps) => {
  return <Icon name={name} size={24} color={color} />;
};

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Stacks.home}
        options={{
          title: 'Главная',
          tabBarIcon: props => tabBarIcon({name: 'home', ...props}),
        }}
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};
