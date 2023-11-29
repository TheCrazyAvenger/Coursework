import {Typography} from '@/components';
import {Screens} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Card} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const InstructorItem = ({item}: Props) => {
  const navigation = useNavigation<any>();

  const goToInstructor = () => {
    navigation.navigate(Screens.instructor, {id: item.instructor_id});
  };

  return (
    <Card style={styles.container} onPress={goToInstructor}>
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
