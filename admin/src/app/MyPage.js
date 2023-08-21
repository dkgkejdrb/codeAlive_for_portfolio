import React, { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import Popup from './Popup';
import Notice from './Notice';
import User from './User';
import Course from './Course';
import OrderBasket from './OrderBasket';
import Dashboard from './Dashboard';
import LearningManagement from './LearningManagement';
import Statics from './Statistics';
import QA from './QA';
import OrderManagement from './OrderManagement';
import Contact from './Contact';
import { useSelector, useDispatch } from 'react-redux';
import MyPageSlice from './MyPageSlice';
import axios from "axios";

import {
  PieChartOutlined,
  LayoutOutlined,
  NotificationOutlined,
  BankOutlined,
  ShopOutlined,
  ShoppingOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme, Image, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const items = [
  getItem("대시보드", "1", <PieChartOutlined />),
  getItem("배너 관리", "sub1", <LayoutOutlined />, [
    getItem("메인 배너", "2"),
    getItem("긴급 팝업", "3"),
  ]),
  getItem("홈페이지", "sub2", <NotificationOutlined />, [
    getItem("공지사항", "4"),
  ]),
  getItem("회원", "5", <UserOutlined />),
  getItem("학습 관리", "sub3", <BankOutlined />, [
    getItem("학습 관리", "6"),
    getItem("학습 통계", "7"),
    getItem("학습 Q&A", "8"),
  ]),
  getItem("상품 관리", "sub4", <ShopOutlined />, [
    getItem("상품 관리", "9"),
    getItem("장바구니", "10"),
  ]),
  getItem("주문 관리", "11", <ShoppingOutlined />),
  getItem("기업 관리", "12", <PhoneOutlined />),
];

const MyPage = () => {
  
// 토큰 가져오기
const TOKEN = useSelector((state) => {
  return state.MyPageSlice.TOKEN;
});

console.log(TOKEN);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();

    // 수정 되어야 함
    const GoHome = () => {
        navigate("/");
    }

    const [ menuBtnKey, setMenuBtnKey ] = useState(1);
    const menuBtnHandler = (e) => {
        setMenuBtnKey(e.key);
    }

    useEffect(()=>{
      // 토큰이 있는지 없는지 체크
      if(!(TOKEN) || TOKEN.length <= 0) {
        alert("로그인 후 이용해주세요.")
        navigate("/");
    }
      

      setMenuBtnKey("1");
    }, []);

    return (
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Image
            src={logo}
            preview={false}
            style={{
              height: 32,
              margin: 16,
            }}
            onClick={GoHome}
          />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={(e) => menuBtnHandler(e)}
          />
        </Sider>
        {/* 사이드메뉴 옆 메인화면, 메뉴버튼 클릭할 때 마다 달라져서 렌더링 */}
        {menuBtnKey === "1" ? (
          <Dashboard />
        ) : menuBtnKey === "2" ? (
          <Banner />
        ) : menuBtnKey === "3" ? (
          <Popup />
        ) : menuBtnKey === "4" ? (
          <Notice />
        ) : 
          menuBtnKey === "5" ? 
          <User />
          :
          menuBtnKey === "6" ?
          <LearningManagement />
          :
          menuBtnKey === "7" ?
          <Statics />
          :
          menuBtnKey === "8" ?
          <QA />
          :
          menuBtnKey === "9" ?
          <Course />
          :
          menuBtnKey === "10" ?
          <OrderBasket />
          :
          menuBtnKey === "11" ?
          <OrderManagement />
          :
          menuBtnKey === "12" &&
          <Contact />
        }
      </Layout>
    );
};
export default MyPage;