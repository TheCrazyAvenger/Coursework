import {IGroupClasses, IIndividualClasses} from '@/store/types';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  item: IIndividualClasses | IGroupClasses;
  style?: StyleProp<ViewStyle>;
};
