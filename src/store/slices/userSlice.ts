import {Slices} from '@/constants';
import {createSlice} from '@reduxjs/toolkit';
import {UserStateType} from '../types/user';

const initialState: UserStateType = {
  token: null,
  student: null,
};

const userSlice = createSlice({
  name: Slices.user,
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {...state, ...action.payload};
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    setStudent: (state, action) => {
      return {
        ...state,
        student: action.payload,
      };
    },
  },
});

export const {
  actions: {setUser, setToken, setStudent},
  reducer: userReducer,
} = userSlice;
