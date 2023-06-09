import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    filter: '',
  },

  reducers: {
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
    filtredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filtredContacts } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
