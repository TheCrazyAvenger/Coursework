import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Typography} from '../Typography';
import {Props} from './props';
import {styles} from './styles';

export const InfoItem = ({title, description}: Props) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Typography variant="titleMedium" color={colors.primary}>
        {title}
      </Typography>
      <Typography variant="bodyLarge">{description}</Typography>
    </View>
  );
};
