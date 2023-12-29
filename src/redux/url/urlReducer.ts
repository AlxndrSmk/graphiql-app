import { PayloadAction } from '@reduxjs/toolkit';

const urlReducer = (state: string, action: PayloadAction<string>): string => {
  console.log(state);
  return action.payload;
};

export default urlReducer;
