import {Typography} from '@/components';
import React from 'react';
import {Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const InstructorItem = ({item}: Props) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Typography variant="headlineMedium">
          {item.first_name} {item.last_name}
        </Typography>
        <Typography variant="bodyLarge" mb={6}>
          {item.type}
        </Typography>
      </Card.Content>
    </Card>
  );
};
