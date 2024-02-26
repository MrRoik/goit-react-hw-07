import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from './operations';

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