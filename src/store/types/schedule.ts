import {IGroupClasses, IIndividualClasses} from './classes';
import {IParties} from './parties';

export type ScheduleStateType = {
  classesScheduleIds: number[];
  partiesScheduleIds: number[];
  individualClassesSchedule: IIndividualClasses[];
  groupClassesSchedule: IGroupClasses[];
  partiesSchedule: IParties[];
};
