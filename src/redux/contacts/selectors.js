import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filter;

export const visibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    if (contacts.length > 0 && filter.length > 0) {
      return contacts.filter(cont =>
        cont.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  }
);

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
