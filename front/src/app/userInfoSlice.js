// userInfo를 관리하는 저장소
import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        id: '',
        name:'',
        courseIdx: '',
        studyStart: '',
        studyEnd: '',
    },
    reducers: {
        setUserID: (state, action) => {
            state.id = action.payload;
        },
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setCourseIdx: (state, action) => {
            state.courseIdx = action.payload;
        },
        setStudyStart: (state, action) => {
            state.studyStart = action.payload;
        },
        setStudyEnd: (state, action) => {
            state.studyEnd = action.payload;
        },
    }
});

export default userInfoSlice;