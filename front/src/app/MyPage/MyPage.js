import { useSelector } from 'react-redux';
import React from 'react';
import { Layout } from 'antd';
import MyPageNavigation from './MyPageNavigation.js';
import MyPageDashboard from './MyPageDashboard';
import MyPageMyClassroom from './MyPageMyClassroom';
import MyPageQA from './MyPageQA';
import MyPageOrderBasket from './MyPageOrderBasket';
import MyPageOrderHistory from './MyPageOrderHistory';


const { Header, Content } = Layout;

// 좌측 네비게이션 바의 구성정보
const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}

// 오른쪽 영역에 보여줄 정보
const ShowMyPage = () => {
    // isFirst 마이페이지에 첫 진입했는지 체크 
    // 스토어(MyPageDashboardSlice)에서 isFirst 받아오기
    const isFirst = useSelector( state => { return state.MyPageDashboardSlice.isFirst });

    // (★중요)내비게이션 클릭 시, key 정보는 <MyPageNavigation>에서 관리
    // 스토어(MyPageDashboardSlice)에서 Navigation 키 받아오기
    const key = useSelector( state => { return state.MyPageDashboardSlice.key });

    if(isFirst || key === 'dashboard') {
        return(
            <MyPageDashboard />
        );
    } if(key === 'myClassRoom') {
        return(
            <MyPageMyClassroom />
        )
    } if(key === 'qa') {
        return(
            <MyPageQA />
        )
    } if(key === 'orderBasket') {
        return(
            <MyPageOrderBasket />
        )
    } if(key === 'orderHistory') {
        return(
            <MyPageOrderHistory />
        )
    }
}

// 메인 렌더링
const MyPage = () => {
    
    return (
    <Layout
        className="myPage">
        <Header
            className="site-layout-sub-header-background"
            style={{
                padding: 1,
            }}
        ></Header>

        {/* ★★★★★★왼쪽 영역(내비게이션)★★★★★★ */}
        <MyPageNavigation />
      

        {/* ★★★★★★오른쪽 영역(대시보드, 내 강의실, 학습 Q&A, 장바구니, 결제내역)★★★★★★ */}
        <Layout
                style={{
                    backgroundColor: '#FBFAFF'
                }}
        >
            <Content>
                <ShowMyPage />
            </Content>
        </Layout>
    </Layout>
    );
}



export default MyPage;