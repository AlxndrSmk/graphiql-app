import { store } from './store';

type StoreType = ReturnType<typeof store.getState>;

export default StoreType;
