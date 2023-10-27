import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filter: '',
  items: [],
};

const contactsFormSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setFilter, deleteContact, addContact } =
  contactsFormSlice.actions;

export const ContactFormReducer = contactsFormSlice.reducer;
