import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const contactsSlice = createSlice({
name: 'contacts',
  initialState: {
    initialState: [],
    Loading: false,
error: false,
  },
  
  reducers: {
    fetchPending() { },
    fetchSuccess() { },
    fetchError() { },
  /*addContact: (state, action) => {
    return [...state, action.payload]
  },
  deleteContact: (state, action ) => {
    return state.filter(contact => contact.id !== action.payload);
  },*/
},
})

const { fetchPending, fetchSuccess, fetchError } = contactsSlice.actions;
export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const responce = await axios.get("https://65d7621827d9a3bc1d7ae651.mockapi.io/contacts");
    dispatch(fetchSuccess(responce.data));
  } catch (error) {
    dispatch(fetchError());
  }
};

//export default contactsSlice.reducer;

export default { contactsReduser: contactsSlice.reducer };