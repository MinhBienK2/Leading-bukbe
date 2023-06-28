/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from 'utils/types/injector-typings';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig: any = {
  key: 'sea-battle',
  version: 1,
  storage: storage,
  blacklist: [], // navigation will not be persisted
  transforms: [],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  migrate: state => {
    return Promise.resolve(state);
  },
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  return persistedReducer;
}
