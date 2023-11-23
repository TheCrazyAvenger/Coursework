import {Typography} from '@/components';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const HomeItemContainerItem = ({item, style}: Props) => {
  return (
    <Card style={[styles.container, style]}>
      <Card.Content>
        <Typography variant="headlineMedium">{item.class_name}</Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.type_id} | {item.day_of_week}
        </Typography>
        <Typography variant="labelMedium">
          {item.start_time} - {item.end_time}
        </Typography>
      </Card.Content>
      <Card.Actions>
        <Button>{'Записаться'}</Button>
      </Card.Actions>
    </Card>
  );
};
