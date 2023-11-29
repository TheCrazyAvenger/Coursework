import React from 'react';
import {View} from 'react-native';
import {Typography} from '../Typography';
import {styles} from './styles';

export const EmptyData = () => {
  return (
    <View style={styles.container}>
      <Typography variant="headlineSmall" textAlign={'center'}>
        Пусто
      </Typography>
    </View>
  );
};
