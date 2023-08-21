import axios from "axios"
import MyPageDashboardSlice from './MyPageDashboardSlice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Layout, Image, Row, Button, Table, Carousel, Tabs, Modal, Spin } from 'antd';
import learningGoalImage from "../../Assets/learningGoalImage.svg"
import learningProgressImage from "../../Assets/learningProgressImage.svg"


// 차트 그리기
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';

// 숫자 애니메이션
import AnimatedNumbers from "react-animated-numbers";

// 이미지
import CourseSummaryTitle from "../../Assets/CourseSummary.svg";
import ProgressTitle from "../../Assets/ProgressTitle.svg";
// import Dialogue from "../../Assets/Dialogue.svg";
import Dialogue from "../../Assets/Dialogue.png";
import StudyTimeTitle from "../../Assets/StudyTimeTitle.svg";
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
import MyPageDashboardNavigation from "./MyPageDashboardNavigation";
const { Header, Content } = Layout;

const TOKEN = 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdXRvTG9naW4iLCJpc3MiOiJodHRwOi8vYXBpcy12bGMuY2R3aWRlLmNvbSIsImF1ZCI6Ind3dy45NDA3LmNvLmtyIiwibWVtYmVyX2lkIjoxNTI5MTE4LCJtZW1iZXJfbmFtZSI6IuqwlSDrj5nqsbQiLCJzdGRfaWQiOjE1MjkxMTgsIm1lbWJlcl9sb2dpbl90eXBlIjoiUyIsImlwIjoiMTkyLjE2OC41NC42MSIsImJyaW5mbyI6IiIsImlhdCI6MTY3MzMyNjEyMiwiZXhwIjoxNjc1OTE4MTIyfQ.NwhYDRzMcN0HoaAnclqnlLcoCrt8fs90TEGKWPT-Ymo'

// (★중요) 학생이 현재 수강 중 코스의 코스데이터(data)를 받아오는 호스트 URL
let SERVER_URL = "http://192.168.54.93:3560/api/v1/user/my/course"
// (★중요) 학생이 현재 수강 중 코스의 코스데이터(data)를 받아오는 호스트 URL
let SERVER_URL_STUDYHISTORY = "http://192.168.54.93:3560/api/v1/user/my/report/student/"
// (★중요) 학생이 현재 수강 중인 코스와 챕터 정보, 스타 포인트를 받아오는 호스트 URL
let SERVER_URL_STARPOINT = "http://192.168.54.93:3560/api/v1/user/my/classroom"
// (★중요) 학생이 현재 수강 중인 코스의 코딩테스트 결과를 받아오는 호스트 URL
let SERVER_URL_CODINGTEST = "http://192.168.54.93:3560/api/v1/user/my/codingtest/student/"

// 현재 수강 중인 수강아이디(stdIdx)로 '대시보드 > 학습현황'을 조회할 수 있는 URL 생성
let stdIdxProgressUrl = [];
// 현재 수강 중인 수강아이디(stdIdx)로 '대시보드 > 코딩테스트결과'를 조회할 수 있는 URL 생성
let stdIdxCodingTestUrl = [];

