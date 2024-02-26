import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectContacts } from './selectors';

axios.defaults.baseURL = 'https://65cf583ebdb50d5e5f5b1411.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const { name, phone } = contact;

    if (selectContacts(thunkAPI.getState()).find(cont => cont.name === name)) {
      Notify.failure('A contact with the same name already exists!');
      return thunkAPI.rejectWithValue(
        'A contact with the same name already exists!'
      );
    }

    try {
      const response = await axios.post(`/contacts`, { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
