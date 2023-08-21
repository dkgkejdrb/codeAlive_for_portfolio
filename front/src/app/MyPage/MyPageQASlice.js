// MyPageDashboard를 관리하는 학습이력 저장소
import { createSlice } from "@reduxjs/toolkit";

const MyPageQASlice = createSlice({
    name: 'MyPageQASlice',
    initialState: {
        totalElements: 0,
        // My QA가 담긴 배열
        itemsArray: [],
        defaultItemsArray: [],
    },
    reducers: {
        setTotalElements: (state, action) => {
            state.totalElements = action.payload;
        },
        setItemsArray: (state, action) => {
            let data = action.payload;
            let itemsArray_tmp = [];
            data.items.map(
                (item) => {
                    itemsArray_tmp.push(
                        {
                            id: item.id,
                            courseTitle: item.courseTitle,
                            chapterTitle: item.chapterTitle,
                            qnaTitle: item.qnaTitle,
                            question: item.question,
                            memberName: item.memberName,
                            questionDate: item.questionDate,
                            commentCount: item.commentCount,
                            likeCount: item.likeCount,
                        }
                    );
                }
            );
            state.itemsArray = [...itemsArray_tmp];
        },
        setDefaultItemsArray: (state, action) => {
            let data = action.payload;
            let itemsArray_tmp = [];
            data.items.map(
                (item) => {
                    itemsArray_tmp.push(
                        {
                            id: item.id,
                            courseTitle: item.courseTitle,
                            chapterTitle: item.chapterTitle,
                            qnaTitle: item.qnaTitle,
                            question: item.question,
                            memberName: item.memberName,
                            questionDate: item.questionDate,
                            commentCount: item.commentCount,
                            likeCount: item.likeCount,
                        }
                    );
                }
            );
            state.defaultItemsArray = [...itemsArray_tmp];
        },

    }
});

export default MyPageQASlice;