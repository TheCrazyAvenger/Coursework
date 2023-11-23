import {scheduleMenu} from '@/mocks';
import React from 'react';
import {SegmentedButtons} from 'react-native-paper';
import {Props} from './props';
import {styles} from './styles';

export const ScheduleMenu = ({value, setValue}: Props) => {
  return (
    <SegmentedButtons
      style={styles.container}
      value={value}
      onValueChange={setValue}
      buttons={scheduleMenu}
    />
  );
};
