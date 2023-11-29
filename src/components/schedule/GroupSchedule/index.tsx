import {useGetUserGroupClassScheduleQuery} from '@/api/schedule';
import {EmptyData} from '@/components/common/EmptyData';
import {Spinner} from '@/components/common/Spinner';
import {HomeItemContainerItem} from '@/components/home/HomeItemContainer/HomeItemContainerItem';
import {selectGroupClasses} from '@/store/selectors';
import {
  selectClassesScheduleIds,
  selectGroupClassesSchedule,
} from '@/store/selectors/schedule';
import {IGroupClasses} from '@/store/types';
import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const GroupSchedule = () => {
  const {width} = useWindowDimensions();

  const groupClasses = useSelector(selectGroupClasses);
  const classesScheduleIds = useSelector(selectClassesScheduleIds);
  const groupClassesSchedule = useSelector(selectGroupClassesSchedule);

  const {isLoading} = useGetUserGroupClassScheduleQuery({
    ids: classesScheduleIds,
    classesIds: groupClasses.map(item => item.class_id),
  });

  const keyExtractor = (item: IGroupClasses) => item.class_id.toString();
  const renderItem = ({item}: {item: IGroupClasses}) => (
    <HomeItemContainerItem item={item} style={{width: width - 32}} />
  );

  if (isLoading) {
    return <Spinner absolute />;
  }

  return groupClassesSchedule?.length > 0 ? (
    <FlatList
      data={groupClassesSchedule}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  ) : (
    <EmptyData />
  );
};
