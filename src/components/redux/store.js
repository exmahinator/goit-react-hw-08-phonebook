import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './toolkit/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
