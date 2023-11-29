import {useGetUserIndividualClassScheduleQuery} from '@/api/schedule';
import {Spinner} from '@/components/common/Spinner';
import {HomeItemContainerItem} from '@/components/home/HomeItemContainer/HomeItemContainerItem';
import {selectIndividualClasses} from '@/store/selectors';
import {
  selectClassesScheduleIds,
  selectIndividualClassesSchedule,
} from '@/store/selectors/schedule';
import {IIndividualClasses} from '@/store/types';
import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const IndividualSchedule = () => {
  const {width} = useWindowDimensions();

  const individualClasses = useSelector(selectIndividualClasses);
  const classesScheduleIds = useSelector(selectClassesScheduleIds);
  const individualClassesSchedule = useSelector(
    selectIndividualClassesSchedule,
  );

  const {isLoading} = useGetUserIndividualClassScheduleQuery({
    ids: classesScheduleIds,
    classesIds: individualClasses.map(item => item.class_id),
  });

  const keyExtractor = (item: IIndividualClasses) => item.class_id.toString();
  const renderItem = ({item}: {item: IIndividualClasses}) => (
    <HomeItemContainerItem item={item} style={{width: width - 32}} />
  );

  if (isLoading) {
    return <Spinner absolute />;
  }

  return (
    <FlatList
      data={individualClassesSchedule}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};
