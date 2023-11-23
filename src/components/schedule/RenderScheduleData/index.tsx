import React from 'react';
import {GroupSchedule} from '../GroupSchedule';
import {IndividualSchedule} from '../IndividualSchedule';
import {PartySchedule} from '../PartySchedule';
import {Props} from './props';

export const RenderScheduleData = ({variant}: Props) => {
  if (variant === 'individual') {
    return <IndividualSchedule />;
  }

  if (variant === 'group') {
    return <GroupSchedule />;
  }

  return <PartySchedule />;
};
