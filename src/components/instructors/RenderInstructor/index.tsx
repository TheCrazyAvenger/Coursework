import {EmptyImage} from '@/components/common/EmptyImage';
import {InfoItem} from '@/components/common/InfoItem';
import {Typography} from '@/components/common/Typography';
import React from 'react';
import {ScrollView} from 'react-native';
import {Props} from './props';
import {styles} from './styles';

export const RenderInstructor = ({instructor}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EmptyImage />
      <InfoItem title="Имя" description={instructor.first_name} />
      <InfoItem title="Фамилия" description={instructor.last_name} />
      <InfoItem title="Тип" description={instructor.type} />
      <Typography variant="headlineMedium" mt={8} mb={16}>
        Занятие
      </Typography>
      <InfoItem title="Название" description={instructor.class_name} />
      <InfoItem title="День недели" description={instructor.day_of_week} />
      <InfoItem
        title="Время"
        description={`${instructor.start_time} - ${instructor.end_time}`}
      />
    </ScrollView>
  );
};
