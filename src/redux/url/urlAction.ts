import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';

const urlAction: ActionCreatorWithPayload<string, 'add'> = createAction('add');

export default urlAction;
