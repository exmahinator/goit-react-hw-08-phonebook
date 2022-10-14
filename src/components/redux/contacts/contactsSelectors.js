import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsLoading = state => state.contacts.contacts.isLoading;
export const selectContactsError = state => state.contacts.contacts.error;
export const selectContactsFilter = state => state.contacts.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, contactsFilter) => {
    const normalizedFilter = contactsFilter.trim().toLowerCase();
    return contactsFilter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;
  }
);
