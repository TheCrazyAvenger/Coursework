import {EmptyImage} from '@/components/common/EmptyImage';
import {InfoItem} from '@/components/common/InfoItem';
import {Typography} from '@/components/common/Typography';
import React from 'react';
import {ScrollView} from 'react-native';
import {Props} from './props';
import {styles} from './styles';

export const RenderParty = ({party}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EmptyImage />
      <InfoItem title="Тип" description={party.type_name} />
      <InfoItem
        title="Дата проведения"
        description={new Date(party.date).toDateString()}
      />
      <InfoItem title="Стоимость" description={party.entrance_fee.toString()} />
      <Typography variant="headlineMedium" mt={8} mb={16}>
        Инструктор
      </Typography>
      <InfoItem title="Имя" description={party.first_name} />
      <InfoItem title="Фамилия" description={party.last_name} />
      <InfoItem title="Тип" description={party.type} />
    </ScrollView>
  );
};
