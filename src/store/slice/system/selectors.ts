import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../types';
import { initialState } from './index';

const selectDomain = (state: RootState) => state.user || initialState;
export const selectSystem = createSelector([selectDomain], system => system);

export const selectLanguage = createSelector([selectDomain], system => system.language);
