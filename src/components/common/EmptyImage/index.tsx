import React from 'react';
import {Card, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

export const EmptyImage = () => {
  const {colors} = useTheme();

  return (
    <Card style={styles.container}>
      <Icon name={'image'} color={colors.onPrimaryContainer} size={100} />
    </Card>
  );
};
