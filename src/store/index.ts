import {classesApi} from '@/api';
import {partiesApi} from '@/api/parties';
import {scheduleApi} from '@/api/schedule';
import {Slices} from '@/constants';
import {classesReducer} from '@/store/slices';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {partiesReducer} from './slices/partiesSlice';
import {scheduleReducer} from './slices/scheduleSlice';

const reducers = combineReducers({
  [classesApi.reducerPath]: classesApi.reducer,
  [partiesApi.reducerPath]: partiesApi.reducer,
  [scheduleApi.reducerPath]: scheduleApi.reducer,
  [Slices.schedule]: scheduleReducer,
  [Slices.classes]: classesReducer,
  [Slices.parties]: partiesReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([
      classesApi.middleware,
      partiesApi.middleware,
      scheduleApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
