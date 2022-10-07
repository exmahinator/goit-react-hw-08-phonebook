import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const sliceContacts = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      return { ...state, contacts: [...state.contacts, payload] };
    },
    removeContact(state, { payload }) {
      const filteredContacts = state.contacts.filter(
        contact => contact.id !== payload
      );
      return { ...state, contacts: filteredContacts };
    },
    filterForContact(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
});

export const { addContact, removeContact, filterForContact } =
  sliceContacts.actions;
