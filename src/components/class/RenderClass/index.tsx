import {EmptyImage} from '@/components/common/EmptyImage';
import {InfoItem} from '@/components/common/InfoItem';
import {Typography} from '@/components/common/Typography';
import React from 'react';
import {ScrollView} from 'react-native';
import {Props} from './props';
import {styles} from './styles';

export const RenderClass = ({classes}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EmptyImage />
      <InfoItem title="Название" description={classes.class_name} />
      <InfoItem title="День недели" description={classes.day_of_week} />
      <InfoItem
        title="Время"
        description={`${classes.start_time} - ${classes.end_time}`}
      />
      <Typography variant="headlineMedium" mt={8} mb={16}>
        Инструктор
      </Typography>
      <InfoItem title="Имя" description={classes.first_name} />
      <InfoItem title="Фамилия" description={classes.last_name} />
      <InfoItem title="Тип" description={classes.type} />
    </ScrollView>
  );
};
