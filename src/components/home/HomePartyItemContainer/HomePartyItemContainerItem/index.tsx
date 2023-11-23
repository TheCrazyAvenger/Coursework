import {Typography} from '@/components/';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const HomePartyItemContainerItem = ({item}: Props) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Typography variant="headlineMedium">Занятие</Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.number_of_attendees} участников | {item.entrance_fee} р.
        </Typography>
        <Typography variant="labelMedium">
          {new Date(item.date).toDateString()}
        </Typography>
      </Card.Content>
      <Card.Actions>
        <Button>{'Купить билеты'}</Button>
      </Card.Actions>
    </Card>
  );
};
