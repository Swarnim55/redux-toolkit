import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';

const store = configureStore({
  //Bind up the resources from multiple slices

  reducer: {
    users: userSlice,
  },
});

export default store;
