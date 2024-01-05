import { createSlice } from '@reduxjs/toolkit';
import urlStoreInit from '@/constants/urlStoreInit';
import urlReducer from '@/redux/url/urlReducer';

const urlSlice = createSlice({
  initialState: urlStoreInit,
  name: 'url',
  reducerPath: 'url',
  reducers: {
    setURL: urlReducer,
  },
});

export default urlSlice;
