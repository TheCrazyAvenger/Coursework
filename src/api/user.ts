import {setUser} from '@/store/slices';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.79.13:3000/api/v1',
  }),
  endpoints: build => ({
    login: build.mutation<any, any>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setUser(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {useLoginMutation} = userApi;
