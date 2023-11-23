import {Slices} from '@/constants';
import {StoreType} from '../types';

export const selectClassesScheduleIds = (state: StoreType) =>
  state[Slices.schedule].classesScheduleIds;
export const selectPartiesScheduleIds = (state: StoreType) =>
  state[Slices.schedule].partiesScheduleIds;
export const selectIndividualClassesSchedule = (state: StoreType) =>
  state[Slices.schedule].individualClassesSchedule;
export const selectGroupClassesSchedule = (state: StoreType) =>
  state[Slices.schedule].groupClassesSchedule;
export const selectPartiesSchedule = (state: StoreType) =>
  state[Slices.schedule].partiesSchedule;
