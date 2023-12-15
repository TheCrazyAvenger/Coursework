import {
  setClassesScheduleIds,
  setGroupClassesSchedule,
  setIndividualClassesSchedule,
  setPartiesSchedule,
  setPartiesScheduleIds,
} from '@/store/slices/scheduleSlice';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const scheduleApi = createApi({
  reducerPath: 'scheduleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.237.13:3000/api/v1',
  }),
  endpoints: build => ({
    getUserClassScheduleIds: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: data => ({
        url: '/shcedule&type=classes',
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          console.log('getUserClassScheduleIds', data);
          dispatch(setClassesScheduleIds(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUserPartyParticipantsIds: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: data => ({
        url: '/shcedule&type=parties',
        method: 'POST',
        data,
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          console.log('getUserPartyScheduleIds', data);
          dispatch(setPartiesScheduleIds(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUserIndividualClassSchedule: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: data => ({
        url: '/user-schedules&type=classes',
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setIndividualClassesSchedule(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUserGroupClassSchedule: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: data => ({
        url: '/user-schedules&type=classes',
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setGroupClassesSchedule(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUserPartiesClassSchedule: build.query<any, any>({
      keepUnusedDataFor: 0,
      query: data => ({
        url: '/user-schedules&type=parties',
        method: 'POST',
        body: data,
      }),
      onQueryStarted: async (_: any, {dispatch, queryFulfilled}) => {
        try {
          const {data} = await queryFulfilled;
          dispatch(setPartiesSchedule(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    removeStudentClassSchedule: build.mutation<any, any>({
      query: data => ({
        url: '/user-schedules/remove&type=classes',
        method: 'DELETE',
        body: data,
      }),
    }),
    addStudentClassSchedule: build.mutation<any, any>({
      query: data => ({
        url: '/user-schedules/add&type=classes',
        method: 'POST',
        body: data,
      }),
    }),
    removeStudentPartySchedule: build.mutation<any, any>({
      query: data => ({
        url: '/user-schedules/remove&type=parties',
        method: 'DELETE',
        body: data,
      }),
    }),
    addStudentPartySchedule: build.mutation<any, any>({
      query: data => ({
        url: '/user-schedules/add&type=parties',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserClassScheduleIdsQuery,
  useGetUserPartyParticipantsIdsQuery,
  useGetUserIndividualClassScheduleQuery,
  useGetUserGroupClassScheduleQuery,
  useGetUserPartiesClassScheduleQuery,
  useRemoveStudentClassScheduleMutation,
  useAddStudentClassScheduleMutation,
  useAddStudentPartyScheduleMutation,
  useRemoveStudentPartyScheduleMutation,
} = scheduleApi;
