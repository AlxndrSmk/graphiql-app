import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import urlStoreInit from '@/constants/urlStoreInit';
import urlAction from '@/redux/url/urlAction';
import { URLStore } from '@/types/types';
import { WritableDraft } from 'immer/src/types/types-external';
import { ReducerWithInitialState } from '@reduxjs/toolkit/src/createReducer';

const urlReducer: ReducerWithInitialState<URLStore> = createReducer(
  urlStoreInit,
  (builder: ActionReducerMapBuilder<URLStore>) => {
    builder.addCase(
      urlAction,
      (
        state: WritableDraft<URLStore>,
        action: PayloadAction<URLStore, 'add'>
      ): URLStore => {
        return {
          ...state,
          url: action.payload.url,
        };
      }
    );
  }
);

export default urlReducer;
