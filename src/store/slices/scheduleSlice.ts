import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {ScheduleStateType} from '../types/schedule';

const initialState: ScheduleStateType = {
  classesScheduleIds: [],
  partiesScheduleIds: [],
  individualClassesSchedule: [],
  groupClassesSchedule: [],
  partiesSchedule: [],
};

const scheduleSlice = createSlice({
  name: Slices.schedule,
  initialState,
  reducers: {
    setClassesScheduleIds: (state, action) => {
      return {
        ...state,
        classesScheduleIds: action.payload,
      };
    },
    setPartiesScheduleIds: (state, action) => {
      return {
        ...state,
        partiesScheduleIds: action.payload,
      };
    },
    setIndividualClassesSchedule: (state, action) => {
      return {
        ...state,
        individualClassesSchedule: action.payload,
      };
    },
    setGroupClassesSchedule: (state, action) => {
      return {
        ...state,
        groupClassesSchedule: action.payload,
      };
    },
    setPartiesSchedule: (state, action) => {
      return {
        ...state,
        partiesSchedule: action.payload,
      };
    },
  },
});

export const {
  actions: {
    setClassesScheduleIds,
    setPartiesScheduleIds,
    setGroupClassesSchedule,
    setIndividualClassesSchedule,
    setPartiesSchedule,
  },
  reducer: scheduleReducer,
} = scheduleSlice;
