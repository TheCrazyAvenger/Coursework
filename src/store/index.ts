import {classesApi} from '@/api';
import {partiesApi} from '@/api/parties';
import {Slices} from '@/constants';
import {classesReducer} from '@/store/slices';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {partiesReducer} from './slices/partiesSlice';

const reducers = combineReducers({
  [classesApi.reducerPath]: classesApi.reducer,
  [partiesApi.reducerPath]: partiesApi.reducer,
  [Slices.classes]: classesReducer,
  [Slices.parties]: partiesReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([classesApi.middleware, partiesApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
