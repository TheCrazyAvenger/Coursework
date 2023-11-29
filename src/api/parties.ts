import {setParties} from '@/store/slices/partiesSlice';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const partiesApi = createApi({
  reducerPath: 'partiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.2.2:3000/api/v1',
  }),
  endpoints: build => ({
    getParties: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: () => ({
        url: '/parties',
        method: 'GET',
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setParties(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getParty: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: id => ({
        url: `/parties/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetPartiesQuery, useGetPartyQuery} = partiesApi;
