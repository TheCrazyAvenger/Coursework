import {useGetGroupClassesQuery, useGetIndividualClassesQuery} from '@/api';
import {useGetPartiesQuery} from '@/api/parties';
import {
  useGetUserClassScheduleIdsQuery,
  useGetUserPartyParticipantsIdsQuery,
} from '@/api/schedule';
import {
  Header,
  HomeAd,
  HomeItemContainer,
  HomePartyItemContainer,
  ScreenContainer,
  Spinner,
} from '@/components';
import {selectGroupClasses, selectIndividualClasses} from '@/store/selectors';
import {selectParties} from '@/store/selectors/parties';
import {IGroupClasses, IIndividualClasses, IParties} from '@/store/types';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const HomeScreen = () => {
  const {colors} = useTheme();

  useGetUserClassScheduleIdsQuery({});
  useGetUserPartyParticipantsIdsQuery({});

  const {isLoading: individualClassesLoading} = useGetIndividualClassesQuery(
    {},
  );
  const {isLoading: groupClassesLoading} = useGetGroupClassesQuery({});
  const {isLoading: partiesLoading} = useGetPartiesQuery({});

  const individualClasses: IIndividualClasses[] = useSelector(
    selectIndividualClasses,
  );
  const groupClasses: IGroupClasses[] = useSelector(selectGroupClasses);
  const parties: IParties[] = useSelector(selectParties);
  // console.log(individualClasses);
  if (groupClassesLoading || individualClassesLoading || partiesLoading) {
    return <Spinner />;
  }

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{backgroundColor: colors.primary}}>
        <Header
          title="Приветствуем,"
          description="FirstName LastName"
          pv={48}
        />
        <View style={[styles.content, {backgroundColor: colors.background}]}>
          <HomeAd />
          <HomeItemContainer
            title="Индивидуальные задания"
            data={individualClasses}
          />
          <HomeItemContainer title="Груповые задания" data={groupClasses} />
          <HomePartyItemContainer
            title="Танцевальные вечеринки"
            data={parties}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
