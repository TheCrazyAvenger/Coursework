import {IGroupClasses, IIndividualClasses} from '@/store/types';

export type Props = {
  title: string;
  data: IIndividualClasses[] | IGroupClasses[];
};
