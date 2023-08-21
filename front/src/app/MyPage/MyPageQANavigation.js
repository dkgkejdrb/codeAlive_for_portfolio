import { Menu, Layout, Button, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import Header2 from '../Header2.js';
import { useDispatch } from 'react-redux';
import profilePhoto from '../../Assets/profilePhoto.png';
import dashboardLogo from '../../Assets/dashboardLogo.svg';
// import dashboardLogo from '../../Assets/dashboardLogo.png';
import dashboardDarkLogo from '../../Assets/dashboardDarkLogo.svg';
import myClassRoomLogo from '../../Assets/myClassRoomLogo.svg'
import myClassRoomDarkLogo from '../../Assets/myClassRoomDarkLogo.svg'
// import myClassRoomDarkLogo from '../../Assets/myClassRoomDarkLogo.png'
import qaLogo from '../../Assets/qaLogo.svg'
import qaDarkLogo from '../../Assets/qaDarkLogo.svg'
// import qaDarkLogo from '../../Assets/qaDarkLogo.png'
import orderBasketLogo from '../../Assets/orderBasketLogo.svg'
import orderBasketDarkLogo from '../../Assets/orderBasketDarkLogo.svg'
// import orderBasketDarkLogo from '../../Assets/orderBasketDarkLogo.png'
import orderHistoryLogo from '../../Assets/orderHistoryLogo.svg'
import orderHistoryDarkLogo from '../../Assets/orderHistoryDarkLogo.svg'
// import orderHistoryDarkLogo from '../../Assets/orderHistoryDarkLogo.png'
import MyPageDashboardSlice from './MyPageDashboardSlice';
import { useState } from 'react';

const { Sider } = Layout;

const btnStyle = {
border: 'none', width: '88px', height: '25px', fontSize: '14px', fontFamily: `'Noto Sans', 'sans-serif'`, fontWeight: '500', color: '#474353', letterSpacing: '-0.03em' };

// 네비게이션의 구성정보
const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}

const MyPageQANavigation = () => {
    const navigate = useNavigate();

    const items = [
        getItem('대시보드', 'dashboard', <Image width={36} src={dashboardDarkLogo} preview={false}/>),
        getItem('내 강의실', 'myClassRoom', <Image width={36} src={myClassRoomDarkLogo} preview={false}/>),
        getItem('학습 Q&A', 'qa', <Image width={36} src={qaLogo} preview={false}/>),
        getItem('장바구니', 'orderBasket', <Image width={36} src={orderBasketDarkLogo} preview={false}/>),
        getItem('결제내역', 'orderHistory', <Image width={36} src={orderHistoryDarkLogo} preview={false}/>),
    ];

    return (<>
        <Header2 />
        <Sider>
        <div 
            className='MyPageNavigationWrap'
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',

                backgroundColor: '#fff',
                width: '343px',
                height: '665px',
                boxShadow: '0px 1px 14px rgba(56, 102, 159, 0.23)',
                borderRadius: '25px'
            }}>
            <div
                className='MyPageNavigationWrapProfile'
                style={{
                    width: '343px',
                    height: '178px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px',
                    backgroundColor: '#F6F6F7'
                }}>
                <div
                    className='PhotoWrap'
                    style={{
                        width: '100%',
                        height: '56px',
                        marginTop: '33px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    >
                        <div
                            className='Photo'
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundImage: `url(${profilePhoto})`,
                                backgroundSize: 'cover',
                                position: 'relative',
                                zIndex: '3'
                            }}>

                        </div>
                        <div
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(200, 200, 200, 0.69)',
                                position: 'absolute',
                                left: '150px',
                                top: '38px',
                                zIndex: '0'
                            }}>
                        </div>
                </div>
                <div
                    className='Name'
                    style={{
                        width: '100%',
                        height: '35px',
                        marginTop: '5px',
                        fontFamily: 'thisHow',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '21.2px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#474353',
                    }}>
                        안녕하세요, 
                        <span style={{color: '#6B98FF', marginLeft: '5px'}}> 홍길동</span>
                        님
                </div>
                <div
                    className='buttonsWrap'
                    style={{
                        width: '100%',
                        height: '25px',
                        display: 'flex'
                    }}
                >
                    <div
                        className='buttonLeftWrap'
                        style={{
                            width: '50%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}    
                    >
                        <Button ghost style={btnStyle}>정보 수정</Button>
                    </div>
                    <div
                        className='borderMiddleWrap'
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        >
                            <div
                                className='borderMiddle'
                                style={{
                                    marginTop: '3px',
                                    height: '12px',
                                    borderRight: '1px solid #474353'
                                }}
                                >
                            </div>
                    </div>
                    <div
                        className='buttonRightWrap'
                        style={{
                            width: '50%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start'
                        }}    
                    >
                        <Button ghost style={btnStyle}>자녀 추가</Button>
                    </div>
                </div>
            </div>
            <Menu
                className="MyPageNavigation"
                theme="light"
                mode="inline"
                defaultSelectedKeys={['qa']}
                items={items}
                style={{width:'219px', height: '69px', background: 'transparent', marginTop: '42px'}}
                onSelect={(e)=>{
                    // 버튼 클릭 시, 메뉴 버튼의 좌측 로고 변경
                    if(e.key === 'dashboard') {
                        navigate("/dashboard");
                    }
                    if(e.key === 'myClassRoom') {
                        navigate("/classroom");
                    }
                    if(e.key === 'qa') {
                        navigate("/qa");
                    }
                    if(e.key === 'orderBasket') {
                        navigate("/orderbasket");
                    }
                    if(e.key === 'orderHistory') {
                        navigate("/orderHistory");
                    }
                }}>
            </Menu>
        </div>
    </Sider>
    </>
    );
}

export default MyPageQANavigation;