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
import SellListPage from './pages/sellList/sellList'; // ✅ 판매내역 페이지 import
import SizeGuide from './pages/sizeGuide/sizeGuide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/reviews/*" element={<ReviewPage />} />
        <Route path="/sellpage/*" element={<SellListPage />} />
        <Route path="/size-guide" element={<SizeGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
