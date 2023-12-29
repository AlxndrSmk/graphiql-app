import { PayloadAction } from '@reduxjs/toolkit';

const urlReducer = (state: string, action: PayloadAction<string>): string => {
  return action.payload;
};

export default urlReducer;
