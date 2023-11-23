import {useGetGroupClassesQuery, useGetIndividualClassesQuery} from '@/api';
import {useGetPartiesQuery} from '@/api/parties';
import {
  HomeAd,
  HomeHeader,
  HomeItemContainer,
  HomePartyItemContainer,
  ScreenContainer,
} from '@/components';
import {selectGroupClasses, selectIndividualClasses} from '@/store/selectors';
import {selectParties} from '@/store/selectors/parties';
import {IGroupClasses, IIndividualClasses, IParties} from '@/store/types';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {ActivityIndicator, useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {styles} from './styles';

export const HomeScreen = () => {
  const {colors} = useTheme();

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
    return <ActivityIndicator />;
  }

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{backgroundColor: colors.primary}}>
        <HomeHeader />
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
