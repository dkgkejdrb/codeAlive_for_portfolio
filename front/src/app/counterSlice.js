// createSlice <- storeslice 를 만들기 위함
import { createSlice } from '@reduxjs/toolkit';

// counterSlice 생성
const counterSlice = createSlice({
    name: 'counter',
    initialState: {value:0},
    // redcuer 초기값과 action을 정의
    reducers: {
      up:(state, action) => {
        // action으로 전달받는 값은 payload를 통해 전달받음
        state.value = state.value + action.payload;
      }
    }
  });

  export default counterSlice;