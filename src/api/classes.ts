import {setGroupClasses, setIndividualClasses} from '@/store/slices';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const classesApi = createApi({
  reducerPath: 'classesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.79.13:3000/api/v1',
  }),
  endpoints: build => ({
    getIndividualClasses: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: () => ({
        url: '/classes&type=individual',
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setIndividualClasses(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getGroupClasses: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: () => ({
        url: '/classes&type=group',
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setGroupClasses(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getClass: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: id => ({
        url: `/classes/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetIndividualClassesQuery,
  useGetGroupClassesQuery,
  useGetClassQuery,
} = classesApi;
