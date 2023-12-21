import storeApp from './store';

type StoreType = ReturnType<typeof storeApp.getState>;

export default StoreType;
