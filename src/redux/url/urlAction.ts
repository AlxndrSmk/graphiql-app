import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';

const urlAction: ActionCreatorWithPayload<string, 'add'> = createAction<
  string,
  'add'
>('add');

export default urlAction;
