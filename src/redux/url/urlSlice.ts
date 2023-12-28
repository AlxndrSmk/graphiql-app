import { createSlice, Slice, SliceSelectors } from '@reduxjs/toolkit';
import urlReducer from '@/redux/url/urlReducer';
import urlStoreInit from '@/constants/urlStoreInit';
import { URLStore } from '@/types/types';
import { ReducerWithInitialState } from '@reduxjs/toolkit/src/createReducer';

const urlSlice: Slice<
  URLStore,
  { urlAct: ReducerWithInitialState<URLStore> },
  'url',
  'url',
  SliceSelectors<URLStore>
> = createSlice({
  initialState: urlStoreInit,
  name: 'url',
  reducerPath: 'url',
  reducers: {
    urlAct: urlReducer,
  },
});

export default urlSlice;
