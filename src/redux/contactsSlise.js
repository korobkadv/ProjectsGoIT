import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      if (state.find(cont => cont.name === action.payload.name)) {
        return Notify.failure(
          'A contact with the same name is already in the list!'
        );
      }

      state.push(contact);
    },
    delContacts(state, action) {
      return state.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, delContacts } = contactsSlice.actions;

export const getContacts = state => state.contacts;
