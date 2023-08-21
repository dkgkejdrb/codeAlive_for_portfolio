// createSlice <- storeslice 를 만들기 위함
import { createSlice } from '@reduxjs/toolkit';

const highLightBackColorSlice = createSlice({
    name: 'highLightBackColor',
    initialState: {value: 'white'},
    reducers: {
      setColor: (state, action) => {
        state.value = action.payload;
      }
    }
  });

  export default highLightBackColorSlice;