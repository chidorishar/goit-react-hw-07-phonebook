import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload: idToDelete }) {
      return {
        contacts: state.contacts.filter(({ id }) => id !== idToDelete),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
