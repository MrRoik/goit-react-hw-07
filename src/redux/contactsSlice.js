import { createSlice } from '@reduxjs/toolkit'
//import axios from 'axios';
import { fetchContacts } from './operations';

/*
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://65d7621827d9a3bc1d7ae651.mockapi.io/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
          
  });*/

const contactsSlice = createSlice({
name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
     })
      .addCase(fetchContacts.fulfilled, (state, action) => { 
        state.isLoading = false;
        state.items = action.payload;        
    })
      .addCase(fetchContacts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
     })
});

export default { contactsReducer: contactsSlice.reducer };