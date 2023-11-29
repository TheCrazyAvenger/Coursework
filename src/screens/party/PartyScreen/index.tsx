import {useGetPartyQuery} from '@/api/parties';
import {RenderParty, ScreenContainer} from '@/components';
import {useRoute} from '@react-navigation/native';
import React from 'react';

export const PartyScreen = () => {
  const route = useRoute<any>();

  const {id} = route.params;

  const {data, isLoading} = useGetPartyQuery(id);

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <RenderParty party={data.data} />
    </ScreenContainer>
  );
};
