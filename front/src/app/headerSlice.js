import { createSlice } from '@reduxjs/toolkit';
// import logo_dark from "../Assets/logo_dark.svg"
// import logo_light from "../Assets/logo.svg"
import logo from "../Assets/logo.svg"
import logoDark from "../Assets/logoDark.svg"

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState: {
        logo: `url(${logo})`,
        logoDark: `url(${logoDark})`,
        backColor: '',
        fontColor: '#FFFFFF',
        positionY: 'translateY(0px)',
        btn1Weight: '500',
        btn2Weight: '500',
        btn1Highlight : '0',
        btn2Highlight : '0',
        link : '/',
        bottomDisplay: 'none'
    },
    reducers: {
      setLogo: (state, action) => {
        state.logo = action.payload;
      },
      setBackColor: (state, action) => {
        state.backColor = action.payload;
      },
      setFontColor: (state, action) => {
        state.fontColor = action.payload;
      },
      setPositionY: (state, action) => {
        state.positionY = action.payload;
      },
      setBtn1Weight: (state, action) => {
        state.btn1Weight = action.payload;
      },
      setBtn2Weight: (state, action) => {
        state.btn2Weight = action.payload;
      },
      setBtn1Highlight: (state, action) => {
        state.btn1Highlight = action.payload;
      },
      setBtn2Highlight: (state, action) => {
        state.btn2Highlight = action.payload;
      },
      setBottomDisplay: (state, action) => {
        state.bottomDisplay = action.payload;
      }
    }
  });

  export default headerSlice;