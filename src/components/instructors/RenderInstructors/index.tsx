import {IInstructors} from '@/store/types';
import React from 'react';
import {FlatList} from 'react-native';
import {InstructorItem} from '../InstructorItem';
import {Props} from './props';
import {styles} from './styles';

export const RenderInstructors = ({data}: Props) => {
  const keyExtractor = (item: IInstructors) => item.instructor_id.toString();
  const renderItem = ({item}: {item: IInstructors}) => (
    <InstructorItem item={item} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};
