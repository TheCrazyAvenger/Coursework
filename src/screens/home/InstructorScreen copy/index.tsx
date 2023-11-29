import {useGetInstructorQuery} from '@/api/instructors';
import {RenderInstructor, ScreenContainer} from '@/components';
import {useRoute} from '@react-navigation/native';
import React from 'react';

export const InstructorScreen = () => {
  const route = useRoute<any>();

  const {id} = route.params;
  console.log(id);

  const {data, isLoading} = useGetInstructorQuery(id);
  console.log(data);

  if (isLoading) {
    return <></>;
  }

  return (
    <ScreenContainer>
      <RenderInstructor instructor={data.data} />
    </ScreenContainer>
  );
};
