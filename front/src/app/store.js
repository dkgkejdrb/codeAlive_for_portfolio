// configureStore <- storeSlice를 모으기 위한 거대한 스토어
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import highLightBackColorSlice from './highLightBackColorSlice';
import headerSlice from './headerSlice';
import userInfoSlice from './userInfoSlice';
import MyPageDashboardSlice from './MyPage/MyPageDashboardSlice';
import EditorSlice from './EditorSlice';
import MyPageQASlice from './MyPage/MyPageQASlice';
import MyPageMyClassroomSlice from './MyPage/MyPageMyClassroomSlice';

// storeSlice들을 하나로 합칠 Store를 만들자
const store = configureStore({
  // 여러 storeSlice 들을 하나의 거대한 reducer로 만들어줌
  reducer: {
    counter: counterSlice.reducer,
    highLightBackColor: highLightBackColorSlice.reducer,
    headerSlice: headerSlice.reducer,
    userInfoSlice: userInfoSlice.reducer,
    MyPageDashboardSlice: MyPageDashboardSlice.reducer,
    EditorSlice: EditorSlice.reducer,
    MyPageQASlice: MyPageQASlice.reducer,
    MyPageMyClassroomSlice: MyPageMyClassroomSlice.reducer,
  }
});

export default store;