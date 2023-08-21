import axios from "axios"
import MyPageDashboardSlice from './MyPageDashboardSlice';
import MyPageMyClassroomSlice from "./MyPageMyClassroomSlice";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Layout, Image, Row, Button, Table, Carousel, Tabs, Modal, Spin } from 'antd';
import learningGoalImage from "../../Assets/learningGoalImage.svg"
import learningProgressImage from "../../Assets/learningProgressImage.svg";
import Contact from "../Contact";


// 차트 그리기
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

// 숫자 애니메이션
import AnimatedNumbers from "react-animated-numbers";

// 이미지
import myClassroomTitle from "../../Assets/myClassroomTitle.png";
import myClassroomScaleUpBtn from "../../Assets/myClassroomScaleUpBtn.png"
import currCourseTitle from "../../Assets/currCourseTitle.png"
import currCourseClock from "../../Assets/currCourseClock.png";


import CourseSummaryTitle from "../../Assets/CourseSummary.svg";
import ProgressTitle from "../../Assets/ProgressTitle.svg";
// import Dialogue from "../../Assets/Dialogue.svg";
import Dialogue from "../../Assets/Dialogue.png";

import prevBtn from "../../Assets/prevtBtn.svg";
import nextBtn from "../../Assets/nextBtn.svg";
import codeAchieveTitle from "../../Assets/codeAchieveTitle.svg";
import starRed from "../../Assets/starRed.svg";
import starYellow from "../../Assets/starYellow.svg"
import starPurple from "../../Assets/starPurple.svg"
import MyPageBackgroundImage from "../../Assets/MyPageBackgroundImage.png"
import learningProgressBadImage from "../../Assets/learningProgressBadImage.svg"
import DialogueBad from "../../Assets/DialogueBad.svg";
import learningProgressNormalImage from "../../Assets/learningProgressNormalImage.svg"
import DialogueNormal from "../../Assets/DialogueNormal.png";
import codingTestTitle from "../../Assets/codingTestTitle.png";
import codingTestBackgroundImage from "../../Assets/codingTestBackgroundImage.svg"
import zoomButton from "../../Assets/zoomButton.png";
import codeEditorDot from "../../Assets/codeEditorDot.png";

// import MyPageNavigation from './MyPageNavigation.js';
import MyPageMyClassroomNavigation from "./MyPageMyClassroomNavigation";
const { Header, Content } = Layout;

const TOKEN = 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdXRvTG9naW4iLCJpc3MiOiJodHRwOi8vYXBpcy12bGMuY2R3aWRlLmNvbSIsImF1ZCI6Ind3dy45NDA3LmNvLmtyIiwibWVtYmVyX2lkIjoxNTI5MTE4LCJtZW1iZXJfbmFtZSI6IuqwlSDrj5nqsbQiLCJzdGRfaWQiOjE1MjkxMTgsIm1lbWJlcl9sb2dpbl90eXBlIjoiUyIsImlwIjoiMTkyLjE2OC41NC42MSIsImJyaW5mbyI6IiIsImlhdCI6MTY3MzMyNjEyMiwiZXhwIjoxNjc1OTE4MTIyfQ.NwhYDRzMcN0HoaAnclqnlLcoCrt8fs90TEGKWPT-Ymo'

// 내 강의실 > 수강 중 코스데이터를 받아오는 호스트 URL
let SERVER_URL_CURRCOURSE = "http://192.168.54.93:3560/api/v1/user/my/classroom"

// 내 강의실 > 지난 코스데이터를 받아오는 호스트 URL
let SERVER_URL_EXPIRED = "http://192.168.54.93:3560/api/v1/user/my/expired-class"

// (★중요) 학생이 현재 수강 중 코스의 코스데이터(data)를 받아오는 호스트 URL
let SERVER_URL_STUDYHISTORY_TMP = "http://192.168.54.93:3560/api/v1/user/my/report/student/";

// (★중요) 학생이 현재 수강 중인 코스의 코딩테스트 결과를 받아오는 호스트 URL
let SERVER_URL_CODINGTEST_TMP = "http://192.168.54.93:3560/api/v1/user/my/codingtest/student/"



// (★중요) 학생이 현재 수강 중 코스의 코스데이터(data)를 받아오는 호스트 URL
let SERVER_URL = "http://192.168.54.93:3560/api/v1/user/my/course"


// (★중요) 학생이 현재 수강 중인 코스와 챕터 정보, 스타 포인트를 받아오는 호스트 URL
let SERVER_URL_STARPOINT = "http://192.168.54.93:3560/api/v1/user/my/classroom"


