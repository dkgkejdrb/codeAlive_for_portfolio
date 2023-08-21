import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MainPage from './app/MainPage';
import Introduction from './app/Introduction';
import PlayPython from './app/PlayPython';
import PlayAi from "./app/PlayAi";

import MyPage from './app/MyPage/MyPage';
import MyPageDashboard from './app/MyPage/MyPageDashboard';
import MyPageDashboard2 from './app/MyPage/MyPageDashboard2';
import MyPageMyClassroom from './app/MyPage/MyPageMyClassroom';
import MyPageQA from './app/MyPage/MyPageQA';
import MyPageOrderBasket from './app/MyPage/MyPageOrderBasket';
import MyPageOrderList from './app/MyPage/MyPageOrderList';
import MyPageLogout from './app/MyPage/MyPageLogout';
import MyPageOrderHistory from './app/MyPage/MyPageOrderHistory';
import Python from './app/Python';
import Features from './app/Features';
import FAQ from './app/FAQ';
import Contact from './app/ContactPage';
import Notice from './app/Notice';
import NoticeDetail from './app/NoticeDetail';
import QA from './app/QA';
import Category from './app/Category';

import "antd/dist/antd.min.css";

function App() {
    
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/mypage" element={<MyPage />} />
      <Route path="/dashboard" element={<MyPageDashboard />} />
      <Route path="/dashboard2" element={<MyPageDashboard2 />} />
      <Route path="/classroom" element={<MyPageMyClassroom />} />
      <Route path="/qa" element={<MyPageQA />}></Route>
      <Route path="/orderbasket" element={<MyPageOrderBasket />}></Route>
      <Route path="/orderhistory" element={<MyPageOrderHistory />}></Route>
      <Route path="/orderlist" element={<MyPageOrderList />}></Route>
      <Route path="/logout" element={<MyPageLogout />}></Route>

      <Route path="/introduction" element={<Introduction />} />

      <Route path="/python" element={<Python />} />
      <Route path="/features" element={<Features />} />

      <Route path="/playpython" element={<PlayPython />} />
      <Route path="/playai" element={<PlayAi />} />

      <Route path="/faq" element={<FAQ />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/noticedetail" element={<NoticeDetail />} />
      <Route path="/qna" element={<QA />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
