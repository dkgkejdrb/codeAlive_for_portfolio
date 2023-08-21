import { createSlice } from "@reduxjs/toolkit";

const EditorSlice = createSlice({
    name: 'EditorSlice',
    initialState: {
        value : '',
        text: '',
        html: '',
        imageFileName: '',
        imageFilePath: '',
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload;
        },
        setHtml: (state, action) => {
            state.html = action.payload;
        },
        setImageFileName: (state, action) => {
            state.imageFileName = action.payload;
        },
        setImageFilePath: (state, action) => {
            state.imageFilePath = action.payload;
        },
    },
});

export default EditorSlice;