// 현재 수강 중인 수강아이디(stdIdx)로 '대시보드 > 학습현황'을 조회할 수 있는 URL 생성
let stdIdxProgressUrl = [];
// 현재 수강 중인 수강아이디(stdIdx)로 '대시보드 > 코딩테스트결과'를 조회할 수 있는 URL 생성
let stdIdxCodingTestUrl = [];


    // 테스트 데이터(수강중코스)
    const dummyData = [
        {
            "studentIdx": 1,
            "courseIdx": 1,
            "makerCourseUid": "course_uid-1",
            "courseName": "과정 제목",
            "chapterCount": 4,
            "thumbnail": {
                "name": "작은이미지_1",
                "path": "/images/small_thumbnail.png"
            },
            "materialFile": {
                "name": "수업자료",
                "path": "/files/python.zip"
            },
            "remainStudyTime": {
                "day": -50,
                "hour": -10
            },
            "recommendProgress": 80.0,
            "acquisitionStarPoint": 147,
            "courseStarPoint": 320,
            "totalProgress": 65.6,
            "studyStart": "2022-10-03T00:00:00",
            "studyEnd": "2022-11-03T00:00:00",
            "chapters": [
                {
                    "chapterIdx": 1,
                    "makerChapterUid": "course1-chapter-uid-1",
                    "title": "챕터1 제목",
                    "contents": "과정1-챕터1 내용",
                    "chapterProgress": 100,
                    "acquisitionStarPoint": 56,
                    "chapterStarPoint": 80
                },
                {
                    "chapterIdx": 2,
                    "makerChapterUid": "course1-chapter-uid-2",
                    "title": "챕터2 제목",
                    "contents": "과정1-챕터2 내용",
                    "chapterProgress": 50,
                    "acquisitionStarPoint": 28,
                    "chapterStarPoint": 80
                },
                {
                    "chapterIdx": 3,
                    "makerChapterUid": "course1-chapter-uid-3",
                    "title": "챕터3 제목",
                    "contents": "과정1-챕터3 내용",
                    "chapterProgress": 62,
                    "acquisitionStarPoint": 35,
                    "chapterStarPoint": 80
                },
                {
                    "chapterIdx": 4,
                    "makerChapterUid": "course1-chapter-uid-4",
                    "title": "챕터4 제목",
                    "contents": "과정1-챕터4 내용",
                    "chapterProgress": 50,
                    "acquisitionStarPoint": 28,
                    "chapterStarPoint": 80
                }
            ],
            "testScore": {
                "score": 130
            }
        },
        ]

        // 테스트 데이터(지난 코스)
        const dummyData2 = [
            {
                "studentIdx": 1,
                "courseIdx": 1,
                "makerCourseUid": "course_uid-1",
                "courseName": "과정 제목11",
                "chapterCount": 4,
                "thumbnail": {
                    "name": "작은이미지_1",
                    "path": "/images/small_thumbnail.png"
                },
                "materialFile": {
                    "name": "수업자료",
                    "path": "/files/python.zip"
                },
                "remainStudyTime": {
                    "day": -50,
                    "hour": -10
                },
                "recommendProgress": 80.0,
                "acquisitionStarPoint": 147,
                "courseStarPoint": 320,
                "totalProgress": 65.6,
                "studyStart": "2022-10-03T00:00:00",
                "studyEnd": "2022-11-03T00:00:00",
                "chapters": [
                    {
                        "chapterIdx": 1,
                        "makerChapterUid": "course1-chapter-uid-1",
                        "title": "챕터1 제목",
                        "contents": "과정1-챕터1 내용",
                        "chapterProgress": 100,
                        "acquisitionStarPoint": 56,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 2,
                        "makerChapterUid": "course1-chapter-uid-2",
                        "title": "챕터2 제목",
                        "contents": "과정1-챕터2 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 3,
                        "makerChapterUid": "course1-chapter-uid-3",
                        "title": "챕터3 제목",
                        "contents": "과정1-챕터3 내용",
                        "chapterProgress": 62,
                        "acquisitionStarPoint": 35,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 4,
                        "makerChapterUid": "course1-chapter-uid-4",
                        "title": "챕터4 제목",
                        "contents": "과정1-챕터4 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 3,
                        "makerChapterUid": "course1-chapter-uid-3",
                        "title": "챕터3 제목",
                        "contents": "과정1-챕터3 내용",
                        "chapterProgress": 62,
                        "acquisitionStarPoint": 35,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 4,
                        "makerChapterUid": "course1-chapter-uid-4",
                        "title": "챕터4 제목",
                        "contents": "과정1-챕터4 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 3,
                        "makerChapterUid": "course1-chapter-uid-3",
                        "title": "챕터3 제목",
                        "contents": "과정1-챕터3 내용",
                        "chapterProgress": 62,
                        "acquisitionStarPoint": 35,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 4,
                        "makerChapterUid": "course1-chapter-uid-4",
                        "title": "챕터4 제목",
                        "contents": "과정1-챕터4 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    }
                ],
                "testScore": {
                    "score": 130
                }
            },
            {
                "studentIdx": 1,
                "courseIdx": 1,
                "makerCourseUid": "course_uid-1",
                "courseName": "과정 제목22",
                "chapterCount": 4,
                "thumbnail": {
                    "name": "작은이미지_1",
                    "path": "/images/small_thumbnail.png"
                },
                "materialFile": {
                    "name": "수업자료",
                    "path": "/files/python.zip"
                },
                "remainStudyTime": {
                    "day": -50,
                    "hour": -10
                },
                "recommendProgress": 80.0,
                "acquisitionStarPoint": 147,
                "courseStarPoint": 320,
                "totalProgress": 79.9,
                "studyStart": "2022-11-03T00:00:00",
                "studyEnd": "2022-12-13T00:00:00",
                "chapters": [
                    {
                        "chapterIdx": 1,
                        "makerChapterUid": "course1-chapter-uid-1",
                        "title": "챕터1 제목",
                        "contents": "과정1-챕터1 내용",
                        "chapterProgress": 100,
                        "acquisitionStarPoint": 56,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 2,
                        "makerChapterUid": "course1-chapter-uid-2",
                        "title": "챕터2 제목",
                        "contents": "과정1-챕터2 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 3,
                        "makerChapterUid": "course1-chapter-uid-3",
                        "title": "챕터3 제목",
                        "contents": "과정1-챕터3 내용",
                        "chapterProgress": 62,
                        "acquisitionStarPoint": 35,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 4,
                        "makerChapterUid": "course1-chapter-uid-4",
                        "title": "챕터4 제목",
                        "contents": "과정1-챕터4 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    }
                ],
                "testScore": {
                    "score": 130
                }
            },
            {
                "studentIdx": 1,
                "courseIdx": 1,
                "makerCourseUid": "course_uid-1",
                "courseName": "과정 제목33",
                "chapterCount": 4,
                "thumbnail": {
                    "name": "작은이미지_1",
                    "path": "/images/small_thumbnail.png"
                },
                "materialFile": {
                    "name": "수업자료",
                    "path": "/files/python.zip"
                },
                "remainStudyTime": {
                    "day": -50,
                    "hour": -10
                },
                "recommendProgress": 80.0,
                "acquisitionStarPoint": 147,
                "courseStarPoint": 320,
                "totalProgress": 79.9,
                "studyStart": "2022-11-03T00:00:00",
                "studyEnd": "2022-12-13T00:00:00",
                "chapters": [
                    {
                        "chapterIdx": 1,
                        "makerChapterUid": "course1-chapter-uid-1",
                        "title": "챕터1 제목",
                        "contents": "과정1-챕터1 내용",
                        "chapterProgress": 100,
                        "acquisitionStarPoint": 56,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 2,
                        "makerChapterUid": "course1-chapter-uid-2",
                        "title": "챕터2 제목",
                        "contents": "과정1-챕터2 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 3,
                        "makerChapterUid": "course1-chapter-uid-3",
                        "title": "챕터3 제목",
                        "contents": "과정1-챕터3 내용",
                        "chapterProgress": 62,
                        "acquisitionStarPoint": 35,
                        "chapterStarPoint": 80
                    },
                    {
                        "chapterIdx": 4,
                        "makerChapterUid": "course1-chapter-uid-4",
                        "title": "챕터4 제목",
                        "contents": "과정1-챕터4 내용",
                        "chapterProgress": 50,
                        "acquisitionStarPoint": 28,
                        "chapterStarPoint": 80
                    }
                ],
                "testScore": {
                    "score": 130
                }
            },
        ]





const CurrCourse = () => {
    // =========================================새로 작성한 코드====================================================
    // 탭 버튼 상태값
    const [tabLeftcolor, setTabLeftColor] = useState('#6B98FF');
    const [tabRightcolor, setTabRightColor] = useState('#484D58');
    const [tabLeftTranslate, setTabLeftTranslate] = useState('translate(0px, 0px)');
    const [tabRightTranslate, setTabRightTranslate] = useState('translate(-10px, 10px)');
    const [tabLeftZIndex, setTabLeftZIndex] = useState('1');
    const [tabRightZIndex, setTabRightZIndex] = useState('0');

    // 탭 클릭시 , 조회 URL 변경 상태값
    const [SERVER_URL, SETSERVER_URL] = useState(SERVER_URL_CURRCOURSE);

    // 탭 버튼 핸들러
    // (중요★) 탭을 클릭하면, 조회 URL이 변경
    const tabHandler = (e) => {
        // console.log(e.target.className);
        let className = e.target.className;
        if(className === 'left') {
            setTabLeftColor('#6B98FF');
            setTabRightColor('#484D58');
            setTabLeftTranslate('translate(0px, 0px)');
            setTabRightTranslate('translate(-20px, 10px)');
            setTabLeftZIndex('1');
            setTabRightZIndex('0');
            
            SETSERVER_URL(SERVER_URL_CURRCOURSE)
        } else {
            setTabLeftColor('#484D58');
            setTabRightColor('#6B98FF');
            setTabLeftTranslate('translate(0px, 10px)');
            setTabRightTranslate('translate(-20px, 0px)');
            setTabLeftZIndex('0');
            setTabRightZIndex('1');

            SETSERVER_URL(SERVER_URL_EXPIRED)
        }
    }


    // 현재 수강 중인 코스의 갯수를 카운팅하고 코스의 크기만큼 캐러셀에 컴포넌트를 맵핑하는 용도
    const currCourses = useSelector( state => { return state.MyPageMyClassroomSlice.currCourses } );
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const ModalContainer = (course) => {
        return ( 
            <Modal
                open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}
                width={1276}
                footer={null}>
                <div>
                    {course}
                </div>
            </Modal>
        );
    }



    // 코딩 테스트 문항상세보기 모달창 상태값
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달에 전달할 코스의 인덱스 값
    const [modalIndex, setModalIndex] = useState(0);
    
    
    
    // 코딩 테스트 문항상세보기의 테스트 크기 상태값
    const [codeFontSize, setCodeFontSize] = useState(17);
    
    const handleOk = () => {
        setIsModalOpen(false);
    }
    
    const handleCancel = () => {
        setCodeFontSize(17);
        setIsModalOpen(false);
    };

    // 모달 > 총 학습 시간의 그래프에 뿌려질 데이터
    const courseStudyTimeEveryday = useSelector( state => { return state.MyPageMyClassroomSlice.courseStudyTimeEveryday } );

    const courseStudyTimeSummary = useSelector( state => { return state.MyPageMyClassroomSlice.courseStudyTimeSummary } );


    // 모달 > 코드어치브에 뿌려질 스타포인트 데이터
    const dataCodeAchieve = useSelector( state => { return state.MyPageMyClassroomSlice.dataCodeAchieve } );

    // 모달 > 코드어치브의 Tab 아이템
    let tabItem = [];
    let acquisitionStarPoint_page_data = useSelector( state => { return state.MyPageMyClassroomSlice.acquisitionStarPoint_page_data } );
    let acquisitionStarPoint_page_column = useSelector( state => { return state.MyPageMyClassroomSlice.acquisitionStarPoint_page_column } );

    // 모달 > 만만한 코딩 테스트 데이터
    const codingTest = useSelector( state => { return state.MyPageMyClassroomSlice.codingTest } );
    // 코딩 테스트 지표 결과 가져오기
    const myCodingTestScore = useSelector( state => { return state.MyPageMyClassroomSlice.myCodingTestScore } );
    // =========================================새로 작성한 코드====================================================







    // 현재 수강 중인 코스의 정보
    const data = useSelector( state => { return state.MyPageDashboardSlice.data } );
    // 현재 수강 중인 코스의 갯수를 카운팅하고 코스의 크기만큼 캐러셀에 컴포넌트를 맵핑하는 용도
    // const courses = useSelector( state => { return state.MyPageDashboardSlice.data.courses } );

    // 일단위, 학습시간 정보 가져오기
    let dataStudyHistory = useSelector( state => { return state.MyPageDashboardSlice.dataStudyHistory });
    // 주단위, 총 학습시간 정보 가져오기
    let studyHist = useSelector( state => { return state.MyPageDashboardSlice.studyHist});
    // 일단위, 꺾은선 그래프에 주입할 가공데이터 가져오기
    let dataStudyTimeEveryday = useSelector( state => { return state.MyPageDashboardSlice.dataStudyTimeEveryday});

    // 수강 중 획득한 스타포인트 가져오기
    let acquisitionStarPoint_total = useSelector( state => { return state.MyPageDashboardSlice.acquisitionStarPoint_total });
    // 획득할 수 있는 스타포인트 가져오기 
    let starPoint_total = useSelector( state => { return state.MyPageDashboardSlice.starPoint_total });
    // 챕터 타이틀 가져오기
    let [tabItemsArrayState, setTabItemsArrayState] = useState([]);
    
    // 현재 수강 중인 과정의 코스 정보 가져오기
    let courseDetail = useSelector( state => { return state.MyPageDashboardSlice.courseDetail } );


    // 현재 수강 중인 과정의 코딩테스트 결과 가져오기
    let dataCodingTest = useSelector( state => { return state.MyPageDashboardSlice.dataCodingTest} );



    // 줌 버튼 핸들러
    const zoomButtonHandler = (e) => {
        let codeFontSize_tmp = codeFontSize;
            if (codeFontSize_tmp < 34) {
            codeFontSize_tmp *= 2;

            setCodeFontSize(codeFontSize_tmp);
        }   else {
            codeFontSize_tmp = 17;

            setCodeFontSize(codeFontSize_tmp);
        }
    }


    const dispatch = useDispatch();


    // 수강신청한 과정의 고유번호(userInfoCourseIdx)를 조회, 수강 중 코스 이미지에 뿌리기 
    useEffect(() => {   
    
    // =========================================새로 작성한 코드====================================================
    const fetchCourses = async () => {
        // 요청이 시작할 때에는 erro와 courses를 초기화하고
        setError(null);
        dispatch(MyPageMyClassroomSlice.actions.setCurrCourses(null));
        // loading 상태를 true로 변경
        setLoading(true);
        axios.get(SERVER_URL, 
            {
                headers: {
                    Authorization: TOKEN
            }})
            .then((response) => {
                // 서버에서 받아온 response.data를 스토어(MyPageDashboardSlice)로 던지기
                dispatch(MyPageMyClassroomSlice.actions.setCurrCourses(response.data.courses));
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            })
            setLoading(false);
    };
    
    fetchCourses();
    // =========================================새로 작성한 코드====================================================


        // MyPage 호출 시, dashboard 가져오기
        // axios 헤더에 토큰추가
        axios.get(SERVER_URL, 
        {
            headers: {
                Authorization: TOKEN
        }})
        .then((response) => {
            // 서버에서 받아온 response.data를 스토어(MyPageDashboardSlice)로 던지기
            dispatch(MyPageDashboardSlice.actions.setData(response.data));
        })
        .catch((error) => {
            console.log(error);
        })
    
        dispatch(MyPageDashboardSlice.actions.setDataStudyTimeEveryday(dataStudyHistory));


        // 내 강의실(현재 수강 중)의 API에서 별의 갯수와 코스별 챕터정보를 전송
        // 코드어치브의 탭 정보(2차원 배열)와 테이블 정보(3차원 배열)를 가져와 탐색하여 Tab, Table 컴포넌트에 주입할 정보를 구성 
        axios.get(SERVER_URL_STARPOINT, 
        {
             headers: {
                 Authorization: TOKEN
        }})
        .then((response) => {
            // MyPageDashboard 의 <Tab/>에 전달할 아이템
            let tabItemsArray = [];

            if(
                currCourses 
                && currCourses.length > 0 
                ) 
            {
                currCourses.map((course, index)=>
                {
                    // dispatch(MyPageDashboardSlice.actions.setAcquisitionStarPoint_total(response.data.currCourses[index].acquisitionStarPoint));
                    dispatch(MyPageDashboardSlice.actions.setAcquisitionStarPoint_total(response.data.currCourses[index].acquisitionStarPoint));
                    dispatch(MyPageDashboardSlice.actions.setDataCodeAchieve(response.data.currCourses[index].chapters));
                    
                    // 코드어치브의 탭에 표시될 챕터 제목
                    let tabItem = [];
                    for(let j = 0; j < response.data.currCourses[index].chapters.length; ++j) {
                        tabItem.push(
                            {
                                label: `${response.data.currCourses[index].courseIdx}_${response.data.currCourses[index].chapters[j].title}`,
                                key: `${response.data.currCourses[index].courseIdx}_${j}`,
                                // acquisitionStarPoint_page_data[index][j]: 테이블별 주입할 값을 넣어주기 위해 [ ] 로 감싸줘야 함
                                // children: <Table pagination={false}  dataSource={ [ acquisitionStarPoint_page_data[index][j] ] } columns={ acquisitionStarPoint_page_column[index][j] }></Table>,
                            }
                        )
                    }
                    tabItemsArray.push(tabItem);
                    setTabItemsArrayState(tabItemsArray);
                })
            }
         })
         .catch((error) => {
            //  console.log(error);
         })


        // 코딩테스트 결과 수신받기
        stdIdxCodingTestUrl.map((url)=>{
            axios.get(url, 
            {
                headers: {
                    Authorization: TOKEN
                }})
                .then((response) => {

                    dispatch(MyPageDashboardSlice.actions.setDataCodingTest(response.data));
                    dispatch(MyPageDashboardSlice.actions.setMyCodingTestScore(response.data.statistics));
                })
                .catch((error) => {
                    console.log(error);
                })
        })



        dispatch(MyPageDashboardSlice.actions.setStarPoint_total(dataCodeAchieve));
        dispatch(MyPageDashboardSlice.actions.setAcquisitionStarPoint_page_data(courseDetail));
        dispatch(MyPageDashboardSlice.actions.setAcquisitionStarPoint_page_column(courseDetail));
    }, [
        SERVER_URL,
        // modalIndex
        // currCourses

        // dataStudyHistory,
        
        // dataCodeAchieve,
        // courseDetail,

        // acquisitionStarPoint_total,
    ]);

    // 학습시간 차트 옵션
    const studyTimeOptions = {
        options: {
            colors: ['#6B98FF'],
            chart: {
              type: 'area', 
              foreColor: '#000',
              fontFamily: `'Noto Sans', 'sans-serif'`,
              toolbar: {
                show: false
              }
            },
            yaxis: {
                // min: -5,
                max: 5,
                tickAmount: 5,
                labels: {
                    show: true
                }
            },
            xaxis: {
                labels: {
                    show: true
                }
                
            },
            plotOptions: {
                line: {
                  horizontal: false
                }
            },
            dataLabels:{
                enabled: false
            },
            fill: {
                colors: "rgba(107, 152, 255, 0.1)"
              },
            // dataLabels: {
            //       style: {
            //         fontSize: '16px',
            //         colors: ["black"]
            //       },
            // },
            markers: {
                size: [8, 8],
                colors: '#6B98FF'
            },
            grid: {
                borderColor: '#888888',
                // yaxis: {
                //     lines: {
                //         show: true
                //     }
                // }
            }
        },
    }

    // 나의 점수 차트 옵션
    const myScoreOptions = {
        options: {
            chart: {
                type: 'bar',
                toolbar: {
                    tools: {
                        download: false
                    }
                }
            },
            yaxis: {
                max: 200,
                labels: {
                    style: {
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontSize: '20px',
                        colors: ['#4E4E4E'],
                        fontWeight: 600
                    },
                    offsetY: 3
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    horizontal: true,
                    barHeight: '24px',
                    // distributed : 각 바를 별개의 바로 설정, bar 별 칼라 설정에 필요
                    distributed: true,
                    dataLabels: {
                        position: 'top'
                    }
                },
            },
            dataLabels: {
                enabled: true,
                offsetX: 80,
                offsetY: -3,
                style: {
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontSize: '32px',
                    colors: ['#4195FF'],
                    fontWeight: 600
                },
                formatter: function (val, opt) {
                    return val + "점"
                  },
            },
            xaxis: {
                categories: ['전체 평균', '내 점수', '상위 평균'],
                labels: {
                    show: false
                }
            },
            fill : {
                colors: [ "#9DC8FF", "#FF7474",  "#FFE37E" ]
            },
            legend: {
                show: false
            },
            grid: {
                show: false
            }
        }
    }

    // console.log(myCodingTestScore);
    if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;

    return(
        // ★★★★★★★★★★★★★★★★★★★★★★★★ 1. 내강의실 배경 프레임 ★★★★★★★★★★★★★★★★★★★★★★★★
        <div className='currCourse_Frame' style={{position: 'relative', width: '100%' }}>
        {/* // ★★★★★★ 1-1) 설치 가이드, 오류신고 ★★★★★★ */}
        <div className="firstLine" style={{ display: 'flex', flexDirection: 'column' }}> 
            <Image preview={false} src={myClassroomTitle} width={212} height={58}></Image>
            <div className="Wrap" style={{ marginTop: '20px', display: 'flex', height: '80px', alignItems: 'center' }}>
                <div className="left" style={{  width: '105px' }}>
                    <Button style={{ paddingTop: '5px', width: '105px', height: '36px', background: '#fff', border: '1px solid #6B98FF', borderRadius: '7px', color: '#6B98FF', fontFamily: `'Noto Sans', 'sans-serif'`, fontSize: '14px', textAlign: 'center'   }}>
                        설치 가이드
                    </Button>
                    <Button style={{ marginTop: '7px', paddingTop: '5px', width: '105px', height: '36px', background: '#fff', border: '1px solid #6B98FF', borderRadius: '7px', color: '#6B98FF', fontFamily: `'Noto Sans', 'sans-serif'`, fontSize: '14px', textAlign: 'center'  }}>
                        오류신고
                    </Button>
                </div>
                <div className="right" style={{ marginLeft: '34px', fontFamily: `'Noto Sans', 'sans-serif'`, fontSize: '14px', lineHeight: '162%'}}>
                    *처음 학습하는 경우, 시작하기를 클릭해 학습 프로그램을 설치해 주세요<br></br>
                    *설치에 어려움이 있는 경우 설치 가이드 버튼 클릭해 주세요.<br></br>
                    *오류 발생 시 오류 신고 버튼 클릭해 주세요.
                </div>
            </div>
        </div>
        <div className="secondLine" style={{ marginTop: '40px', width: '100%', height: '566px' }}>
            <div className="Tabs" style={{ width: '100%', height: '69px', display: 'flex' }}>
                <div className="left" style={{ width: '362px', height: '69px', textAlign: 'center', fontFamily: `'Noto Sans', 'sans-serif'`, fontSize: '22px', fontWeight: '700' , color: '#fff', paddingTop: '14px', borderRadius: '25px 25px 0px 0px', background: tabLeftcolor, transform: tabLeftTranslate, cursor: 'pointer', zIndex: tabLeftZIndex }}
                    onClick={(e) => tabHandler(e)}
                >수강 중 코스</div>
                <div className="right" style={{ width: '362px', height: '69px', textAlign: 'center', fontFamily: `'Noto Sans', 'sans-serif'`, fontSize: '22px', fontWeight: '700' , color: '#fff', paddingTop: '14px', borderRadius: '25px 25px 0px 0px', background: tabRightcolor,  transform: tabRightTranslate, cursor: 'pointer', zIndex: tabRightZIndex }}
                    onClick={(e) => tabHandler(e)}
                >지난 코스</div>
            </div>
            <div className="Summary" style={{  position: 'relative', width: '100%', height: '100%', backgroundColor: '#fff', border: '1px solid #6B98FF', borderRadius: '0px 25px 25px 25px', zIndex: '2' }}>
                <div className="top" style={{ width: '100%', height: '514px' }}>

                </div>
                <div className="bottom" style={{ width: '100%', height: '50px', backgroundColor: '#F9FBFF', borderTop: '1px solid #6B98FF', borderRadius: '0px 0px 25px 25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image preview={false} src={myClassroomScaleUpBtn} width={77} height={31}></Image>
                </div>
            </div>
        </div>
 
        {/* MyPageMyClassroomTMPCODE 들어갈 자리 */}
        
        {/* ★★★★★★★★★★★★★★★★★★★★★★★★ 2. 대시보드 콘텐츠 ★★★★★★★★★★★★★★★★★★★★★★★★ */}
        {/* 전체 슬라이드 콘텐츠 내용 위치 조정  */}

        <Row className='BOX_Contents' 
            style={{
                top: '280px',
                position:'absolute', 
                width: '100%'}}>
            <div className='Wrap' style={{width: '100%', zIndex: '3'}}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '1317px'}}> 
                        {/* (★중요) 대시보드의 모든 콘텐츠는 Carousel(버튼 넘김 슬라이드) 안에서 렌더링 되어야 함 */}
                        <Carousel arrows dots={false}>
                        {
                            currCourses && currCourses.length > 0?
                            currCourses.map((course, index) => {
                            // dummyData2.map((course, index) => {
                                return(
                                    <div key='1'>
                                        <div className="Wrap" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ position: 'relative', width: '849px', height: '500px', display: 'flex', alignItems: 'center' }}>
                                                <Button className="btn" style={{ position: 'absolute', left: '920px', bottom: '440px',  width: '137px', height: '48px', border: '1px solid rgba(107, 152, 255, 0.5)', borderRadius: '9px', background: '#fff', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '18px', color: '#6B98FF', textAlign: 'center', cursor: 'pointer' }}>
                                                    강의자료
                                                </Button>
                                                {/* (★중요★중요★중요★중요★중요★중요) 현재 서버 URL이 수강중 또는 지난 코스라면, 버튼이 변경되어야 함 */}
                                                {
                                                    SERVER_URL === "http://192.168.54.93:3560/api/v1/user/my/classroom"?
                                                        <Button className="btn" style={{ position: 'absolute', left: '920px', bottom: '385px',  width: '137px', height: '48px', border: '1px solid rgba(107, 152, 255, 0.5)', borderRadius: '9px', background: '#fff', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '18px', color: '#6B98FF', textAlign: 'center', cursor: 'pointer' }}>
                                                            질문하기
                                                        </Button>
                                                    :
                                                        <>
                                                            <div id={index} className="btn" style={{ paddingTop: '8px', position: 'absolute', left: '920px', bottom: '385px',  width: '137px', height: '48px', border: '1px solid rgba(107, 152, 255, 0.5)', borderRadius: '9px', background: '#fff', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '18px', color: '#6B98FF', textAlign: 'center', cursor: 'pointer' }}
                                                                // 지난 코스 > 학습현황 클릭 시, 조회할 URL 생성 
                                                                onClick={(e) => {
                                                                    // 총 학습시간, 코드 어치브의 차트에 필요한 데이터 조회
                                                                    setModalIndex(Number(e.target.id));
                                                                    setIsModalOpen(true);

                                                                    let SERVER_URL_STUDYHISTORY = SERVER_URL_STUDYHISTORY_TMP + course.studentIdx;
                                                                    axios.get(SERVER_URL_STUDYHISTORY, 
                                                                        {
                                                                             headers: {
                                                                                 Authorization: TOKEN
                                                                        }})
                                                                        .then((response) => {
                                                                            dispatch(MyPageMyClassroomSlice.actions.setCourseStudyTimeEveryday(response.data.studyHist.items));
                                                                            dispatch(MyPageMyClassroomSlice.actions.setCourseStudyTimeSummary(response.data.studyHist));
                                                                            dispatch(MyPageMyClassroomSlice.actions.setDataCodeAchieve(response.data.courseDetail.chapters));
                                                                            dispatch(MyPageMyClassroomSlice.actions.setAcquisitionStarPoint_page_data(response.data.courseDetail.chapters));
                                                                            dispatch(MyPageMyClassroomSlice.actions.setAcquisitionStarPoint_page_column(response.data.courseDetail.chapters));
                                                                         })
                                                                         .catch((error) => {
                                                                             console.log(error);
                                                                         })

                                                                        
                                                                    // 만만한 코딩 테스트의 차트에 필요한 데이터 조회 SERVER_URL_CODINGTEST
                                                                    let SERVER_URL_CODINGTEST = SERVER_URL_CODINGTEST_TMP + course.studentIdx;
                                                                    axios.get(SERVER_URL_CODINGTEST, 
                                                                        {
                                                                             headers: {
                                                                                 Authorization: TOKEN
                                                                        }})
                                                                        .then((response) => {
                                                                            dispatch(MyPageMyClassroomSlice.actions.setCodingTest(response.data));
                                                                            dispatch(MyPageMyClassroomSlice.actions.setMyCodingTestScore(response.data.statistics));
                                                                         })
                                                                         .catch((error) => {
                                                                             console.log(error);
                                                                         })
                                                                }} >
                                                                학습현황
                                                            </div>
                                                        </>
                                                }



                                                <Button className="btn" style={{ position: 'absolute', left: '920px', bottom: '330px',  width: '137px', height: '48px', border: '1px solid rgba(107, 152, 255, 0.5)', borderRadius: '9px', background: '#fff', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '18px', color: '#6B98FF', textAlign: 'center', cursor: 'pointer' }}>
                                                    수료증
                                                </Button>
                                                <div className="left" 
                                                    style={{ width: '327px' }}>
                                                    {/* 코스섬네일 */}
                                                    <div 
                                                        style={{ width: '327px', height: '300px', backgroundColor: '#C4D6FF', borderRadius: '26px' }}>
                                                        {course.thumbnail.path}
                                                    </div>
                                                </div>
                                                <div className="right" 
                                                    style={{ width: '522px', paddingLeft: '65px', display: 'flex', flexDirection: 'column' }}>
                                                    <div className="courseName" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '32px', color: '#4E4E4E' }}>
                                                        {course.courseName}
                                                    </div>
                                                    <div className="chapterCount" style={{ marginTop: '13px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', color: '#4E4E4E', letterSpacing: '-0.03em' }}>
                                                        {`${course.chapterCount}개 Unit + Test`}
                                                    </div>
                                                    <div className="studyStart&studyEnd" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', color: '#4E4E4E', letterSpacing: '-0.03em' }}>
                                                        {`수강기간 : ${course.studyStart.slice(0, 10)} ~ ${course.studyEnd.slice(0, 10)}`}
                                                    </div>
                                                    <div className="totalProgress">
                                                        <div style={{ display: 'flex' }}>
                                                            <span style={{ paddingTop: '20px' ,fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>진도율 : </span>
                                                        
                                                            <AnimatedNumbers
                                                            // 진도율 진행도 입력
                                                            animateToNumber={course.totalProgress}
                                                            fontStyle={{ fontSize: 40, fontWeight: 700, fontFamily: 'thisHow', color: '#6B98FF' }}
                                                            configs={(number, index) => {
                                                            return { mass: 1, tension: 600 * (index + 1), friction: 140 };
                                                            }}></AnimatedNumbers>

                                                            <span style={{ paddingTop: '24px' ,fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>%</span>
                                                        </div>
                                                        <div style={{ width: '100%', height: '22px' }}>
                                                            <div className="barFrame" style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', borderRadius: '41px' }}>
                                                                <div className="progressBar" style={{ width: `${course.totalProgress}%`, height: '100%'}}>
                                                                    <div className="fakeBar" style={{ width: '100%', height: '100%', backgroundColor: '#6B98FF', borderRadius: '41px' }}>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="acquisitionStarPoint" style={{ marginTop: '5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '14px', color: '#4E4E4E', display: 'flex', alignItems: 'center'}}>
                                                        <span style={{ paddingTop: '2px' }}>스타 포인트</span> 
                                                        <Image preview={false} src={starRed} width={20} style={{ marginLeft: '10px' }}> </Image>
                                                        <span style={{ paddingTop: '2px', marginLeft: '13px' }}>{`${course.acquisitionStarPoint} / ${course.courseStarPoint}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '100px', width: '100%', minHeight: '330px', maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                                        {
                                            course.chapters && course.chapters.length > 0? 
                                                course.chapters.map((chapter, index) => {
                                                    return (
                                                        
                                                            <div key={index} style={{ position: 'relative', marginBottom: '40px', width: '100%', height: '326px', borderRadius: '25px', border: '1px solid #6B98FF' }}>
                                                                <div className="top" style={{ height: '181px' }}>
                                                                    <div className="title&btn" style={{ paddingLeft: '106px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '32px', color: '#474747', letterSpacing: '-0.02em', display: 'flex' }}>
                                                                        <div className="title" style={{ marginTop: '46px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                                            <div className="title" style={{ zIndex: '1' }}>
                                                                                {chapter.title}
                                                                            </div>
                                                                            <div className="underLine" style={{ width: '110%', height: '7px', backgroundColor: '#C8D9FF', borderRadius: '7px', marginTop: '-10px' }}></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="subtitle" style={{ paddingLeft: '108px', marginTop: '14px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '20px', color: '#4E4E4E', }}>
                                                                        {chapter.contents}
                                                                    </div>
                                                                </div>
                                                                {/* 진도율과 막대바 애니메이션 구간 */}
                                                                <div className="progressBar" style={{ width: '100%', height: '145px', display: 'flex', alignItems: 'center', borderTop: '2px dashed rgba(208, 208, 208, 0.5)' }}>
                                                                    <div style={{ display: 'flex', paddingLeft: '123px' }}>
                                                                        <span style={{ paddingTop: '20px', paddingRight: '5px',fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>진도율 : </span>
                                                        
                                                                        <AnimatedNumbers
                                                                        // 진도율 진행도 입력
                                                                        animateToNumber={chapter.chapterProgress}
                                                                        fontStyle={{ fontSize: 40, fontWeight: 700, fontFamily: 'thisHow', color: '#6B98FF' }}
                                                                        configs={(number, index) => {
                                                                        return { mass: 1, tension: 600 * (index + 1), friction: 140 };
                                                                        }}></AnimatedNumbers>

                                                                        <span style={{ paddingTop: '20px', paddingLeft: '5px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>%</span>
                                                                    </div>
                                                                    <div style={{ marginLeft: '12px', width: '602px', height: '22px' }}>
                                                                        <div className="barFrame" style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', borderRadius: '41px' }}>
                                                                            <div className="progressBar" style={{ width: `${chapter.chapterProgress}%`, height: '100%'}}>
                                                                                <div className="fakeBar" style={{ width: '100%', height: '100%', backgroundColor: '#6B98FF', borderRadius: '41px' }}></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="acquisitionStarPoint" style={{ paddingLeft: '22px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E', display: 'flex', alignItems: 'center'}}>
                                                                        <span style={{ paddingTop: '2px' }}>스타 포인트</span>
                                                                        <span style={{ paddingTop: '2px', marginLeft: '13px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#6B98FF' }}>{`${course.acquisitionStarPoint} / ${course.courseStarPoint}`}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                        )
                                                    })
                                                :
                                                <></>

                                            }
                                        </div>
                                        <div style={{ marginTop: '130px', width: '100%', minHeight: '330px', maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                                            <div key={index} style={{ position: 'relative', marginBottom: '40px', width: '100%', height: '326px', borderRadius: '25px', border: '1px solid #6B98FF' }}>
                                                <div className="top" style={{ height: '181px' }}>
                                                    <div className="title&btn" style={{ paddingLeft: '106px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '32px', color: '#474747', letterSpacing: '-0.02em', display: 'flex' }}>
                                                        <div className="title" style={{ marginTop: '46px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                                            <div className="title" style={{ zIndex: '1' }}>
                                                                만만한 코딩 테스트
                                                            </div>
                                                            <div className="underLine" style={{ width: '110%', height: '7px', backgroundColor: '#C8D9FF', borderRadius: '7px', marginTop: '-10px' }}></div>
                                                        </div>
                                                        <Button className="btn" style={{ position: 'absolute', right: '35px', marginTop: '25px',  width: '137px', height: '48px', border: '1px solid rgba(107, 152, 255, 0.5)', borderRadius: '9px', background: '#fff', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '18px', color: '#6B98FF', textAlign: 'center', cursor: 'pointer' }}>
                                                            시작하기
                                                        </Button>
                                                    </div>
                                                    <div className="subtitle" style={{ paddingLeft: '108px', marginTop: '14px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '20px', color: '#4E4E4E', }}>
                                                        지금까지 학습한 내용을 제대로 숙지했는지 체크하고, 나의 위치를 파악해 보세요.
                                                    </div>
                                                </div>
                                                {/* 진도율과 막대바 애니메이션 구간 */}
                                                {
                                                    course.testScore.score > 0?
                                                    <div className="progressBar" style={{ width: '100%', height: '145px', display: 'flex', alignItems: 'center', borderTop: '2px dashed rgba(208, 208, 208, 0.5)' }}>
                                                        <div style={{ display: 'flex', paddingLeft: '123px' }}>
                                                            <span style={{ paddingTop: '20px', paddingRight: '5px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>진도율 : </span>
                                                        
                                                            <AnimatedNumbers
                                                            // 진도율 진행도 입력
                                                            animateToNumber={100}
                                                            fontStyle={{ fontSize: 40, fontWeight: 700, fontFamily: 'thisHow', color: '#6B98FF' }}
                                                            configs={(number, index) => {
                                                            return { mass: 1, tension: 600 * (index + 1), friction: 140 };
                                                            }}></AnimatedNumbers>

                                                            <span style={{ paddingTop: '20px', paddingLeft: '5px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>%</span>
                                                        </div>
                                                        <div style={{ marginLeft: '12px', width: '602px', height: '22px' }}>
                                                            <div className="barFrame" style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', borderRadius: '41px' }}>
                                                                <div className="progressBar" style={{ width: `${100}%`, height: '100%'}}>
                                                                    <div className="fakeBar" style={{ width: '100%', height: '100%', backgroundColor: '#6B98FF', borderRadius: '41px' }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="acquisitionStarPoint" style={{ paddingLeft: '22px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E', display: 'flex', alignItems: 'center'}}>
                                                            <span style={{ paddingTop: '2px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#6B98FF' }}>{`${course.testScore.score}`}</span>
                                                            <span style={{ paddingTop: '2px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>점</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="progressBar" style={{ width: '100%', height: '145px', display: 'flex', alignItems: 'center', borderTop: '2px dashed rgba(208, 208, 208, 0.5)' }}>
                                                        <div style={{ display: 'flex', paddingLeft: '123px' }}>
                                                            <span style={{ paddingTop: '20px', paddingRight: '5px',fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>진도율 : </span>
                                                    
                                                            <AnimatedNumbers
                                                            // 진도율 진행도 입력
                                                            animateToNumber={0}
                                                            fontStyle={{ fontSize: 40, fontWeight: 700, fontFamily: 'thisHow', color: '#6B98FF' }}
                                                            configs={(number, index) => {
                                                            return { mass: 1, tension: 600 * (index + 1), friction: 140 };
                                                            }}></AnimatedNumbers>

                                                            <span style={{ paddingTop: '20px', paddingLeft: '5px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>%</span>
                                                        </div>
                                                        <div style={{ marginLeft: '12px', width: '602px', height: '22px' }}>
                                                            <div className="barFrame" style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', borderRadius: '41px' }}>
                                                                <div className="progressBar" style={{ width: `${0}%`, height: '100%'}}>
                                                                    <div className="fakeBar" style={{ width: '100%', height: '100%', backgroundColor: '#6B98FF', borderRadius: '41px' }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="acquisitionStarPoint" style={{ paddingLeft: '22px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E', display: 'flex', alignItems: 'center'}}>
                                                            <span style={{ paddingTop: '2px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#6B98FF' }}>{`${course.testScore.score}`}</span>
                                                            <span style={{ paddingTop: '2px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>점</span>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div> // 여기가 슬라이드의 끝
                                ); // 여기서부터 서버 URL 변경시 새로운 컴포넌트 코딩해야함
                            })
                            :
                            // <>
                            //     수강중인 강의가 없습니다.
                            // </>
                            <div className='currCourse_Frame' style={{width: '100%', height: '551px', alignItems: 'center'}}>
                                <div style={{ paddingTop: '230px' ,fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '28px', color: '#2E2E2E', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    현재 수강 중인 과정이 없습니다.
                                </div>
                            </div>
                        }
                        </Carousel>
                        {
                            // currCourses => dummyData2 로 변경
                            // dummyData2 => currCourses 로 변경
                            // 모달창
                            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1276} footer={null} >
                                <div className="Wrap" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                {/* 학습현황 */}
                                <div className="firstLine">
                                <div style={{ paddingTop: '89px', width: '1070px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Image preview={false} src={currCourseTitle} width={228} height={59}></Image>
                                    {
                                        currCourses && currCourses.length >  0 ?
                                        <div className="firstLine"  key={modalIndex} style={{ marginTop: '26.76px', position: 'relative', marginBottom: '40px', width: '100%', height: '338px', borderRadius: '25px', boxShadow: '0px 1px 14px rgba(65, 149, 255, 0.23)' }}>
                                            <div className="wrap" style={{ paddingTop: '69px', paddingLeft: '185px' }}>
                                                <div className="top" style={{ height: '160px' }}>
                                                    <div className="title" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '32px', color: '#4E4E4E'  }}>
                                                        {currCourses[modalIndex].courseName}       
                                                    </div>
                                                    <div className="chapterCount" style={{ marginTop: '13px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', color: '#4E4E4E', letterSpacing: '-0.03em' }}>
                                                        {`${currCourses[modalIndex].chapterCount}개 Unit + Test`}
                                                    </div>
                                                    <div className="studyStart&studyEnd" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '20px', color: '#4E4E4E', letterSpacing: '-0.03em' }}>
                                                        {`수강기간 : ${currCourses[modalIndex].studyStart.slice(0, 10)} ~ ${currCourses[modalIndex].studyEnd.slice(0, 10)}`}
                                                    </div>
                                                    <div className="progressWrap" style={{ display: 'flex' }}>
                                                        <span style={{ paddingTop: '20px', paddingRight: '5px',fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>
                                                            총 진도율 : 
                                                        </span>
                                                        <AnimatedNumbers
                                                            // 진도율 진행도 입력
                                                            animateToNumber={currCourses[modalIndex].totalProgress}
                                                            fontStyle={{ fontSize: 40, fontWeight: 700, fontFamily: 'thisHow', color: '#6B98FF' }}
                                                            configs={(number, index) => {
                                                            return { mass: 1, tension: 600 * (index + 1), friction: 140 };
                                                            }}></AnimatedNumbers>
                                                        <span style={{ paddingTop: '20px', paddingLeft: '5px', fontFamily: 'thisHow', fontWeight: '700', fontSize: '22px', color: '#4E4E4E' }}>%</span>
                                                        <div className="acquisitionStarPoint" style={{ marginTop: '5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', fontSize: '14px', color: '#4E4E4E', display: 'flex', alignItems: 'center'}}>
                                                            <span style={{ paddingTop: '2px', marginLeft: '20px' }}>총 획득 스타 포인트</span> 
                                                            <Image preview={false} src={starRed} width={20} style={{ marginLeft: '10px' }}> </Image>
                                                            {
                                                                currCourses && currCourses.length > 0 &&
                                                                    <span style={{ paddingTop: '2px', marginLeft: '13px' }}>{`${currCourses[modalIndex].acquisitionStarPoint} / ${currCourses[modalIndex].courseStarPoint}`}</span>
                                                            }
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                                                    
                                                <div className="progressBar" style={{ paddingTop: '40px', width: '100%', height: '145px', display: 'flex' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}></div>
                                                    <div style={{ width: '719px', height: '28px' }}>
                                                        <div className="barFrame" style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9', borderRadius: '41px' }}>
                                                            <div className="progressBar" style={{ width: `${currCourses[modalIndex].totalProgress}%`, height: '100%'}}>
                                                                <div className="fakeBar" style={{ width: '100%', height: '100%', backgroundColor: '#6B98FF', borderRadius: '41px' }}>
                                                                    <span style={{ display: 'flex', justifyContent: 'center', fontFamily: 'thisHow', fontWeight: '700', fontSize: '20px', color: '#fff' }}>
                                                                        {currCourses[modalIndex].totalProgress}
                                                                        <span style={{ paddingTop: '12px', display: 'flex', justifyContent: 'center', fontFamily: 'thisHow', fontWeight: '700', fontSize: '10px', color: '#fff' }}>
                                                                            %
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                    }
                                </div> 
                                </div>

                                {/* 총 학습 시간 */}
                                <div className="secondLine">
                                    <div style={{ paddingTop: '89px', width: '1070px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
                                        <div className="Image&Title" style={{ display: 'flex', alignItems: 'center', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '26px', color: '#343434' }}>
                                            <Image preview={false} src={currCourseClock} width={53} height={52}></Image>
                                            {
                                                currCourses && currCourses.length > 0 && courseStudyTimeSummary.totalDuration &&                                                           
                                                    <>
                                                        <div style={{ marginLeft: '10px', paddingTop: '14px' }}>
                                                            총 학습 시간
                                                        </div>
                                                        <div style={{ marginLeft: '10px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '48px', color: '#6B98FF' }}>
                                                            {courseStudyTimeSummary.totalDuration.hours}
                                                        </div>
                                                        <div style={{ paddingTop: '14px' }}>
                                                            시간
                                                        </div>
                                                        <div style={{ marginLeft: '10px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '48px', color: '#6B98FF' }}>
                                                        {courseStudyTimeSummary.totalDuration.minutes}
                                                        </div>
                                                        <div style={{ paddingTop: '14px' }}>
                                                            분
                                                        </div>
                                                    </>
                                            }
                                        </div>
                                        <div id="chart3" className="lineChart" style={{ overflowX: 'scroll', overflowY: 'hidden', width: '100%', height: '578px', borderRadius: '25px', boxShadow: '0px 1px 14px rgba(65, 149, 255, 0.23)' }}>
                                            {
                                                currCourses && currCourses.length > 0  && courseStudyTimeEveryday && courseStudyTimeEveryday.length > 0 &&
                                                    // courseStudyTimeEveryday
                                                    <ApexCharts 
                                                        options={studyTimeOptions.options}
                                                        series={
                                                            // parentArray[index].series
                                                            courseStudyTimeEveryday[0].series
                                                        }
                                                        type='area'
                                                        // width={dataStudyTimeEveryday[index].series[0].data.length * 130}
                                                        width={courseStudyTimeEveryday[0].series[0].data.length * 130}
                                                        height={500}
                                                        >
                                                    </ApexCharts>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* 코드 어치브 */}
                                <div className="thirdLine">
                                    <div style={{ paddingTop: '93px', width: '1070px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
                                        <div className="Wrap" style={{ width: '100%', height: '449px', borderRadius: '25px', boxShadow: '0px 1px 14px rgba(65, 149, 255, 0.23)' }}>
                                            <div className="Title&TotalStarPoint" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
                                                <div style={{ paddingTop: '43px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '26px', color: '#343434'}}>
                                                    코드 어치브
                                                </div>
                                                <div className="starPoint" style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ marginTop: '5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '22px', color: '#737373', letterSpacing: '-0.02em' }}>
                                                    총 스타 포인트
                                                    </div>
                                                    <Image preview={false} src={starRed} width={22} style={{ marginTop: '5px', marginLeft: '5px' }}> </Image>
                                                    {   
                                                        currCourses && currCourses.length > 0 &&
                                                        <span style={{ marginLeft: '10px', paddingTop: '2px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', fontSize: '22px', color: '#737373' }}>
                                                            {`${currCourses[modalIndex].acquisitionStarPoint} / ${currCourses[modalIndex].courseStarPoint}`}</span>
                                                    }
                                                </div>
                                            </div>

                                            <div className="lineChart" style={{ marginTop: '41px', width: '100%', height: '215px', display: 'flex', justifyContent: 'center'}}>
                                                {/* Tab에 추가할 Table 아이템 생성 */}
                                                {
                                                    // dataCodeAchieve는 chapter의 모음
                                                    dataCodeAchieve.map((chapter, index) => 
                                                    {
                                                        tabItem.push(
                                                        {
                                                            label: `${chapter.chapterTitle}`,
                                                            key: `${index}_${chapter.chapterIdx}`,
                                                            children: 
                                                            // 'hi'
                                                            <Table pagination={false}  
                                                            dataSource={ [ acquisitionStarPoint_page_data[0][index] ] } 
                                                            columns={ acquisitionStarPoint_page_column[0][index] } 
                                                            />
                                                        });
                                                    })
                                                }
                                                <Tabs style={{ width: '890.97px' }} items={tabItem} />
                                            </div>

                                            <div style={{ marginTop: '7.52px' , width: '100%', height: '15px', display: 'flex', justifyContent: 'flex-end', paddingRight: '103.56px', fontFamily: `'Noto Sans', 'sans-serif'`, color: '#737373', fontWeight: '700', alignItems: 'center'}}>
                                                <span>
                                                    *포인트 기준
                                                </span>
                                                <span style={{display: 'flex', marginLeft: '8.51px', alignItems: 'center'}}>
                                                    <div style={{display: 'flex', width:'15px', height: '15px', backgroundImage: `url(${starRed})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                                                    </div>
                                                    <div style={{marginLeft: '1.4px'}}>
                                                        =3stars
                                                    </div>
                                                </span>
                                                <span style={{display: 'flex', marginLeft: '10.19px', alignItems: 'center'}}>
                                                    <div style={{display: 'flex', width:'15px', height: '15px', backgroundImage: `url(${starYellow})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                                                    </div>
                                                    <div style={{marginLeft: '1.4px'}}>
                                                        =2stars
                                                    </div>
                                                </span>
                                                <span style={{display: 'flex', marginLeft: '10.19px', alignItems: 'center'}}>
                                                    <div style={{display: 'flex', alignItems: 'center',width:'15px', height: '15px', backgroundImage: `url(${starPurple})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                                                    </div>
                                                    <div style={{marginLeft: '1.4px'}}>
                                                        =1stars
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 만만한 코딩 테스트 */}
                                <div className="fourthLine">
                                    <div style={{ paddingTop: '93px', width: '1070px',  display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
                                        <div className="Wrap" style={{ width: '100%', minHeight: '1300px', borderRadius: '25px', boxShadow: '0px 1px 14px rgba(65, 149, 255, 0.23)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div className="Title&TestSummary" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
                                                <div style={{ paddingTop: '73.92px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '32px', color: '#343434'}}>
                                                    만만한 코딩 테스트
                                                </div>
                                            </div>
                                            <div className='currCodingTest_charts_wrap' style={{marginTop: '33.16px', position:'relative', width: '891px', height: '100%', display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
                                                <div className='currCodingTest_charts_top' style={{ width: '100%', height: '52px', borderTop:'1px solid #D9D9D9', borderBottom:'1px solid #D9D9D9', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '18px', color: '#646464', display: 'flex', alignItems: 'center', justifyContent: 'space-around',}}>
                                                    <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>총 문항 수</span>
                                                    <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>푼 문제 수</span>
                                                    <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>맞춘 문제 수</span>
                                                    <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>점수</span>
                                                    <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>제출 시간</span>
                                                    <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>응시 시간</span>
                                                </div>
                                                
                                                <div className='currCodingTest_charts_bottom'>
                                                    <div style={{width: '891px', height: '54px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                                                        {
                                                            codingTest.summary &&
                                                            <div style={{ width: '100%', height: '100%',  borderBottom:'1px solid #D9D9D9', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '16px', color: '#797979', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                                                <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                                                    {codingTest.summary.questionCount}
                                                                </span>
                                                                <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                                                    {codingTest.summary.answerCount}
                                                                </span>
                                                                <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                                                    {codingTest.summary.correctCount}
                                                                </span>
                                                                <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                                                    {codingTest.summary.score}
                                                                </span>
                                                                <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                                                    {codingTest.summary.presentDatetime}
                                                                </span>
                                                                <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                                                    {`${codingTest.summary.duration.hours}시간 ${codingTest.summary.duration.minutes}분`}
                                                                </span>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="currCodingTest_Details" style={{ marginTop: '44px', width: '891px', minHeight: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #D9D9D9', borderRadius: '17px' }}>
                                                <div className="currCodingTest_Wrap" style={{ paddingTop: '31px', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                                    <div className="title" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '28px', color: '#343434'}}>
                                                        문항 상세 보기
                                                    </div>
                                                    <div className="contents">
                                                    {
                                                        codingTest.items && codingTest.items.length > 0 &&
                                                            // 문제유형이 객관식(C)인 경우
                                                            codingTest.items.map((item, index) => (
                                                            item.question.type === "C"?
                                                                // 정답인 경우
                                                                item.testStatus === "Y"?
                                                                <div key={index} style={{paddingLeft: '68px', marginBottom: '38px', minHeight: '100px',  backgroundColor: 'transparent'}}>
                                                                    <div className="choiceTypeQuiz">
                                                                        <div className="Question" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#306FFF' }}>
                                                                            {`${index + 1}. ${item.question.question}`}
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ marginTop: '16px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                                        {`문제 정답 : ${item.question.answer}`}
                                                                    </div>
                                                                    <div style={{ marginTop: '8px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                                        {`제출한 정답 : ${item.studentAnswer}`}
                                                                    </div>
                                                                </div>
                                                                // 오답인 경우
                                                                :
                                                                <div key={index} style={{paddingLeft: '68px', marginBottom: '38px', minHeight: '100px',  backgroundColor: 'transparent'}}>
                                                                <div className="choiceTypeQuiz">
                                                                    <div className="Question" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#343434' }}>
                                                                        {`${index + 1}. ${item.question.question}`}
                                                                    </div>
                                                                </div>
                                                                <div style={{ marginTop: '16px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                                    {`문제 정답 : ${item.question.answer}`}
                                                                </div>
                                                                <div style={{ marginTop: '8px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                                    {`제출한 정답 : ${item.studentAnswer}`}
                                                                </div>
                                                            </div>
                                                            :
                                                            // 문제 유형이 코드작성인 경우
                                                            item.testStatus === "Y"?
                                                                // 정답인 경우
                                                                <div key={index} style={{marginBottom: '38px', padding: '15px 15px 15px 68px', minHeight: '460px', width: '859px', border: '1px solid rgba(131, 186, 255, 0.5)', borderRadius: '9px', backgroundColor: 'rgba(131, 186, 255, 0.1)'}}>
                                                                    <div className="codingTypeQuiz">
                                                                        <div className="Question&zoomButton" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                                            <div className="Question" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: 'rgb(48, 111, 255)' }}>
                                                                                {`${index + 1}. ${item.question.question}`}
                                                                            </div>
                                                                            {/* 줌 버튼 */}
                                                                            <div className="zoomButton" style={{ width: '39px', height: '39px', backgroundImage: `url(${zoomButton})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', cursor: 'pointer' }}
                                                                                onClick={(e) => {zoomButtonHandler(e)}}
                                                                            >
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="codeEditorSection" style={{ marginTop: '43px', display: 'flex' }}>
                                                                        <div>
                                                                            <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>문제 정답</div>
                                                                        <div className="codeEditor"
                                                                                style={{ width: '342.2px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                                <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                                    <Image src={codeEditorDot}></Image>
                                                                                </div>
                                                                                <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#97C5FF' }}>
                                                                                    { item.question.answer }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div style={{ marginLeft: '38px' }}>
                                                                            <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>제출 답안</div>
                                                                            <div className="codeEditor"
                                                                                style={{ width: '342.2px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                                <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                                    <Image src={codeEditorDot}></Image>
                                                                                </div>
                                                                                <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#fff' }}>
                                                                                    { item.studentAnswer }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                :
                                                                // 오답인 경우
                                                                <div key={index} style={{marginBottom: '38px', padding: '15px 15px 15px 68px', minHeight: '460px', width: '859px', border: '1px solid rgba(131, 186, 255, 0.5)', borderRadius: '9px', backgroundColor: 'rgba(131, 186, 255, 0.1)'}}>
                                                                    <div className="codingTypeQuiz">
                                                                        <div className="Question&zoomButton" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                                            <div className="Question" style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#343434' }}>
                                                                                {`${index + 1}. ${item.question.question}`}
                                                                            </div>
                                                                            {/* 줌 버튼 */}
                                                                            <div className="zoomButton" style={{ width: '39px', height: '39px', backgroundImage: `url(${zoomButton})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', cursor: 'pointer' }}
                                                                                onClick={(e) => {zoomButtonHandler(e)}}
                                                                            >
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="codeEditorSection" style={{ marginTop: '43px', display: 'flex' }}>
                                                                        <div>
                                                                            <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>문제 정답</div>
                                                                        <div className="codeEditor"
                                                                                style={{ width: '342.19px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                                <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                                    <Image src={codeEditorDot}></Image>
                                                                                </div>
                                                                                <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#97C5FF' }}>
                                                                                    { item.question.answer }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div style={{ marginLeft: '38px' }}>
                                                                            <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>제출 답안</div>
                                                                            <div className="codeEditor"
                                                                                style={{ width: '342.19px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                                <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                                    <Image src={codeEditorDot}></Image>
                                                                                </div>
                                                                                <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#fff' }}>
                                                                                    { item.studentAnswer }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ))
                                            }
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ marginTop: '59px', width: '1070px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                <div className="title">
                                                    <div style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '24px', color: '#4195FF', textAlign: 'center' }}>
                                                        만만한 코딩 테스트 비교 지표</div>
                                                    <div style={{ fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '400', fontSize: '16px', color: '#4E4E4E',  textAlign: 'center', letterSpacing: '-0.02em' }}>
                                                        한 눈에 보는 테스트 지표!</div>
                                                </div>
                                                <div className="bottom" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                    <div style={{ marginLeft: '150px', width: '867px', height: '280px' }}>
                                                        {
                                                            myCodingTestScore && myCodingTestScore.length > 0 &&
                                                                <ReactApexChart type='bar' options={myScoreOptions.options} series={myCodingTestScore[0].series} height={280}></ReactApexChart>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                                </div>
                            </Modal>
                        }
                </div>
                </div>
            </div>
        </Row> 
    </div>
);}


const MyPageMyClassroom = () => {

    const [isEmpty, setIsEmpty] = useState(true);

    // 로딩 스피너
    const [loading, setLoading] = useState(false);

    useEffect(() => {   
        // MyPage 호출 시, dashboard 가져오기
        // axios 헤더에 토큰추가
        axios.get(SERVER_URL, 
        {
            headers: {
                Authorization: TOKEN
        }})
        .then((response) => {
            // 현재 수강중인 과정이 없는 경우, 화면 표시
            if(response.data.courses.length <= 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
            }
        })
        .catch((error) => {
            console.log(error);
        })

        // axios 호출시 인터셉트
        axios.interceptors.request.use(function (config) {
            if(config.url.includes('detection')) {
                setLoading(true);
            }
            return config
        }, function (error) {
            return Promise.reject(error);
        });
        // axios 호출 종료시 인터셉트
        axios.interceptors.response.use(function (response) {
            setLoading(false);
            return response;
        }, function (error) {
            setLoading(false);
            return Promise.reject(error);
        });

    }, [isEmpty])

    return (
      <>
        <Layout className="myPageMyClassroom">
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 1,
            }}
          ></Header>
          <Contact />

          {/* ★★★★★★왼쪽 영역(내비게이션)★★★★★★ */}
          <MyPageMyClassroomNavigation />

          {/* ★★★★★★오른쪽 영역(대시보드, 내 강의실, 학습 Q&A, 장바구니, 결제내역)★★★★★★ */}
          <Layout
            style={{
              backgroundImage: `url(${MyPageBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // 여기서부터 작업
            }}
          >
            <Content>
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  width: "1315px",
                  height: "5000px",
                  marginLeft: "495px",
                  marginTop: "191px",
                  padding: "0px",
                }}
              >
                {/* ★★★★★★수강 중 코스★★★★★★ */}
                {
                  // 주석 풀어야함
                  // isEmpty?
                  // <div className='currCourse_Frame' style={{width: '100%', height: '551px', boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)', backgroundColor: '#fff', borderRadius: '25px'}}>
                  //     <Row
                  //         style={{position: 'relative', width:'1270px', height:'138px', borderBottom: '1px dashed #C4D6FF', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  //         <Image
                  //             width={297}
                  //             src={CourseSummaryTitle}
                  //             preview={false}>
                  //         </Image>
                  //     </Row>
                  //     <div style={{ height: '50%', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '600', fontSize: '28px', color: '#2E2E2E', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  //             현재 수강 중인 과정이 없습니다.
                  //     </div>
                  // </div>
                  // :
                  <>
                    {/* <div style={{ display: "none", position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(131, 186, 255, 0.1)', zIndex: 9999}}>
                            <Spin tip="로딩중입니다..." spinning={true} size="large" />
                        </div> */}
                    <Spin
                      tip="로딩중입니다..."
                      spinning={loading}
                      size="large"
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        zIndex: "9999",
                      }}
                    />
                    <CurrCourse />
                  </>
                }
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
}

export default MyPageMyClassroom;