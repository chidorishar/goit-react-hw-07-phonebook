import { configureStore } from '@reduxjs/toolkit';

import { phonebookAPI } from 'services/phonebookBackendAPI';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [phonebookAPI.reducerPath]: phonebookAPI.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookAPI.middleware),
});
