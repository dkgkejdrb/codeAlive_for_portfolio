// Admin의 토큰을 관리하는 슬라이스
import { createSlice } from "@reduxjs/toolkit";

const MyPageSlice = createSlice({
    name: 'MyPageSlice',
    initialState: {
        TOKEN: "", // currCourseData
    },
    reducers: {
        setTOKEN: (state, action) => {
            let _TOKEN = 'Bearer ' +  action.payload.accessToken
            state.TOKEN = _TOKEN;
        },
    }
});

export default MyPageSlice;