import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts(state, action) {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      if (state.contacts.find(cont => cont.name === action.payload.name)) {
        return Notify.failure(
          'A contact with the same name is already in the list!'
        );
      }

      state.contacts.push(contact);
    },
    delContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, delContacts } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
