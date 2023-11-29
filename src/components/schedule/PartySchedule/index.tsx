import {useGetUserPartiesClassScheduleQuery} from '@/api/schedule';
import {EmptyData} from '@/components/common/EmptyData';
import {Spinner} from '@/components/common/Spinner';
import {HomePartyItemContainerItem} from '@/components/home/HomePartyItemContainer/HomePartyItemContainerItem';
import {selectParties} from '@/store/selectors/parties';
import {
  selectPartiesSchedule,
  selectPartiesScheduleIds,
} from '@/store/selectors/schedule';
import {IParties} from '@/store/types';
import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const PartySchedule = () => {
  const {width} = useWindowDimensions();

  const parties = useSelector(selectParties);
  const partiesScheduleIds = useSelector(selectPartiesScheduleIds);
  const partiesSchedule = useSelector(selectPartiesSchedule);

  const {isLoading} = useGetUserPartiesClassScheduleQuery({
    ids: partiesScheduleIds,
    partiesIds: parties.map(item => item.party_id),
  });

  const keyExtractor = (item: IParties) => item.party_id.toString();
  const renderItem = ({item}: {item: IParties}) => (
    <HomePartyItemContainerItem item={item} style={{width: width - 32}} />
  );

  if (isLoading) {
    return <Spinner absolute />;
  }

  return partiesSchedule?.length > 0 ? (
    <FlatList
      data={partiesSchedule}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  ) : (
    <EmptyData />
  );
};
