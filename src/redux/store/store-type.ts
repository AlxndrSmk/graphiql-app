import storeApp from './store';

export type StoreMaker = ReturnType<typeof storeApp>;

type StoreType = ReturnType<StoreMaker['getState']>;

export default StoreType;
