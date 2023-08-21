// 헤더 3는 헤더와 마감임박 띠 배너가 결합된 형태
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import headerSlice from './headerSlice';
import { Button, Menu, Image } from 'antd';
import categoryButtonDialogue2 from "../Assets/categoryButtonDialogue2.svg";
import lineThrough from "../Assets/lineThrough.svg";
import "../index.css"


const Header3 = () => {
    // headerSlice의 reducers 가져오기
    const dispatch = useDispatch();

    // headerSlice의 initialState 가져오기 
    const backColor = useSelector( state => {
        return state.headerSlice.backColor;
    });

    const logo = useSelector( state => {
        return state.headerSlice.logo;
    });

    const logoDark = useSelector( state => {
        return state.headerSlice.logoDark;
    });

    const positionY = useSelector( state => {
        return state.headerSlice.positionY;
    })

    const fontColor = useSelector( state => {
        return state.headerSlice.fontColor;
    })

    // 기간한정 할인 마감 배너
    const [ isOn, setIsOn ] = useState("flex");

    useEffect(() => {
        window.addEventListener('scroll', changeHeader, { capture: true });
    }, []);

    // 버튼(로그인) 공통 스타일
    const btnStyle = {
        border: 'none', width: '103px', fontSize: '17px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', color: '#202020'
    }

    // 버튼(회원가입) 공통 스타일
    const btnStyle2 = {
        marginLeft: '9px', border: 'none', width: '107px', fontSize: '17px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700', color: '#202020'
    }

    // 스크롤 작동 중 내리거나 올리는 중인지 체크
    let prevScrollTop = 0;
    let nowScrollTop = 0;

    let wheelDelta = () => {
        return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
    }

    const changeHeader = () => {
        nowScrollTop = window.scrollY;
        if (wheelDelta() === 'down') {
            dispatch(headerSlice.actions.setPositionY('translateY(-100px)'));
            setIsOn("none");
            // if (window.scrollY >= 950) {
            //     dispatch(headerSlice.actions.setPositionY('translateY(-100px)'));
            // }
        }
        if (wheelDelta() === 'up') {
            dispatch(headerSlice.actions.setPositionY('translateY(0px)'));
            setIsOn("flex");
        }
        prevScrollTop = nowScrollTop;

        // if (window.scrollY <= 0) {
        //     dispatch(headerSlice.actions.setLogo(logo));
        //     dispatch(headerSlice.actions.setBackColor(''));
        //     dispatch(headerSlice.actions.setFontColor('#FFFFFF'));
        // }

        // else {
        //     dispatch(headerSlice.actions.setLogo(logoDark));
        //     dispatch(headerSlice.actions.setBackColor('#FFF'));
        //     dispatch(headerSlice.actions.setFontColor('#454545'));
        // }
    }

    // antd menu items 항목
    const items = [
        { label: '소개',  key: 'introduction', link: '/introduction' },
        { 
            label: '코드얼라이브', 
            key: 'about',
            children: [
                { label: '파이썬', key: 'python'},
                { label: '특징', key: 'features'},
            ]
        },
        { 
            label: '카테고리', 
            key: 'category',
            children: [
                { label: '플레이 파이썬', key: 'playPython'},
                { label: '플레이 AI', key: 'playAI'}
            ]
        },
        { 
            label: '고객센터', 
            key: 'contact',
            children: [
                { label: '자주 묻는 질문', key: 'FAQ'},
                { label: '학습 Q&A', key: 'Q&A'},
                { label: '공지사항', key: 'notice'},
            ]
        },
        { label: '기업교육',  key: 'incLesson'},
    ];

    // antd menu items 클릭하여 이동
    // navigate() 활용 참고
    const navigate = useNavigate();
    const goToPage = (e) => {
        if(e.key === 'introduction') {
            navigate("/introduction");
        }
        if(e.key === 'python') {
            navigate("/python");
        }
        if(e.key === 'features') {
            navigate("/features");
        }
        if (e.key === "playPython") {
          navigate("/playpython");
        }
        if(e.key === 'playAI') {
            navigate("/playAi");
        }
        if(e.key === 'FAQ') {
            navigate("/faq");
        }
        if(e.key === 'incLesson') {
            navigate("/contact");
        }
        if(e.key === 'notice') {
            navigate("/notice");
        }
        if(e.key === 'Q&A') {
            navigate("/qna");
        }
    }


    return (
      <>
        <div
          className="header2"
          id="header"
          style={{
            backgroundColor: "#fff",
            transform: positionY,
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "86px",
            zIndex: "10",
            transition: "0.15s ease-in-out",
            borderBottom: "1px solid #C8D9FF",
          }}
        >
          <div
            className="top"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              className="left"
              style={{
                width: "10%",
                marginLeft: "231px",
              }}
            >
              <Link to="/">
                <div
                  className="logo"
                  style={{
                    backgroundImage: logoDark,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "202px",
                    height: "43.94px",
                  }}
                ></div>
              </Link>
            </div>
            <div
              className="middle"
              style={{
                width: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: '194px'
              }}
            >
              <Menu
                mode="horizontal"
                items={items}
                style={{
                  border: "none",
                  fontSize: "17px",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  backgroundColor: "transparent",
                  color: "#202020",
                  width: "700px",
                }}
                multiple={false}
                onClick={(e) => goToPage(e)}
              ></Menu>
            </div>
            <div
              className="right"
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "140px",
              }}
            >
              <div className="AuthWrap">
                {/* <Button ghost style={btnStyle} onClick={(e) => {navigate('./dashboard')}}>로그인</Button>
                        <Button ghost style={btnStyle2}>회원가입</Button> */}
                <Link to="/dashboard">
                  <Button ghost style={btnStyle}>
                    로그인
                  </Button>
                </Link>
                <Button ghost style={btnStyle2}>
                  회원가입
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* 할인 마감임박 띠배너 */}
        <div
          style={{
            position: "fixed",
            width: "968px",
            height: "94px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 15px #4195FF",
            borderRadius: "14px",
            zIndex: "2",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "5%",
            display: isOn,
            alignItems: "center",
          }}
        >
          {/* 할인 마감임박 띠배너 왼쪽 */}
          <div
            className="left"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div>
              <div style={{ marginTop: "22px" }}>
                <span
                  style={{
                    color: "#242424",
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "400",
                    fontSize: "16px",
                    marginLeft: "60px",
                  }}
                >
                  슈퍼얼리버드 할인 마감까지
                </span>
                <span
                  style={{
                    color: "#6B98FF",
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "600",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >1일 22:56:50</span>

                <span
                  style={{
                    color: "#242424",
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "400",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  남았습니다.
                </span>
              </div>
            </div>
            <div className="dialogue">
              <Image
                preview={false}
                width={98}
                src={categoryButtonDialogue2}
                style={{ position: "absolute", left: "265px", bottom: "42px" }}
              ></Image>
            </div>
          </div>
          {/* 할인 마감임박 띠배너 오른쪽 */}
          <div
            className="right"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              className="discountPrice&originalPrice"
              style={{
                height: "98px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "#4A4A4A",
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "400",
                      fontSize: "18px",
                      marginLeft: "37px",
                      marginTop: "5px"
                    }}
                  >
                    59,000원
                  </span>
                  <span
                    style={{
                      color: "#4A4A4A",
                      fontFamily: `'Noto Sans', 'sans-serif'`,
                      fontWeight: "800",
                      fontSize: "27px",
                      letterSpacing: "-0.03em",
                      marginLeft: "20px"
                    }}
                  >
                    53,100
                    <span
                      style={{
                        fontFamily: `'Noto Sans', 'sans-serif'`,
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      원
                    </span>
                  </span>
                </div>
                {/* 원가에 그어질 중간 밑줄 */}
                <Image
                  width={84}
                  src={lineThrough}
                  style={{ position: "absolute", left: "32px", bottom: "17px" }}
                ></Image>
              </div>
            </div>
            {/* 퍼세트 표시 */}
            <div>
              <div
                className="percentageCircle"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #6B98FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "7px"
                }}
              >
                <span
                  style={{
                    color: "#6B98FF",
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "600",
                    fontSize: "24px",
                    letterSpacing: "-0.065em",
                    color: "#6B98FF",
                  }}
                >10</span>
                <span
                  style={{
                    color: "#6B98FF",
                    fontFamily: `'Noto Sans', 'sans-serif'`,
                    fontWeight: "600",
                    fontSize: "15px",
                    letterSpacing: "-0.04em",
                    marginTop: "15px",
                    color: "#6B98FF",
                  }}
                >
                  %
                </span>
              </div>
            </div>
            {/* 수강신청하기 버튼 */}
            <div
              style={{
                width: "183px",
                height: "52px",
                borderRadius: "14px",
                backgroundColor: "#6B98FF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "17px"
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: `'Noto Sans', 'sans-serif'`,
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                수강신청하기
              </span>
            </div>
          </div>
        </div>
      </>
    );
}

export default Header3;