import {IGroupClasses, IIndividualClasses} from './classes';
import {InstructorsStateType} from './instructors';
import {IParties} from './parties';
import {ScheduleStateType} from './schedule';
import {UserStateType} from './user';

export * from './classes';
export * from './instructors';
export * from './parties';
export * from './user';

export type StoreType = {
  classes: {
    individualClasses: IIndividualClasses[];
    groupClasses: IGroupClasses[];
  };
  parties: {
    parties: IParties[];
  };
  schedule: ScheduleStateType;
  user: UserStateType;
  instructors: InstructorsStateType;
};
