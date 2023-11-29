import {setInstructors} from '@/store/slices/instructorsSlice';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const instructorsApi = createApi({
  reducerPath: 'instructorsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.2.2:3000/api/v1',
  }),
  endpoints: build => ({
    getInstructorsApi: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: () => ({
        url: '/instructors',
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setInstructors(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getInstructor: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: id => ({
        url: `/instructors/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetInstructorsApiQuery, useGetInstructorQuery} =
  instructorsApi;
