import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const Spinner = ({style, absolute}: Props) => {
  const {colors} = useTheme();

  return (
    <ActivityIndicator
      size={'large'}
      color={colors.primary}
      style={[
        absolute ? styles.absolute : styles.container,
        {
          backgroundColor: colors.background,
        },
        style,
      ]}
    />
  );
};
