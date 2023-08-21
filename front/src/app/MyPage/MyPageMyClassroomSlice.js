// MyPageMyClassroom을 관리하는 학습이력 저장소
import { createSlice } from "@reduxjs/toolkit";

const MyPageMyClassroomSlice = createSlice({
    name: 'MyPageMyClassroom',
    initialState: {
        currCourses : [],
        courseStudyTimeEveryday : [],
        courseStudyTimeSummary : {},
        
        // [ [코스1의 챕터1, 코스1의 챕터2, ...], [코스2의 챕터1, 코스2의 챕터2, ...], ... ]
        dataCodeAchieve: [],

        // 코드 어치브의 표에 표시할 획득 스타포인트
        acquisitionStarPoint_page_data: [],

        // 각 챕터의 페이지 길이만큼 열 생성 
        acquisitionStarPoint_page_column: [],

        // 코딩 테스트 결과
        codingTest: {},

        myCodingTestScore: [],
    },
    reducers: {
        setCurrCourses: (state, action) => {
            state.currCourses = action.payload;
        },
        setCourseStudyTimeEveryday: (state, action) => {
            let subArray = [];
            let parentArray = [];
            let data = action.payload;

            for(let i = 0; i < data.length; ++i) {
                subArray.push(
                    {
                        x: data[i].day,
                        y: (((data[i].duration.hours * 60) + (data[i].duration.minutes)) / 60).toFixed(1),
                    }
                );
            }
            parentArray.push(
                {
                    series : [
                        {
                            name: '',
                            data: [...subArray],
                        }
                    ]
                },
            );
            state.courseStudyTimeEveryday = [...parentArray];
        },
        setCourseStudyTimeSummary: (state, action) => {
            state.courseStudyTimeSummary = action.payload;
        },
        setDataCodeAchieve: (state, action) => {

            state.dataCodeAchieve = action.payload;
        },

        // 코스의 길이 > 챕터의 길이 > 페이지의 길이 에서 모든 원소를 추출
        setAcquisitionStarPoint_page_data: (state, action) => {
            let chapters = action.payload;
            // 코스 길이까지 푸시
            let parentArray = [];
            // 챕터 길이까지 푸시
            let subArray = [];
            // 페이지 길이까지 푸시
            let subSubArray = [];

            // Image MyPageDashboard 컴포넌트에서 처리하도록 코드 수정
            for(let j = 0; j < chapters.length; ++j) {
                for(let h = 0; h < chapters[j].pages.length; ++h) {
                    subSubArray.push(chapters[j].pages[h].acquisitionPoint);
                }
                let tmp = [...subSubArray]
                // 페이지 생성
                let obj = Object.assign({}, tmp);
                obj = {...obj, key: `${j}`}

                subArray.push(obj);
                subSubArray.length = 0;
            }
            let tmp = [...subArray];
            parentArray.push(tmp);
            subArray.length = 0;

            state.acquisitionStarPoint_page_data = [...parentArray]
        },


        setAcquisitionStarPoint_page_column: (state, action) => {
            let chapters = action.payload;
            // 코스 길이까지 푸시
            let parentArray = [];
            // 챕터 길이까지 푸시
            let subArray = [];
            // 페이지 길이까지 푸시
            let subSubArray = [];

            for(let j = 0; j < chapters.length; ++j) {
                for(let h = 0; h < chapters[j].pages.length; ++h) {
                    subSubArray.push(
                        {
                            title: h + 1,
                            dataIndex: h,
                            key: chapters[j].pages[h].pageSeq
                        }
                    );
                }
                let tmp = [...subSubArray];
                subArray.push(tmp);
                subSubArray.length = 0;
            }
            let tmp = [...subArray];
            parentArray.push(tmp);
            subArray.length = 0;
            state.acquisitionStarPoint_page_column = [...parentArray];
        },

        setCodingTest: (state, action) => {
            state.codingTest = action.payload;
        },

        setMyCodingTestScore: (state, action) => {
            let data = action.payload;

            state.myCodingTestScore.push(
            {
                series:
                [
                    {
                        data: [data.averageOfAll, data.myScore, data.averageOfTop]
                    }
                ]
            }
            );
        }


    },
    }
);

export default MyPageMyClassroomSlice;