import storeApp from './store';

export type StoreMaker = ReturnType<typeof storeApp>;

export type StoreDispatcher = StoreMaker['dispatch'];

type StoreType = ReturnType<StoreMaker['getState']>;

export default StoreType;
