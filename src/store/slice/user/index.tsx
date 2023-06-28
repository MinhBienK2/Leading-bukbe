import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createSlice } from '@reduxjs/toolkit';

import { User } from './types';
import { userSaga } from './saga';

export const initialState: User = {
  isLogin: false,
  token: '',
  role: 0,
  id: -1,
  response: {
    loading: false,
    error: -1,
    message: '',
  },
  language: 'vi',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSaga });

  return { actions: slice.actions };
};
