// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 import
import Login from './pages/login/login';
import Signup from './pages/login/signup';
import FindAccount from './pages/login/findAccount';
import FindPassword from './pages/login/findPassword';
import MyPage from './pages/myPage/myPage';
import MainPage from './pages/mainPage/mainPage';
import ChatPage from './pages/chatPage/chatPage';
import ReviewPage from './pages/reviewPage/reviewPage'; // ✅ 리뷰 페이지 import
import SellListPage from './pages/sellList/sellList'; // ✅ 판매내역 페이지 import 추가

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로 → 메인페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* 개별 경로들 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/reviews/*" element={<ReviewPage />} />
        <Route path="/sellpage/*" element={<SellListPage />} /> {/* ✅ 판매내역 라우팅 */}
      </Routes>
    </Router>
  );
}

export default App;
