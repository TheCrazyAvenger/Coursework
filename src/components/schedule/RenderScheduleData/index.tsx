import {selectPartiesScheduleIds} from '@/store/selectors/schedule';
import React from 'react';
import {useSelector} from 'react-redux';
import {GroupSchedule} from '../GroupSchedule';
import {IndividualSchedule} from '../IndividualSchedule';
import {PartySchedule} from '../PartySchedule';
import {Props} from './props';

export const RenderScheduleData = ({variant}: Props) => {
  const selectedParties = useSelector(selectPartiesScheduleIds);

  if (variant === 'individual') {
    return <IndividualSchedule />;
  }

  if (variant === 'group') {
    return <GroupSchedule />;
  }

  return <PartySchedule />;
};
