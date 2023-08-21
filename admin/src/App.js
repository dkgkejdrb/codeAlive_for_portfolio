import React from 'react';
import Login from './app/Login';
import Redirect from './app/Redirect';
import MyPage from './app/MyPage';
import ChangePW from './app/ChangePW';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/changepw" element={<ChangePW />} />

      <Route path="/mypage" element={ <MyPage />} />

      <Route path="/redirect" element={<Redirect />} />
    </Routes>
  );
}

export default App;
