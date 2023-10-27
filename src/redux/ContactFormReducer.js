import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filter: '',
  contacts: [],
  options: { name: '', number: '' },
};

const contactsFormSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { setContacts, setFilter, setOptions, deleteContact, addContact } =
  contactsFormSlice.actions;

export const ContactFormReducer = contactsFormSlice.reducer;
