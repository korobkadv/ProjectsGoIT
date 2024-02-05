import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
  },
  reducers: {
    addContacts(state, action) {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      state.contactsList.push(contact);
    },
    delContacts(state, action) {
      state.contactsList = state.contactsList.filter(
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

export const getContacts = state => state.contacts.contactsList;
