import { configureStore } from 'outqource-react/redux';

import TestReducer from './Test';

const store = configureStore({
    reducer: {
      user: TestReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
export default store;