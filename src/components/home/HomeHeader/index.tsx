import {Typography} from '@/components';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {styles} from './styles';

export const HomeHeader = () => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Typography variant="headlineMedium" color={colors.onPrimary}>
        Приветствуем,
      </Typography>
      <Typography variant="headlineMedium" color={colors.onPrimary}>
        FirstName LastName
      </Typography>
    </View>
  );
};
