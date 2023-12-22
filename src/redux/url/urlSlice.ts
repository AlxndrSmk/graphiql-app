import { createSlice } from '@reduxjs/toolkit';
import urlReducer from './urlReducer';

const urlSlice = createSlice({
  initialState: 'https://rickandmortyapi.com/graphql',
  name: 'url',
  reducerPath: 'url',
  reducers: {
    setURL: urlReducer,
  },
});

export default urlSlice;
