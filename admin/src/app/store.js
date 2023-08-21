import { configureStore } from '@reduxjs/toolkit';
import MyPageSlice from './MyPageSlice';

const store = configureStore({
  reducer: {
    MyPageSlice: MyPageSlice.reducer
  }
});

export default store;