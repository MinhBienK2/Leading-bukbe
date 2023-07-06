import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createSlice } from '@reduxjs/toolkit';

import { System } from './types';
import { systemSaga } from './saga';

export const initialState: System = {
  language: 'vi',
};

const slice = createSlice({
  name: 'system',
  initialState,
  reducers: {},
});

export const { actions: systemActions, reducer } = slice;

export const useSystemSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: systemSaga });

  return { actions: slice.actions };
};
