import {
  ActionCreatorWithPayload,
  createAction,
  PayloadAction,
} from '@reduxjs/toolkit';

const urlAction: ActionCreatorWithPayload<string, 'add'> = createAction('add');

export default urlAction;
