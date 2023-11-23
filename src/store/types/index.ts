import {IGroupClasses, IIndividualClasses} from './classes';
import {IParties} from './parties';
import {ScheduleStateType} from './schedule';

export * from './classes';
export * from './parties';

export type StoreType = {
  classes: {
    individualClasses: IIndividualClasses[];
    groupClasses: IGroupClasses[];
  };
  parties: {
    parties: IParties[];
  };
  schedule: ScheduleStateType;
};
