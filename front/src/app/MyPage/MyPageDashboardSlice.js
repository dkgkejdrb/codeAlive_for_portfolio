
// MyPageDashboard를 관리하는 학습이력 저장소
import { createSlice } from "@reduxjs/toolkit";

import starRed from "../../Assets/starRed.svg";
import starYellow from "../../Assets/starYellow.svg"
import starPurple from "../../Assets/starPurple.svg"

import { Image } from 'antd';

const MyPageDashboardSlice = createSlice({
    name: 'MyPageDashboard',
    initialState: {
        data: { }, // currCourseData
        key: '',
        isFirst: true,
        dataStudyHistory: [],
        studyHist: [],
        dataStudyTimeEveryday: [],
        subArrayState: [],
        acquisitionStarPoint_total: [],

        // [ [코스1의 챕터1, 코스1의 챕터2, ...], [코스2의 챕터1, 코스2의 챕터2, ...], ... ]
        dataCodeAchieve: [],

        starPoint_total: [],

        // 코스 타이틀
        courseTitleArray: [],

        // 챕터 타이틀
        chapterTitleArray: [],

        // 코스별 챕터 상세 정보
        courseDetail: [],

        // 코드 어치브의 표에 표시할 획득 스타포인트
        acquisitionStarPoint_page_data: [],

        // 각 챕터의 페이지 길이만큼 열 생성 
        acquisitionStarPoint_page_column: [],

        // 코딩테스트 결과
        dataCodingTest: [],

        // 코딩테스트 비교지표
        myCodingTestScore: [],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setMyPageNavigationKey: (state, action) => {
            state.key = action.payload;
        },
        setIsFirst: (state, action) => {
            state.isFirst = action.payload;
        },
        // 꺾은선 차트에 사용할 데이터 리스트
        setDataStudyHistory: (state, action) => {
            // 현재 수강중인 코스의 크기와 학습내역의 크기가 동일하면 푸시 중지
            if(state.data.courses.length === state.dataStudyHistory.length) {
                state.dataStudyHistory.shift();
            }

            if(state.data.courses.length + 1 === state.dataStudyHistory.length) {
                return;
            }
            state.dataStudyHistory.push(action.payload);
        },
        setStudyHist: (state, action) => {
            // 현재 수강중인 코스의 크기와 학습내역의 크기가 동일하면 푸시 중지
            if(state.data.courses.length === state.studyHist.length) {
                state.studyHist.shift();
            }
            if(state.data.courses.length + 1 === state.studyHist.length) {
                return;
            }
            state.studyHist.push(action.payload);
        },
        setDataStudyTimeEveryday: (state, action) => {
            let subArray = [];
            let parentArray = [];
            let data = action.payload;

            for(let i = 0; i < data.length; ++i) {
                for(let j = 0; j < data[i].length; ++j) {
                    subArray.push(
                        {
                            x: data[i][j].day,
                            // y: data[i][j].duration.hours,
                            y: (((data[i][j].duration.hours * 60) + (data[i][j].duration.minutes)) / 60).toFixed(1),
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
                subArray.length = 0;
            }
            state.dataStudyTimeEveryday = [...parentArray];
        },
        setAcquisitionStarPoint_total: (state, action) => {
            if(state.data.courses.length === state.acquisitionStarPoint_total.length) {
                return;
            }

            state.acquisitionStarPoint_total.push(action.payload);
        },
        setDataCodeAchieve: (state, action) => {
            if(state.data.courses.length === state.dataCodeAchieve.length) {
                return;
            }
            state.dataCodeAchieve.push(action.payload);
        },
        setStarPoint_total: (state, action) => {
            let data = action.payload;
            let sum = 0;
            let sumArray = [];
            for(let i = 0; i < data.length; ++i) {
                for(let j = 0; j < data[i].length; ++j) {
                    sum += data[i][j].chapterStarPoint
                }
                sumArray.push(sum);
                sum = 0;
            }
            state.starPoint_total = [...sumArray];
        },
        setCourseDetail: (state, action) => {
            if(state.data.courses.length === state.courseDetail.length) {
                state.courseDetail.shift();
            }
            if(state.data.courses.length + 1 === state.courseDetail.length) {
                return;
            }
            state.courseDetail.push(action.payload);
        },

        // 코스의 길이 > 챕터의 길이 > 페이지의 길이 에서 모든 원소를 추출
        setAcquisitionStarPoint_page_data: (state, action) => {
            let coursesDetail = action.payload;
            // 코스 길이까지 푸시
            let parentArray = [];
            // 챕터 길이까지 푸시
            let subArray = [];
            // 페이지 길이까지 푸시
            let subSubArray = [];

            // Image MyPageDashboard 컴포넌트에서 처리하도록 코드 수정
            for(let i = 0; i < coursesDetail.length; ++i) {
                for(let j = 0; j < coursesDetail[i].chapters.length; ++j) {
                    for(let h = 0; h < coursesDetail[i].chapters[j].pages.length; ++h) {
                        subSubArray.push(coursesDetail[i].chapters[j].pages[h].acquisitionPoint);
                        // let x = coursesDetail[i].chapters[j].pages[h].acquisitionPoint
                        // switch(x) {
                        //     case 0:
                        //         subSubArray.push(
                        //             '-'
                        //         );
                        //         break
                        //     case 1:
                        //         subSubArray.push(
                        //             <Image 
                        //             width={15}
                        //             src={starPurple}
                        //             preview={false}>
                        //             </Image>
                        //         );
                        //         break
                        //     case 2:
                        //         subSubArray.push(                                    
                        //             <Image 
                        //             width={15}
                        //             src={starYellow}
                        //             preview={false}>
                        //             </Image>);
                        //         break
                        //     case 3:
                        //         subSubArray.push(
                        //             <Image 
                        //             width={15}
                        //             src={starRed}
                        //             preview={false}>
                        //             </Image>);
                        //         break
                        //     default:
                        //         subSubArray.push(x);
                        // }
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
            }
            state.acquisitionStarPoint_page_data = [...parentArray]
        },


        setAcquisitionStarPoint_page_column: (state, action) => {
            let coursesDetail = action.payload;
            // 코스 길이까지 푸시
            let parentArray = [];
            // 챕터 길이까지 푸시
            let subArray = [];
            // 페이지 길이까지 푸시
            let subSubArray = [];

            for(let i = 0; i < coursesDetail.length; ++i) {
                for(let j = 0; j < coursesDetail[i].chapters.length; ++j) {
                    for(let h = 0; h < coursesDetail[i].chapters[j].pages.length; ++h) {
                        subSubArray.push(
                            {
                                title: h + 1,
                                dataIndex: h,
                                key: coursesDetail[i].chapters[j].pages[h].pageSeq
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
            }
            state.acquisitionStarPoint_page_column = [...parentArray];
        },

        setDataCodingTest: (state, action) => {
            if(state.data.courses.length === state.dataCodingTest.length) {
                state.dataCodingTest.shift();
            }
            if(state.data.courses.length + 1 === state.dataCodingTest.length) {
                return;
            }
            state.dataCodingTest.push(action.payload);
        },

        // {
        //     series: 
        //     [
        //         {
        //             data: [60, 86, 90]
        //         }
        //     ]
        // },
        // {
        //     series: 
        //     [
        //         {
        //             data: [15, 32, 45]
        //         }
        //     ]
        // },
        setMyCodingTestScore: (state, action) => {
            let data = action.payload;
            if(state.data.courses.length === state.myCodingTestScore.length) {
                return;
            }

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

    }
});

export default MyPageDashboardSlice;