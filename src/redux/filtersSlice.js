import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  Loading: false,
error: false,
  reducers: {
    filterContacts: (state, action) => {
      return action.payload;
    },
  },
});

const { filterContacts } = filtersSlice.actions;
export default { filtersReducer: filtersSlice.reducer, filterContacts };