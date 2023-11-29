import {classesApi, userApi} from '@/api';
import {instructorsApi} from '@/api/instructors';
import {partiesApi} from '@/api/parties';
import {scheduleApi} from '@/api/schedule';
import {Slices} from '@/constants';
import {classesReducer, userReducer} from '@/store/slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {instructorsReducer} from './slices/instructorsSlice';
import {partiesReducer} from './slices/partiesSlice';
import {scheduleReducer} from './slices/scheduleSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const userPersistConfig = {
  key: Slices.user,
  storage: AsyncStorage,
  whitelist: ['token', 'student'],
};

const reducers = combineReducers({
  [classesApi.reducerPath]: classesApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [partiesApi.reducerPath]: partiesApi.reducer,
  [scheduleApi.reducerPath]: scheduleApi.reducer,
  [instructorsApi.reducerPath]: instructorsApi.reducer,
  [Slices.schedule]: scheduleReducer,
  [Slices.classes]: classesReducer,
  [Slices.parties]: partiesReducer,
  [Slices.user]: persistReducer(userPersistConfig, userReducer),
  [Slices.instructors]: instructorsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([
      classesApi.middleware,
      userApi.middleware,
      partiesApi.middleware,
      scheduleApi.middleware,
      instructorsApi.middleware,
    ]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
