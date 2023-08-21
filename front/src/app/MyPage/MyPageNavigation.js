import { Menu, Layout, Button, Image } from 'antd';
import { useNavigate } from 'react-router-dom';
import Header2 from '../Header2.js';
import { useDispatch } from 'react-redux';
import profilePhoto from '../../Assets/profilePhoto.png';
import dashboardLogo from '../../Assets/dashboardLogo.svg';
import dashboardDarkLogo from '../../Assets/dashboardDarkLogo.svg';
import myClassRoomLogo from '../../Assets/myClassRoomLogo.svg'
import myClassRoomDarkLogo from '../../Assets/myClassRoomDarkLogo.svg'
import qaLogo from '../../Assets/qaLogo.svg'
import qaDarkLogo from '../../Assets/qaDarkLogo.svg'
import orderBasketLogo from '../../Assets/orderBasketLogo.svg'
import orderBasketDarkLogo from '../../Assets/orderBasketDarkLogo.svg'
import orderHistoryLogo from '../../Assets/orderHistoryLogo.svg'
import orderHistoryDarkLogo from '../../Assets/orderHistoryDarkLogo.svg'
import MyPageDashboardSlice from './MyPageDashboardSlice';
import { useState } from 'react';

const { Sider } = Layout;

const btnStyle = {
border: 'none', width: '88px', height: '25px', fontSize: '14px', fontFamily: 'thisHow', fontWeight: '700', color: '#202020' };

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

const MyPageNavigation = () => {
    // 네비게이션의 메뉴 클릭시, 키 전달
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [navigationDashboardLogo, setNavigationDashboardLogo] = useState(dashboardLogo);
    const [navigationMyClassRoomLogo, setNavigationMyClassRoomLogo] = useState(myClassRoomDarkLogo);
    const [navigationQALogo, setNavigationQALogo] = useState(qaDarkLogo);
    const [navigationOrderBasketLogo, setNavigationOrderBasketLogo] = useState(orderBasketDarkLogo);
    const [navigationOrderHistoryLogo, setNavigationOrderHistoryLogo] = useState(orderHistoryDarkLogo);

    const items = [
        getItem('대시보드', 'dashboard', <Image width={32} src={navigationDashboardLogo} preview={false}/>),
        getItem('내 강의실', 'myClassRoom', <Image width={32} src={navigationMyClassRoomLogo} preview={false}/>),
        getItem('학습 Q&A', 'qa', <Image width={32} src={navigationQALogo} preview={false}/>),
        getItem('장바구니', 'orderBasket', <Image width={32} src={navigationOrderBasketLogo} preview={false}/>),
        getItem('결제내역', 'orderHistory', <Image width={32} src={navigationOrderHistoryLogo} preview={false}/>),
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
                border: '1px solid #A795D6',
                boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.01)',
                borderRadius: '25px'
            }}>
            <div
                className='MyPageNavigationWrapProfile'
                style={{
                    width: '343px',
                    height: '154px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px',
                    borderBottom: '2px dashed #D0D0D0'
                }}>
                <div
                    className='PhotoWrap'
                    style={{
                        width: '100%',
                        height: '56px',
                        marginTop: '17px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    >
                        <div
                            className='Photo'
                            style={{
                                width: '57px',
                                height: '57px',
                                borderRadius: '50%',
                                backgroundImage: `url(${profilePhoto})`,
                                backgroundSize: 'cover',
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
                        fontSize: '20px',
                        lineHeight: '21.2px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        안녕하세요, 
                        <span style={{color: '#6B3EFE', marginLeft: '5px'}}> 홍길동</span>
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
                defaultSelectedKeys={['dashboard']}
                items={items}
                style={{width:'201px', background: 'transparent', marginTop: '54px'}}
                onSelect={(e)=>{
                    console.log(e.key);
                    // (★중요)내비게이션 클릭 시, key 정보를 스토어(MyPageDashboardSlice)로 저장
                    dispatch(MyPageDashboardSlice.actions.setMyPageNavigationKey(e.key));
                    dispatch(MyPageDashboardSlice.actions.setIsFirst(false));
                    
                    // 버튼 클릭 시, 메뉴 버튼의 좌측 로고 변경
                    if(e.key === 'dashboard') {
                        setNavigationDashboardLogo(dashboardLogo);
                        setNavigationMyClassRoomLogo(myClassRoomDarkLogo);
                        setNavigationQALogo(qaDarkLogo);
                        setNavigationOrderBasketLogo(orderBasketDarkLogo);
                        setNavigationOrderHistoryLogo(orderHistoryDarkLogo);
                        navigate("/dashboard");
                    }
                    if(e.key === 'myClassRoom') {
                        setNavigationDashboardLogo(dashboardDarkLogo);
                        setNavigationMyClassRoomLogo(myClassRoomLogo);
                        setNavigationQALogo(qaDarkLogo);
                        setNavigationOrderBasketLogo(orderBasketDarkLogo);
                        setNavigationOrderHistoryLogo(orderHistoryDarkLogo);
                        navigate("/classroom");
                    }
                    if(e.key === 'qa') {
                        setNavigationDashboardLogo(dashboardDarkLogo);
                        setNavigationMyClassRoomLogo(myClassRoomDarkLogo);
                        setNavigationQALogo(qaLogo);
                        setNavigationOrderBasketLogo(orderBasketDarkLogo);
                        setNavigationOrderHistoryLogo(orderHistoryDarkLogo);
                        navigate("/qa");
                    }
                    if(e.key === 'orderBasket') {
                        setNavigationDashboardLogo(dashboardDarkLogo);
                        setNavigationMyClassRoomLogo(myClassRoomDarkLogo);
                        setNavigationQALogo(qaDarkLogo);
                        setNavigationOrderBasketLogo(orderBasketLogo);
                        setNavigationOrderHistoryLogo(orderHistoryDarkLogo);
                        // navigate("/orderBasket");
                    }
                    if(e.key === 'orderHistory') {
                        setNavigationDashboardLogo(dashboardDarkLogo);
                        setNavigationMyClassRoomLogo(myClassRoomDarkLogo);
                        setNavigationQALogo(qaDarkLogo);
                        setNavigationOrderBasketLogo(orderBasketDarkLogo);
                        setNavigationOrderHistoryLogo(orderHistoryLogo);
                        // navigate("/orderHistory");
                    }
                }}>
            </Menu>
        </div>
    </Sider>
    </>
    );
}

export default MyPageNavigation;