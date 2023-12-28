import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';
import { URLStore } from '@/types/types';

const urlAction: PayloadActionCreator<URLStore, 'add'> = createAction<
  URLStore,
  'add'
>('add');

export default urlAction;
