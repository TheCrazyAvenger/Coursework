import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from './props';
import {styles} from './styles';

export const ScreenContainer = ({children, style}: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};
