import {
  ActionReducerMapBuilder,
  createReducer,
  PayloadAction,
} from '@reduxjs/toolkit';
import urlAction from './urlAction';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';

const initURL: string = 'https://rickandmortyapi.com/graphql';

const urlReducer: ReducerWithInitialState<string> = createReducer(
  initURL,
  (builder: ActionReducerMapBuilder<string>): void => {
    builder.addCase(
      urlAction,
      (_state: string, action: PayloadAction<string>): string => {
        if (!action.payload) return initURL;

        return action.payload;
      }
    );
  }
);

export default urlReducer;
