import {useGetClassQuery} from '@/api';
import {RenderClass, ScreenContainer} from '@/components';
import {useRoute} from '@react-navigation/native';
import React from 'react';

export const ClassScreen = () => {
  const route = useRoute<any>();

  const {id} = route.params;

  const {data, isLoading} = useGetClassQuery(id);

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <RenderClass classes={data.data} />
    </ScreenContainer>
  );
};
