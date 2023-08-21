import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Input, Select ,Layout, Image, Button, Pagination, Modal } from "antd";
import MyPageDashboardSlice from './MyPageDashboardSlice';
import { useSelector, useDispatch } from 'react-redux';
import MyPageQANavigation from './MyPageQANavigation.js';
import { useEffect, useState } from "react";
import QAInstruction from '../../Assets/QAInstruction.svg'
import Editor1 from './Editor1.js';
import MyPageQASlice from "./MyPageQASlice";
import QATitleImage from '../../Assets/QATitleImage.svg';
import like from '../../Assets/like.png';
import reply from "../../Assets/reply.png";
import Contact from "../Contact";
import MyPageOrderHistoryNavigation from "./MyPageOrderHistoryNavigation";
import orderHistoryTitle from "../../Assets/orderHistoryTitle.png"

// Quill 에디터
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Editor from "./Editor";
import EditorSlice from '../EditorSlice';

import { useQuill } from "react-quilljs";


const { Header, Content } = Layout;

const TOKEN = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb2RlYWxpdmVAY3JldmVyc2UuY29tIiwiaXNzIjoiY29tLmNyZXZlcnNlLmNvZGVhbGl2ZSIsIlVTRVJfREVUQUlMIjp7InVzZXJJZHgiOjEsInVzZXJOYW1lIjoi7ZmN6ri464-ZIiwiZW1haWwiOiJjb2RlYWxpdmVAY3JldmVyc2UuY29tIiwidXNlclJvbGVzIjpbIkFETUlOIiwiU1RVREVOVCJdfSwiaWF0IjoxNjcxNzU3MTk1LCJleHAiOjE2NzQzNDkxOTV9.G2aavQ7fj08MVxatiIlMJx30_n4GipmfYJqcOhGM7Gdq9WU2nFSO7B8e8WB7b462DTph2Jh-ibbR9l7wU2WMJA'

// (★중요) 학생이 현재 수강 중 코스에서 stdIdx를 받아옴
// let SERVER_URL = "http://192.168.210.87:3560/api/v1/user/my/course"
let SERVER_URL = "http://192.168.54.93:3560/api/v1/user/my/course"

// QA 전송 URL
// let SERVER_POST_URL = "http://192.168.210.87:3560/api/v1/user/my/qna"
let SERVER_POST_URL = "http://192.168.54.93:3560/api/v1/user/my/qna"

// 내 QA 길이 받아오는 URL, Pagination > total에 사용
// page 는 pagination의 버튼값, 선택위치
// size 는 한 page에서 표시할 갯수
let SERVER_URL_MYQA = "http://192.168.54.93:3560/api/v1/user/my/qna?size=10&orderBy=questionDate.desc"