const CurrCourse = () => {

    // 현재 수강 중인 코스의 정보
    const data = useSelector( state => { return state.MyPageDashboardSlice.data } );
    // 현재 수강 중인 코스의 갯수를 카운팅하고 코스의 크기만큼 캐러셀에 컴포넌트를 맵핑하는 용도
    const courses = useSelector( state => { return state.MyPageDashboardSlice.data.courses } );

    // 일단위, 학습시간 정보 가져오기
    let dataStudyHistory = useSelector( state => { return state.MyPageDashboardSlice.dataStudyHistory });
    // let dataStudyHistory = [];

    // 주단위, 총 학습시간 정보 가져오기
    let studyHist = useSelector( state => { return state.MyPageDashboardSlice.studyHist});
    // 일단위, 꺾은선 그래프에 주입할 가공데이터 가져오기
    let dataStudyTimeEveryday = useSelector( state => { return state.MyPageDashboardSlice.dataStudyTimeEveryday});

    // 코드어치브 > 각 코스의 챕터 정보를 담고 있는 2차원 리스트
    let dataCodeAchieve = useSelector( state => { return state.MyPageDashboardSlice.dataCodeAchieve} );
    // 수강 중 획득한 스타포인트 가져오기
    let acquisitionStarPoint_total = useSelector( state => { return state.MyPageDashboardSlice.acquisitionStarPoint_total });
    // 획득할 수 있는 스타포인트 가져오기 
    let starPoint_total = useSelector( state => { return state.MyPageDashboardSlice.starPoint_total });
    // 챕터 타이틀 가져오기
    let [tabItemsArrayState, setTabItemsArrayState] = useState([]);
    
    // 현재 수강 중인 과정의 코스 정보 가져오기
    let courseDetail = useSelector( state => { return state.MyPageDashboardSlice.courseDetail } );
    let acquisitionStarPoint_page_data = useSelector( state => { return state.MyPageDashboardSlice.acquisitionStarPoint_page_data } );
    let acquisitionStarPoint_page_column = useSelector( state => { return state.MyPageDashboardSlice.acquisitionStarPoint_page_column } );

    // 현재 수강 중인 과정의 코딩테스트 결과 가져오기
    let dataCodingTest = useSelector( state => { return state.MyPageDashboardSlice.dataCodingTest} );
    // 코딩 테스트 지표 결과 가져오기
    let myCodingTestScore = useSelector( state => { return state.MyPageDashboardSlice.myCodingTestScore} );

    // 코딩 테스트 문항상세보기 모달창 상태값
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 코딩 테스트 문항상세보기의 테스트 크기 상태값
    const [codeFontSize, setCodeFontSize] = useState(17);

    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setCodeFontSize(17);
        setIsModalOpen(false);
    };

    const showModal = (e) => {
        setIsModalOpen(true);
    }

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
                courses 
                && courses.length > 0 
                // && acquisitionStarPoint_page_data
                // && acquisitionStarPoint_page_data.length > 0 
                // && acquisitionStarPoint_page_column 
                // && acquisitionStarPoint_page_column.length > 0
                ) 
            {
                courses.map((course, index)=>
                {
                    // dispatch(MyPageDashboardSlice.actions.setAcquisitionStarPoint_total(response.data.courses[index].acquisitionStarPoint));
                    dispatch(MyPageDashboardSlice.actions.setAcquisitionStarPoint_total(response.data.courses[index].acquisitionStarPoint));
                    dispatch(MyPageDashboardSlice.actions.setDataCodeAchieve(response.data.courses[index].chapters));
                    
                    // 코드어치브의 탭에 표시될 챕터 제목
                    let tabItem = [];
                    for(let j = 0; j < response.data.courses[index].chapters.length; ++j) {
                        tabItem.push(
                            {
                                label: `${response.data.courses[index].courseIdx}_${response.data.courses[index].chapters[j].title}`,
                                key: `${response.data.courses[index].courseIdx}_${j}`,
                                // acquisitionStarPoint_page_data[index][j]: 테이블별 주입할 값을 넣어주기 위해 [ ] 로 감싸줘야 함
                                children: <Table pagination={false}  dataSource={ [ acquisitionStarPoint_page_data[index][j] ] } columns={ acquisitionStarPoint_page_column[index][j] }></Table>,
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
        dataStudyHistory,
        dataCodeAchieve,
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
              fontFamily: `'Noto Sans KR', 'sans-serif'`,
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
                        fontFamily: `'Noto Sans KR', 'sans-serif'`,
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
                    fontFamily: `'Noto Sans KR', 'sans-serif'`,
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


    return(
        // ★★★★★★★★★★★★★★★★★★★★★★★★ 1. 대시보드 배경 프레임 ★★★★★★★★★★★★★★★★★★★★★★★★
        // ★★★★★★ 1-1) 수강중코스 프레임 ★★★★★★
        <div className='currCourse_Frame' style={{width: '100%', height: '551px', boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)', backgroundColor: '#fff', borderRadius: '25px'}}>
        <Row
            style={{position: 'relative', width:'1270px', height:'138px', borderBottom: '1px dashed #C4D6FF', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                width={297}
                src={CourseSummaryTitle}
                preview={false}>
            </Image>
        </Row>
        {/* ★★★★★★ 1-2) 진도율 프레임 ★★★★★★ */}
        <div className='currCourseProgress_Frame' 
            style={{position:'relative', top: '450px', backgroundColor: '#fff', width: '100%', height: '415px', boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)', borderRadius: '25px'}}>
            <div style={{width: '100%', height: '127px', backgroundColor: '#fff', borderTopRightRadius: '25px', borderTopLeftRadius: '25px', borderBottom: '1px dashed #C4D6FF', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '175px', height: '69px', backgroundImage: `url(${ProgressTitle})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                </div>
            </div>
        </div>
        {/* ★★★★★★ 1-3) 학습시간 프레임 ★★★★★★ */}
        <div className='currCourseStudyTime_Frame' 
            style={{position:'relative', top: '450px', backgroundColor: '#fff', marginTop:'40px', width: '1276px', height: '892px', boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)', borderRadius: '25px'}}>
            <div style={{ width: '100%', height: '140px', backgroundColor: '#fff', borderTopRightRadius: '25px', borderTopLeftRadius: '25px',  borderBottom: '1px dashed #C4D6FF', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Image src={StudyTimeTitle}></Image>
            </div>
        </div>
        {/* ★★★★★★ 1-4) 코드어치브 프레임 ★★★★★★ */}
        <div className='currCourseCodeAchieve_Frame' 
            style={{position:'relative', top: '450px', backgroundColor: '#fff', marginTop:'38px', width: '1276px', height: '537px', boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)', borderRadius: '25px' }}>
            <div style={{width: '100%', height: '140px', backgroundColor: '#fff', borderTopRightRadius: '25px', borderTopLeftRadius: '25px',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '218px', height: '53px', backgroundImage: `url(${codeAchieveTitle})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                </div>

            </div>
            <div style={{position: 'relative', top: '300px', width: '100%', height: '15px', display: 'flex', justifyContent: 'flex-end', paddingRight: '124.34px', fontFamily: `'Noto Sans KR', 'sans-serif'`, color: '#737373', fontWeight: '700', alignItems: 'center'}}>
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
        {/* ★★★★★★ 1-5) 만만한코딩테스트 프레임 ★★★★★★ */}
        <div className='currCourseCodingTest_Frame'>
            <div 
                style={{position:'relative', top: '450px', backgroundColor: '#fff', marginTop:'38px', width: '1276px', height: '997px', boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)', borderRadius: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{marginTop: '89px', width: '341px', height: '69px', backgroundImage: `url(${codingTestTitle})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
            </div>
        </div>


        {/* ★★★★★★★★★★★★★★★★★★★★★★★★ 2. 대시보드 콘텐츠 ★★★★★★★★★★★★★★★★★★★★★★★★ */}
        {/* 전체 슬라이드 콘텐츠 내용 위치 조정, bottom의 절대값이 클수록 위로 올라감 */}
        <Row className='BOX_Contents' 
            style={{
                bottom: '2980px',
                position:'relative', width: '100%', height: '400px'}}>
            <div className='Wrap' style={{width: '100%', height: '400px'}}>
            {/* (★중요) 대시보드의 모든 콘텐츠는 Carousel(버튼 넘김 슬라이드) 안에서 렌더링 되어야 함 */}
            <Carousel arrows dots={false}> 
                {
                    !(courses && courses.length > 0)? // undefined, null, truthy, falsy 값인지 모두 체크하게 작성하게끔
                    <></> // 스켈레톤 달아보자
                    : 
                    courses.map((course, index) => 
                            <div key='1'>
                            {/* (★중요) 수강중인 코스의 학습현황을 조회할 URL 생성 */}
                            <div style={{
                                color: 'transparent', height: '0px'
                            }}>
                            {
                                courses.length > stdIdxProgressUrl.length&&
                                    stdIdxProgressUrl.push(SERVER_URL_STUDYHISTORY + course.studentIdx.toString())
                                
                            }
                            {/* (★중요) 수강중인 코스의 코딩테스트 결과를 조회할 URL 생성 */}
                            {
                                courses.length > stdIdxCodingTestUrl.length&&
                                    stdIdxCodingTestUrl.push(SERVER_URL_CODINGTEST + course.studentIdx.toString())
                            }
                            </div>
                            
                            {/* ★★★★★★ 2-1) 수강중코스 콘텐츠 ★★★★★★ */}
                            <div className="currCourse_Contents" 
                                style={{height: '400px', backgroundColor: 'transparent'}}>
                                <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <div className='thumbnail' 
                                    style={{width:'327px', height: '243px', backgroundColor: '#C4D6FF', borderRadius: '17px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)'}}>
                                    
                                    </div>
                                    <div className='courseSummaryDescription'
                                    style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'450px', height: '300px', marginLeft: '69px'}}>
        
                                        <div className='courseTitle'
                                        style={{fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '28px', color: '#2E2E2E'}}>
                                        {course.courseName}
                                        </div>
                                        
                                        <div className='remainStudyTime&totalProgress'
                                        style={{display: 'flex', width: '100%', height: '58px', marginTop: '6px'}}>
        
                                            <div className='dayHour'
                                            style={{display: 'flex', flexDirection: 'column', width: '50%', height: '100%'}}>
                                                <div className='title'
                                                style={{fontFamily: `'Noto Sans KR', 'sans-serif'`, letterSpacing: '-0.02rem', fontWeight: '700', fontSize: '14px', color: '#4E4E4E'}}>
                                                    남은 수강 기간
                                                </div>
                                                <div className='description'
                                                style={{ width: '280px' ,fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '28px', letterSpacing: '-0.02rem', lineHeight: '123.7%', color: '#4E4E4E'}}> 
                                                    {course.remainStudyTime.day}일 + {course.remainStudyTime.hour}시간
                                                </div>
                                            </div>
        
                                            <div className='bar' 
                                            style={{width: '44px', height: '58px'}}>
                                                <div
                                                style={{width: '50%', height: '100%', borderRight: '1px solid #000000'}}>
        
                                                </div>
                                            </div>
        
                                            <div className='totalProgress'
                                            style={{display: 'flex', flexDirection: 'column', width: '50%', height: '100%'}}>
                                                <div className='title'
                                                style={{marginLeft: '40px', fontFamily: `'Noto Sans KR', 'sans-serif'`, letterSpacing: '-0.02rem',fontWeight: '700', fontSize: '14px', color: '#4E4E4E'}}>
                                                    진도율
                                                </div>
                                                <div className='description'
                                                style={{marginLeft: '40px', height: '34.44px', display: 'flex', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '28px', lineHeight: '123.7%', color: '#4E4E4E'}}>                             
                                                    <AnimatedNumbers
                                                        // 진도율 진행도 입력
                                                        animateToNumber={course.totalProgress}
                                                        fontStyle={{ fontSize: 28, fontWeight: 600, fontFamily: `'Noto Sans KR', 'sans-serif'` }}
                                                        configs={(number, index) => {
                                                        return { mass: 1, tension: 600 * (index + 1), friction: 140 };
                                                        }}></AnimatedNumbers>
                                                        %
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <Button style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '700', fontSize: '20px', marginTop: '70px', width: '198px', height: '51px', background: '#6B98FF', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)', borderRadius: '7px', color: '#fff', borderRadius: '100px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)'}}>
                                                바로가기
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ★★★★★★ 2-2) 진도율 콘텐츠 ★★★★★★ */}
                            <div className='currCourseProgress_Contents' style={{width: '100%', height: '415px', 
                            // border: '1px solid #A795D6', 
                            borderRadius: '25px'}}>
                            <div className='wrap'
                                style={{marginTop: '240px', paddingLeft: '76px', paddingRight: '76px', width: '100%', height: '300px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                                
                                <div className='left_startDay' 
                                    style={{marginRight: '30px', width: '130px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <div
                                    style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '700', fontSize: '28px', color: '#343434'}}>
                                        Start</div>
                                    {/* 진도율 start는 10번째 글자까지 슬라이스 처리 */}
                                    <div style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '500', fontSize: '16px', color: '#343434' }}>
                                    {course.studyStart.slice(0, 10)}
                                    </div>
                                </div>

                                <div className='middle' 
                                    style={{width: '758px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                <div className='barWrap'
                                    style={{width: '100%', height:'31px', backgroundColor: '#E8F5FF', borderRadius: '16px'}}>
                                {/* 진도율 진행도 입력 */}
                                <div className='realBar'
                                    style={{ 
                                    width: `${course.totalProgress}%`, // course.totalProgress
                                    height:'31px'}}>
                            <div className='fakeBar'
                                    style={{width: '100%',
                                            height: '100%',
                                            borderRadius: '16px',
                                            backgroundColor: '#6B98FF'}}>
                                                <div className='annotation' style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                                                    {

                                                        // 코스 진도율에 따라 표시되는 이미지 조건문
                                                        course.recommendProgress - course.totalProgress > 0?
                                                            course.recommendProgress - course.totalProgress < 20?
                                                            <>
                                                            <div className='annotation_dot' 
                                                                style={{width: '200px', height: '180px', marginRight: '-180px', 
                                                                        marginTop: '-85px', display: 'flex', flexDirection: 'column', zIndex: '5'}}>
                                                                <div className='text' 
                                                                    style={{width: '188px', height: '30%', 
                                                                        backgroundImage: `url(${DialogueNormal})`, backgroundSize: 'contain',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        color: '#fff', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontSize: '14px', fontWeight: '700',
                                                                        marginLeft: '-20px',
                                                                        paddingTop: '4px',
                                                                        paddingLeft: '10px'
                                                                    }}>
                                                                    좀 더 열심히 하면 되겠어요!
                                                                </div>
                                                                <div className='mark' style={{width: '100%', height: '50%'}}>
                                                                    <div style={{ 
                                                                        width: '80px',
                                                                        height: '80px',
                                                                        backgroundImage: `url(${learningProgressNormalImage})`,
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: 'center'}}>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </>
                                                            :
                                                            <>
                                                            <div className='annotation_dot' 
                                                                style={{width: '200px', height: '180px', marginRight: '-180px', 
                                                                    marginTop: '-85px', display: 'flex', flexDirection: 'column', zIndex: '5'}}>
                                                                <div className='text' 
                                                                    style={{width: '188px', height: '30%', 
                                                                        backgroundImage: `url(${DialogueBad})`, backgroundSize: 'contain',
                                                                        backgroundRepeat: 'no-repeat',
                                                                        color: '#fff', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontSize: '14px', fontWeight: '700',
                                                                        marginLeft: '-20px',
                                                                        paddingTop: '4px',
                                                                        textAlign: 'center'
                                                                    }}>
                                                                힝! 분발해야겠어요..
                                                                </div>
                                                                <div className='mark' style={{width: '100%', height: '50%'}}>
                                                                    <div style={{ 
                                                                        width: '80px',
                                                                        height: '80px',
                                                                        backgroundImage: `url(${learningProgressBadImage})`,
                                                                        backgroundSize: 'cover',
                                                                        backgroundPosition: 'center'}}>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </>
                                                        :
                                                        <>
                                                        <div className='annotation_dot' 
                                                            style={{width: '200px', height: '180px', marginRight: '-180px', 
                                                                marginTop: '-85px', display: 'flex', flexDirection: 'column', zIndex: '5'}}>
                                                            <div className='text' 
                                                                style={{width: '188px', height: '30%', 
                                                                    backgroundImage: `url(${Dialogue})`, backgroundSize: 'contain',
                                                                    backgroundRepeat: 'no-repeat',
                                                                    color: '#fff', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontSize: '14px', fontWeight: '700',
                                                                    marginLeft: '-20px',
                                                                    paddingTop: '4px',
                                                                }}>
                                                            Good! 잘하고 있어요~!
                                                            </div>
                                                        <div className='mark' style={{width: '100%', height: '50%'}}>
                                                            <div style={{ 
                                                                width: '80px',
                                                                height: '80px',
                                                                backgroundImage: `url(${learningProgressImage})`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: 'center'}}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </>
                                                    }

                                                </div>
                                            </div>
                                    </div>
                                    <div className='annotation_goal' style={{width: '200px', height: '180px', flexDirection: 'column', position: 'absolute', right: '287px', bottom: '85px'}}>
                                        <div className='mark' style={{width: '100%', height: '60%'}}>
                                            <div style={{ 
                                                width: '114px',
                                                height: '114px',
                                                backgroundImage: `url(${learningGoalImage})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='right_startDay'  
                                style={{marginLeft:'30px', width: '130px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <div
                                        style={{fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '700', fontSize: '28px', color: '#343434'}}>Finish</div>
                                    {/* 진도율 Finish는 10번째 글자까지 슬라이스 처리 */}
                                    <div style={{fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '500', fontSize: '16px', color: '#343434'}}>
                                    {course.studyEnd.slice(0, 10)}
                                    </div>
                            </div>
                            </div>
                        </div>
                        
                        {/* ★★★★★★ 2-3) 학습시간 콘텐츠★★★★★★ */}
                        {
                            // (★중요) 학생이 수강중인 학습 이력이 없으면 정보 받아오기
                            !(dataStudyHistory) || dataStudyHistory.length === 0?
                            stdIdxProgressUrl.map((url)=>{
                                axios.get(url, 
                                    {
                                        headers: {
                                            Authorization: TOKEN
                                    }})
                                    .then((response) => {
                                        dispatch(MyPageDashboardSlice.actions.setStudyHist(response.data.studyHist));
                                        dispatch(MyPageDashboardSlice.actions.setDataStudyHistory(response.data.studyHist.items));
                                        // dataStudyHistory.push(response.data.studyHist.items);

                                        dispatch(MyPageDashboardSlice.actions.setCourseDetail(response.data.courseDetail));


                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                                })
                        :
                        // (★중요) 그렇지 않으면 컴포넌트 표시
                        <div className='currCourseStudyTime_Contents' 
                            style={{position:'relative', width: '1276px', height: '892px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <div
                                style={{marginTop: '40px', width: '839px', height: '53px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            >
                                <div className='left' 
                                    style={{fontWeight: '600', fontSize: '26px', fontFamily: `'Noto Sans KR', 'sans-serif'`, color: '#737373'}}>
                                    <span>
                                        이번주 학습 시간
                                    </span>
                                    <span style={{fontWeight: '600', fontSize: '50px', color: '#6B98FF', fontFamily: `'Noto Sans KR', 'sans-serif'`, marginLeft: '12px'}}>
                                    {
                                        studyHist[index] === undefined?
                                        <></>
                                        : studyHist[index].weeklyDuration.hours
                                    }
                                    </span>
                                    시간 
                                    <span
                                        style={{fontWeight: '600', fontSize: '50px', color: '#6B98FF', fontFamily: `'Noto Sans KR', 'sans-serif'`, marginLeft: '12px'}}>
                                    {
                                        studyHist[index] === undefined?
                                        <></>
                                        : studyHist[index].weeklyDuration.minutes
                                    }
                                    </span>분
                                </div>
                                {/* 글자 사이 세로바 */}
                                <div className='middle'  style={{marginLeft: '15px', marginRight: '15px', position: 'relative', top: '10px', width: '2px', height: '30px', backgroundColor: '#737373'}}>
                                </div>
                                <div className='right'
                                    style={{fontWeight: '600', fontSize: '26px', fontFamily: `'Noto Sans KR', 'sans-serif'`, color: '#737373'}}>
                                    <span>
                                        총 학습 시간
                                    </span>
                                    <span style={{fontWeight: '600', fontSize: '50px', color: '#6B98FF', fontFamily: `'Noto Sans KR', 'sans-serif'`, marginLeft: '12px'}}>
                                    {
                                        studyHist[index] === undefined?
                                        <></>
                                        : studyHist[index].totalDuration.hours
                                    }
                                    </span>
                                    시간 
                                    <span
                                        style={{fontWeight: '600', fontSize: '50px', color: '#6B98FF', fontFamily: `'Noto Sans KR', 'sans-serif'`, marginLeft: '12px'}}>
                                    {
                                        studyHist[index] === undefined?
                                        <></>
                                        : studyHist[index].totalDuration.minutes
                                    }
                                    </span>분
                                </div>
                            </div>
                            <Row>
                            <div id="chart2"
                                style={{
                                // width: '100%',
                                width: '1066px',
                                overflowX: 'scroll',
                                overflowY: 'hidden',
                                background: '#F5FAFF',
                                borderRadius: '25px',
                                marginTop: '39.24px',
                                paddingTop: '40px'
                                }}>
                                {
                                    dataStudyTimeEveryday[index] === undefined?
                                    <></>
                                    :<ApexCharts 
                                    options={studyTimeOptions.options}
                                    series={
                                        // parentArray[index].series
                                        dataStudyTimeEveryday[index].series
                                    }
                                    type='area'
                                    width={dataStudyTimeEveryday[index].series[0].data.length * 130}
                                    height={500}
                                    >
                                    </ApexCharts>
                                }
                            </div>
                            </Row>
                        </div>
                        }
                        {/* ★★★★★★ 2-4) 코드어치브 콘텐츠★★★★★★ */}
                        {
                        starPoint_total && starPoint_total.length > 0?
                        <div className='currCourseCodeAchieve_Contents' 
                            style={{position:'relative', width: '1276px', height: '702px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                            <div
                                style={{marginTop: '80px', width: '1066px', height: '53px', display: 'flex', flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center'}}
                            >
                                <div className='title' 
                                    style={{width: '100%', fontWeight: '600', fontSize: '26px', fontFamily: `'Noto Sans KR', 'sans-serif'`, display: 'flex', color: '#737373'}}>
                                    <div className="left">
                                        <span>
                                            총 스타 포인트
                                        </span>
                                    </div>
                                    <div className="right" style={{width: '550px', display: 'flex', alignItems: 'center', marginLeft: '19px'}}>
                                        <div 
                                            style={{width: '27px', height: '28px', backgroundImage: `url(${starRed})`, backgroundPosition: 'center', backgroundSize: 'contain'}}>
                                        </div>
                                        <span>
                                            {acquisitionStarPoint_total[index]}
                                        </span>
                                        <span>
                                            /
                                        </span>
                                        <span>
                                            {starPoint_total[index]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" style={{width: '1066px', height: '257px'}}>
                                    <Tabs items={tabItemsArrayState[index]} />
                            </div>
                        </div>
                        :
                        <div className='currCourseCodeAchieve_Contents' 
                        style={{position:'relative', width: '1276px', height: '720px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <div
                            style={{marginTop: '80px', width: '1066px', height: '53px', display: 'flex', flexDirection:'column', justifyContent: 'flex-start', alignItems: 'center'}}
                        >
                            <div className='title' 
                                style={{width: '100%', fontWeight: '700', fontSize: '26px', fontFamily: 'thisHow', display: 'flex'}}>
                                <div className="left">
                                    <span>
                                        없음
                                    </span>
                                </div>
                                <div className="right" style={{width: '550px', display: 'flex', alignItems: 'center', marginLeft: '19px'}}>
                                </div>
                            </div>
                        </div>
                        <div className="tab" style={{width: '1066px', height: '257px'}}>
                                
                        </div>
                    </div>
                        }
                        {/* ★★★★★★ 2-5) 코딩테스트 콘텐츠★★★★★★ */}
                        
                        {
                        // 코딩 테스트 결과가 있는 경우 체크
                        dataCodingTest && dataCodingTest.length > 0 && dataCodingTest[index]?
                        
                        <div className='currCodingTest_Contents' 
                            style={{position:'relative', width: '1276px', height: '892px', display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
                            <div style={{ width: '1066px', height: '63px', borderTop:'1px solid #D9D9D9', borderBottom:'1px solid #D9D9D9', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#646464', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>총 문항 수</span>
                                <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>푼 문제 수</span>
                                <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>맞춘 문제 수</span>
                                <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>점수</span>
                                <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>제출 시간</span>
                                <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '15px'}}>응시 시간</span>
                            </div>
                            
                            <div
                                style={{width: '1070px', height: '63px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            >
                                <div style={{ width: '100%', height: '100%', borderBottom:'1px solid #D9D9D9', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '16px', color: '#797979', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                    <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                        {dataCodingTest[index].summary.questionCount}
                                    </span>
                                    <span style={{width: '105px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                        {dataCodingTest[index].summary.answerCount}
                                    </span>
                                    <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                        {dataCodingTest[index].summary.correctCount}
                                    </span>
                                    <span style={{width: '117px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                        {dataCodingTest[index].summary.score}
                                    </span>
                                    <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                        {dataCodingTest[index].summary.presentDatetime}
                                    </span>
                                    <span style={{width: '165px', height: '63px', textAlign: 'center', paddingTop: '18px'}}>
                                        {`${dataCodingTest[index].summary.duration.hours}시간 ${dataCodingTest[index].summary.duration.minutes}분`}
                                    </span>
                                </div>
                            </div>

                            <div className='codingTest' style={{ width: '100%', marginTop: '58px'}}>
                            {
                                myCodingTestScore && myCodingTestScore.length > 0 && myCodingTestScore[index]?
                                <div className="Wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>  
                                    <div style={{width: '1066px', height: '417px', backgroundColor: 'grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(244, 244, 244, 0.17)', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '25px' }}>
                                        <div className="title" style={{ marginTop: '59px' }}>
                                            <div style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#4E4E4E', textAlign: 'center' }}>한 눈에 보는 테스트 지표!</div>
                                            <div style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '32px', color: '#343434', textAlign: 'center' }}>만만한 코딩 테스트 비교 지표</div>
                                        </div>
                                        <div style={{width: '867px', paddingLeft: '90px'}}>
                                            <ReactApexChart type='bar' options={myScoreOptions.options} series={myCodingTestScore[index].series} height={280}></ReactApexChart>
                                        </div>
                                    </div>
                                    {/* 문항 상세보기 버튼 */}
                                    <div className="showCodingTestDetailButton"
                                        style={{ marginTop: '42px', width: '262px', height: '65px', backgroundColor: '#6B98FF', backgroundImage: `url(${codingTestBackgroundImage})`, backgroundSize: '70%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)', cursor: 'pointer' }} 
                                        onClick={showModal}
                                    ></div>
                                
                                    {/* 문항 상세보기 모달창 */}
                                    <Modal
                                        open={isModalOpen}
                                        onOk={handleOk} onCancel={handleCancel}
                                        width={1066}
                                        footer={null}>
                                    
                                        {/* 모달창의 콘텐츠 */}
                                        <div style={{width: '1070px', height: '100%'}}>
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <div className="ModalTitle" style={{ marginTop: '12px', marginBottom: '41px', width: '204px', height: '36px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '28px', color: '#343434', textAlign: 'center' }}>
                                                    문항 상세 보기
                                                </div>
                                            </div>
                                            {
                                                // 문제유형이 객관식(C)인 경우
                                                dataCodingTest[index].items.map((item, index) => (
                                                item.question.type === "C"?
                                                    // 정답인 경우
                                                    item.testStatus === "Y"?
                                                    <div key={index} style={{marginBottom: '38px', minHeight: '100px',  backgroundColor: 'transparent'}}>
                                                        <div className="choiceTypeQuiz">
                                                            <div className="Question" style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#306FFF' }}>
                                                                {`${index + 1}. ${item.question.question}`}
                                                            </div>
                                                        </div>
                                                        <div style={{ marginTop: '16px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                            {`문제 정답 : ${item.question.answer}`}
                                                        </div>
                                                        <div style={{ marginTop: '8px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                            {`제출한 정답 : ${item.studentAnswer}`}
                                                        </div>
                                                    </div>
                                                    // 오답인 경우
                                                    :
                                                    <div key={index} style={{marginBottom: '38px', minHeight: '100px',  backgroundColor: 'transparent'}}>
                                                    <div className="choiceTypeQuiz">
                                                        <div className="Question" style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#343434' }}>
                                                            {`${index + 1}. ${item.question.question}`}
                                                        </div>
                                                    </div>
                                                    <div style={{ marginTop: '16px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                        {`문제 정답 : ${item.question.answer}`}
                                                    </div>
                                                    <div style={{ marginTop: '8px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#646464' }}>
                                                        {`제출한 정답 : ${item.studentAnswer}`}
                                                    </div>
                                                </div>
                                                :
                                                item.testStatus === "Y"?
                                                    // 정답인 경우
                                                    <div key={index} style={{marginBottom: '38px', padding: '15px', minHeight: '460px', width: '1026px', border: '1px solid rgba(131, 186, 255, 0.5)', borderRadius: '9px', backgroundColor: 'rgba(131, 186, 255, 0.1)'}}>
                                                        <div className="codingTypeQuiz">
                                                            <div className="Question&zoomButton" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                                <div className="Question" style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: 'rgb(48, 111, 255)' }}>
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
                                                                <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>문제 정답</div>
                                                             <div className="codeEditor"
                                                                    style={{ width: '449px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                    <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                        <Image src={codeEditorDot}></Image>
                                                                    </div>
                                                                    <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#97C5FF' }}>
                                                                        { item.question.answer }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{ marginLeft: '38px' }}>
                                                                <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>제출 답안</div>
                                                                <div className="codeEditor"
                                                                    style={{ width: '449px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                    <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                        <Image src={codeEditorDot}></Image>
                                                                    </div>
                                                                    <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#fff' }}>
                                                                        { item.studentAnswer }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    // 오답인 경우
                                                    <div key={index} style={{marginBottom: '38px', padding: '15px', minHeight: '460px', width: '1026px', border: '1px solid rgba(131, 186, 255, 0.5)', borderRadius: '9px', backgroundColor: 'rgba(131, 186, 255, 0.1)'}}>
                                                        <div className="codingTypeQuiz">
                                                            <div className="Question&zoomButton" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                                                <div className="Question" style={{ fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '20px', color: '#343434' }}>
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
                                                                <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>문제 정답</div>
                                                             <div className="codeEditor"
                                                                    style={{ width: '449px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                    <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                        <Image src={codeEditorDot}></Image>
                                                                    </div>
                                                                    <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#97C5FF' }}>
                                                                        { item.question.answer }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{ marginLeft: '38px' }}>
                                                                <div style={{ marginBottom: '5px', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '17px', color: '#4E4E4E' }}>제출 답안</div>
                                                                <div className="codeEditor"
                                                                    style={{ width: '449px', minHeight: '325px', backgroundColor: '#595959', borderRadius: '6px', border: '1px solid #D9D9D9', boxShadow: 'inset 0px -2px 4px rgba(0, 0, 0, 0.15)' }}>
                                                                    <div style={{ display: 'flex', paddingLeft: '29px', alignItems: 'center', width: '100%', height: '34px', backgroundColor: '#fff', border: '1px solid #D9D9D9', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
                                                                        <Image src={codeEditorDot}></Image>
                                                                    </div>
                                                                    <div style={{ padding: '15px', width: '100%', height: '100%', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: codeFontSize, color: '#fff' }}>
                                                                        { item.studentAnswer }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))
                                            }
                                        </div>
                                    </Modal>
                                </div>
                                : 
                                <></>
                            }
                            </div>
                        </div>
                        :
                        <></>
                    }
                    </div>
                    )
                }
            </Carousel>
            </div>
        </Row> 

    </div>
);}


const MyPageDashboard = () => {

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
    <Layout className="myPage">
        <Header
            className="site-layout-sub-header-background"
            style={{
                padding: 1,
            }}
        ></Header>

        {/* ★★★★★★왼쪽 영역(내비게이션)★★★★★★ */}
        <MyPageDashboardNavigation />
      

        {/* ★★★★★★오른쪽 영역(대시보드, 내 강의실, 학습 Q&A, 장바구니, 결제내역)★★★★★★ */}
        <Layout
                style={{
                    backgroundImage: `url(${MyPageBackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // 여기서부터 작업
                }}
        >
            <Content>
                <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        width: '1276px',
                        height: '5000px',
                        marginLeft: '495px',
                        marginTop: '191px',
                        padding: '0px',
                    }}
                >
                {/* ★★★★★★수강 중 코스★★★★★★ */}
                {
                    isEmpty?
                    <div className='currCourse_Frame' style={{width: '100%', height: '551px', boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)', backgroundColor: '#fff', borderRadius: '25px'}}>
                        <Row
                            style={{position: 'relative', width:'1270px', height:'138px', borderBottom: '1px dashed #C4D6FF', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Image 
                                width={297}
                                src={CourseSummaryTitle}
                                preview={false}>
                            </Image>
                        </Row>
                        <div style={{ height: '50%', fontFamily: `'Noto Sans KR', 'sans-serif'`, fontWeight: '600', fontSize: '28px', color: '#2E2E2E', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                현재 수강 중인 과정이 없습니다.
                        </div>
                    </div>
                    :
                    <>
                        {/* <div style={{ display: "none", position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(131, 186, 255, 0.1)', zIndex: 9999}}>
                            <Spin tip="로딩중입니다..." spinning={true} size="large" />
                        </div> */}
                        <Spin tip="로딩중입니다..." spinning={loading} size="large" style={{ position: 'fixed', top: '50%', left: '50%', zIndex: '9999' }}/>
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

export default MyPageDashboard;