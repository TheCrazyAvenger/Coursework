import {useGetInstructorQuery} from '@/api/instructors';
import {RenderInstructor, ScreenContainer} from '@/components';
import {useRoute} from '@react-navigation/native';
import React from 'react';

export const InstructorScreen = () => {
  const route = useRoute<any>();

  const {id} = route.params;

  const {data, isLoading} = useGetInstructorQuery(id);

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <RenderInstructor instructor={data.data} />
    </ScreenContainer>
  );
};
