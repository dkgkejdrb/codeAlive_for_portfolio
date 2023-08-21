import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import headerSlice from './headerSlice';
import { Button, Menu } from 'antd';
import "../index.css"


const Header2 = () => {
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
            // if (window.scrollY >= 950) {
            //     dispatch(headerSlice.actions.setPositionY('translateY(-100px)'));
            // }
        }
        if (wheelDelta() === 'up') {
            dispatch(headerSlice.actions.setPositionY('translateY(0px)'));
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
        <div className="header2" id="header"
            style={{
                backgroundColor: '#fff',
                transform: positionY,
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
                height: "86px",
                zIndex: "10",
                transition: '0.15s ease-in-out',
                borderBottom: '1px solid #C8D9FF'
            }}>
            <div className="top"
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%"
                }}>
                <div className="left"
                    style={{
                        width: '10%',
                        marginLeft: '231px'
                    }}>
                    <Link to="/">
                    <div className="logo"
                        style={{ 
                            backgroundImage: logoDark,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '202px',
                            height: '43.94px',
                        }}
                    >
                    </div>
                    </Link>
                </div>
                <div className="middle"
                    style={{
                        width: '70%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // marginLeft: '194px'
                    }}>
                    <Menu mode="horizontal" 
                        items={items} 
                        style={{
                            border: 'none', fontSize: '17px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '700',
                            backgroundColor: 'transparent', color: '#202020', width: '700px'
                        }}
                        multiple={false}
                        onClick={ 
                            (e)  => goToPage(e)
                        }>
                    </Menu>
                </div>
                <div className='right'
                    style={{
                        width: '20%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginRight: '140px'
                    }}>
                    <div className='AuthWrap'>
                        {/* <Button ghost style={btnStyle} onClick={(e) => {navigate('./dashboard')}}>로그인</Button>
                        <Button ghost style={btnStyle2}>회원가입</Button> */}
                        <Link to="/dashboard">
                            <Button ghost style={btnStyle}>로그인</Button>
                        </Link>
                        <Button ghost style={btnStyle2}>회원가입</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header2;