const MyPageOrderHistory = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const question = useSelector( state => { return state.EditorSlice.text } );
    const questionHtml = useSelector( state => { return state.EditorSlice.html } );
    const [showQuestionHtml, setShowQuestionHtml] = useState('');
    const [title, setTitle] = useState('');
    const [chapterIdx, setChapterIdx] = useState('');
    const [courseIdx, setCourseIdx] = useState('');
    // 수정
    const [SERVER_STDIDX_URL, setSERVER_STDIDX_URL] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [optionsData, setOptionsData] = useState([]);
    const [courseOptions, setCourseOptions] = useState([]);
    const [chapterOptions, setChapterOptions] = useState([]);

    const [IsCourseClicked, setIsCourseClicked] = useState(false);
    const [chapterSelectDisabled, setChapterSelectDisabled] = useState(true);

    // QA 길이
    const totalElements = useSelector( state => { return state.MyPageQASlice.totalElements } );

    // 페이지에 표시할 MYQA 질문 내용 데이터
    const itemsArray = useSelector( state => { return state.MyPageQASlice.itemsArray } );

    // 페이지 첫 진입
    const [isFirst, setIsFirst] = useState(true);
    const defaultItemsArray = useSelector( state => { return state.MyPageQASlice.defaultItemsArray } );

    // 목록에서 내 답변 클릭 시, QA 세부 내용 확인
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

    // QA 가이드 세부 내용 확인
    const [isModalGuideOpen, setIsModalGuideOpen] = useState(false);

    // imageFileName, imageFilePath 
    const imageFileName = useSelector( state => { return state.EditorSlice.imageFileName } );
    const imageFilePath = useSelector( state => { return state.EditorSlice.imageFilePath } );

    // 프리뷰 이미지
    const [previewImage, setPreviewImage] = useState('');

    useEffect(() => {
        // 현재 수강중인 과정의 courseIdx 받아오기
        axios.get(SERVER_URL, 
            {
                headers: {
                    Authorization: TOKEN
            }})
            .then((response) => {
                let coursesArray = [...response.data.courses];
                let stdIdxArray_tmp = [];
                coursesArray.map((course) => {
                    stdIdxArray_tmp.push(
                        'http://192.168.54.93:3560/api/v1/user/my/report/student/' + course.studentIdx,
                    );
                });
                // 수정
                setSERVER_STDIDX_URL(stdIdxArray_tmp);
            })
            .catch((error) => {
                console.log(error);
            })


        // 코스마다 courseTitle, courseIdx, chapterTitle 받아오기
        let coursesArray = [];
        // 현재 수강중 코스를 받아올 URL의 길이만큼 반복하여 course 정보 받아오기
        SERVER_STDIDX_URL.map((URL)=>
            axios.get(URL, 
                {
                    headers: {
                        Authorization: TOKEN
                }})
                .then((response) => {
                    // setOptions(options.concat(response.data));
                    // setOptions(response.data.couses);
                    // 코스마다 courseTitle, courseIdx, chapterTitle 받아오기
                    // let coursesArray = [...response.data.courseDetail];
                    coursesArray.push(response.data.courseDetail);
                    let courseTitleChpaterArray_tmp = [];
                    coursesArray.map((course) => {
                        // setCourseTitleArray(course.courseTitle);
                        // setCourseTitleArray(courseTitleArray.concat(course.courseTitle));
                        courseTitleChpaterArray_tmp.push(
                            {
                                courseTitle : course.courseTitle,
                                courseIdx : course.courseIdx,
                                chapters : course.chapters,
                            });
                    });
                    setOptionsData(courseTitleChpaterArray_tmp);
                })
                .catch((error) => {
                    console.log(error);
                }));

        let courseOptions_tmp = [];
        optionsData.map((data)=>{
            courseOptions_tmp.push({
                value: data.courseIdx,
                label: `${data.courseIdx}_` + data.courseTitle,
            })
        });
        setCourseOptions(courseOptions_tmp);

        // courseIdx에 따라 챕터 제목 교체되어야 함
        let chapterOptions_tmp = [];
        optionsData.map((data)=>{
            if(data.courseIdx == courseIdx) {
            for(let i = 0; i < data.chapters.length; ++i) {
                chapterOptions_tmp.push(
                    {
                        value: data.chapters[i].chapterIdx,
                        label: `${data.courseIdx}_` + data.chapters[i].chapterTitle,
                    }
                );
            }
            }
        });
        setChapterOptions(chapterOptions_tmp);

        // 현재 수강중인 과정의 QA 정보 받아오기
        axios.get(SERVER_URL_MYQA, 
            {
                headers: {
                    Authorization: TOKEN
            }})
            .then((response) => {
                dispatch(MyPageQASlice.actions.setTotalElements(response.data.page.totalElements))
            })
            .catch((error) => {
                console.log(error);
            })


        axios.get(SERVER_URL_MYQA + '&page=0', 
            {
                headers: {
                    Authorization: TOKEN
            }})
            .then((response) => {
                dispatch(MyPageQASlice.actions.setDefaultItemsArray(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
            // console.log(courseOptions);

    }, [isModalOpen, question, title, chapterIdx, courseIdx, IsCourseClicked
        // SERVER_STDIDX_URL
    ]);

    // console.log(isModalOpen);

    const showModal = () => {
        setIsModalOpen(true);
    };

    // Q&A 제출
    const handleOk = () => {
        // if(!(courseIdx)) {
        //     alert("과정을 선택해주세요.")
        // } if(!(chapterIdx)) {
        //     alert("유닛을 선택해주세요.")
        // } if(!(title)) {
        //     alert("제목을 선택해주세요.")
        // } if(!(question)) {
        //     alert("내용을 선택해주세요.")
        // }

        axios.post(SERVER_POST_URL, 
        {
            "courseIdx": courseIdx,
            "chapterIdx": chapterIdx,
            "title": title,
            // question < 순수 텍스트, questionHtml < 태그포함 텍스트
            "question": questionHtml,
            "imageFile": {
                "name": imageFileName,
                "path": imageFilePath,
            },
        },
        {
            headers: {
                Authorization: TOKEN
            },
        }
        )
        .then(function (response) {
            console.log(response.data);
            alert('성공');
            // 등록 성공 시, 화면새로고침
            window.location.reload();
        }).catch(function (error) {
           console.log(error)
           alert('실패');
        })
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const chapterHandler = (e) => {
        setChapterIdx(e);
    }

    const courseHandler = (e) => {
        setChapterSelectDisabled(false);
        setCourseIdx(e);
    }

    // 상세 QA 클릭 시, 모달 팝업
    const showModalDetail = (e) => {
        setIsModalDetailOpen(true);

        let SERVER_URL_MYQA_PAGE = SERVER_POST_URL + `/${e.target.id}`
        axios.get(SERVER_URL_MYQA_PAGE, 
            {
                headers: {
                    Authorization: TOKEN
            }})
            .then((response) => {
                // 전송시 Img src의 blob 삭제
                setShowQuestionHtml(response.data.question.replace(/<IMG(.*?)>/gi, ""));
                
                if(response.data.imageFile === null) {
                    setPreviewImage(null);
                } else {
                let IMAGE_FILE_PATH_URL = response.data.imageFile.path;
                    // 상세 이미지 가져오기
                    axios.get(IMAGE_FILE_PATH_URL, 
                        {
                            headers: {
                                Authorization: TOKEN
                            },
                            responseType: 'arraybuffer'
                        })
                        // 이미지 받아 조회하여 blob url로 변경
                        .then((response) => {
                            // blob 사용하는 경우
                            let blob = new Blob(
                                [response.data],
                                { type: response.headers['content-type'] }
                            )
                            let image = URL.createObjectURL(blob);

                            // 일반 url 사용하는 경우
                            // let image = response.data;
                            setPreviewImage(image);
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const handleDetailCancel = () => {
        setIsModalDetailOpen(false);
    };

    const handleDetailOk = () => {
        setIsModalDetailOpen(false);
    };

    // Pagination의 버튼을 클릭할 때마다 페이지에 표시할 My QA 목록(itemsArray) 받아오기
    const paginationHandler = (page) => {
        // 페이지에 첫 진입시 상태 체크
        setIsFirst(false);

        let SERVER_URL_MYQA_PAGE = SERVER_URL_MYQA + `&page=${page - 1}`
        axios.get(SERVER_URL_MYQA_PAGE, 
            {
                headers: {
                    Authorization: TOKEN
            }})
            .then((response) => {
                dispatch(MyPageQASlice.actions.setItemsArray(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // 학습 Q&A 이용안내 가이드 모달 보여주기
    const showModalGuide = (e) => {
        setIsModalGuideOpen(true);
    }

    const handleGuideCancel = () => {
        setIsModalGuideOpen(false);
    };

    const handleGuideOk = () => {
        setIsModalGuideOpen(false);
    };

    return (
      <Layout className="myPage">
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 1,
          }}
        ></Header>
        <Contact />

        {/* ★★★★★★왼쪽 영역(내비게이션)★★★★★★ */}
        <MyPageOrderHistoryNavigation />

        {/* ★★★★★★오른쪽 영역(대시보드, 내 강의실, 학습 Q&A, 장바구니, 결제내역)★★★★★★ */}
        <Layout
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Content>
            <div
              style={{
                width: "1276px",
                height: "100vh",
                marginLeft: "495px",
                marginTop: "191px",
                padding: "0px",
              }}
            >
              <div
                className="Title"
                style={{ width: "100%", height: "90px", display: "flex" }}
              >
                <div
                  className="Wrap"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Image
                    width={225}
                    src={orderHistoryTitle}
                    preview={false}
                  ></Image>
                  <span
                    style={{
                      marginLeft: "30px",
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "500",
                      fontSize: "12px",
                      color: "#4E4E4E",
                    }}
                  >
                    *환불 관련 문의 사항은 유선문의 또는 문의하기를 클릭해
                    주세요.
                  </span>
                </div>
              </div>
              <div
                className="QAListWrap"
                style={{
                  marginTop: "52px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* {console.log(defaultItemsArray.length)} */}
                <div
                  className="QAListFrame"
                  style={{ width: "100%", height: "100%" }}
                >
                  {/* 질문 내역 표시 */}
                  {/* <MyQAList /> */}
                  {isFirst ? (
                    defaultItemsArray.length === 0 ? (
                      <div
                        style={{
                          width: "1314px",
                          height: "298px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          background: "#fff",
                          border: "1px solid #C3D2F4",
                          borderRadius: "25px",
                          fontFamily: `'Noto Sans', 'sans-serif'`,
                          fontWeight: "700",
                          fontSize: "28px",
                          color: "#494949",
                        }}
                      >
                        결제내역이 없습니다.
                      </div>
                    ) : (
                      defaultItemsArray.map((item, index) => (
                        <div
                          style={{
                            width: "1314px",
                            height: "298px",
                            backgroundColor: "#fff",
                            border: "1px solid #C3D2F4",
                            borderRadius: "25px",
                            cursor: "pointer",
                            paddingTop: "19px",
                            paddingLeft: "57px",
                            marginBottom: "40px",
                          }}
                          onClick={(e) => {
                            showModalDetail(e);
                          }}
                          key={index}
                          id={item.id}
                        >
                          <div
                            id={item.id}
                            style={{
                              fontFamily: `'Noto Sans', 'sans-serif'`,
                              fontWeight: "500",
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "rgba(55, 55, 55, 0.7)",
                            }}
                          >
                            {item.courseTitle} - {item.chapterTitle}
                          </div>
                          <div
                            id={item.id}
                            style={{
                              marginTop: "26px",
                              fontFamily: `'Noto Sans', 'sans-serif'`,
                              fontWeight: "700",
                              fontSize: "28px",
                              fontWeight: "700",
                              color: "#434343",
                            }}
                          >
                            {item.qnaTitle}
                          </div>
                          <div
                            id={item.id}
                            style={{
                              fontFamily: `'Noto Sans', 'sans-serif'`,
                              fontWeight: "500",
                              fontSize: "18px",
                              fontWeight: "500",
                              lineHeight: "159%",
                              color: "rgba(55, 55, 55, 0.7)",
                              marginTop: "11px",
                              width: "1196px",
                              height: "120px",
                            }}
                          >
                            {item.question.replace(
                              /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi,
                              ""
                            )}
                          </div>
                          <div
                            id={item.id}
                            style={{ display: "flex", width: "100%" }}
                          >
                            <div style={{ width: "50%", display: "flex" }}>
                              <div
                                id={item.id}
                                style={{
                                  fontFamily: `'Noto Sans', 'sans-serif'`,
                                  fontWeight: "700",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#373737",
                                }}
                              >
                                {item.memberName}
                              </div>
                              <div
                                id={item.id}
                                style={{
                                  marginLeft: "15px",
                                  fontFamily: `'Noto Sans', 'sans-serif'`,
                                  fontWeight: "700",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#606060",
                                }}
                              >
                                {item.questionDate}
                              </div>
                            </div>
                            <div
                              style={{
                                width: "50%",
                                display: "flex",
                                justifyContent: "flex-end",
                                paddingRight: "25px",
                              }}
                            >
                              <div id={item.id}>
                                <Image preview={false} src={reply}></Image>
                                {item.commentCount}
                                <Image preview={false} src={like}></Image>{" "}
                                {item.likeCount}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  ) : (
                    itemsArray.map((item, index) => (
                      <div
                        style={{
                          width: "1314px",
                          height: "298px",
                          backgroundColor: "#fff",
                          border: "1px solid #A795D6",
                          borderRadius: "25px",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          showModalDetail(e);
                        }}
                        key={index}
                        id={item.id}
                      >
                        <div id={item.id}>
                          {item.courseTitle} - {item.chapterTitle}
                        </div>
                        <div id={item.id}>{item.qnaTitle}</div>
                        <div id={item.id}>
                          {item.question.replace(
                            /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi,
                            ""
                          )}
                        </div>
                        <div id={item.id} style={{ display: "flex" }}>
                          <div id={item.id}>{item.memberName}</div>
                          <div id={item.id}>{item.questionDate}</div>
                        </div>
                        <div id={item.id}>
                          {item.commentCount} - {item.likeCount}
                        </div>
                      </div>
                    ))
                  )}
                  <Modal
                    open={isModalDetailOpen}
                    onOk={handleDetailOk}
                    onCancel={handleDetailCancel}
                    width={1200}
                  >
                    {showQuestionHtml ? (
                      <div>
                        <ReactQuill
                          // modules={null}
                          value={showQuestionHtml}
                          readOnly={true}
                          theme={"bubble"}
                        ></ReactQuill>
                      </div>
                    ) : (
                      <div>
                        <></>
                      </div>
                    )}
                    {previewImage ? (
                      <img
                        className="previewImage"
                        src={previewImage}
                        style={{ maxWidth: "600px" }}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </Modal>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "42px",
                    }}
                  >
                    <Pagination
                      pageSize={10}
                      defaultCurrent={1}
                      total={totalElements}
                      onChange={(page) => paginationHandler(page)}
                    ></Pagination>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
}

export default MyPageOrderHistory;