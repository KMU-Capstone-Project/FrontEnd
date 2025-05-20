// src/pages/sellList/sellList.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyPageHeader from '../component/myPage_header';
import MyPageCategory from '../component/myPage_category';
import MyPageMenu from '../component/myPage_menu';
import SellListContent from './sellList_content'; // ✅ 실제 내용 분리

import '../../css/myPage/myPage.css';

function SellListPage() {
  return (
    <div>
      <MyPageHeader />
      <MyPageCategory />

      <div className="mypage-body">
        <div className="menu-wrapper">
          <MyPageMenu />
        </div>
        <div className="right-section-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="sell" replace />} />
            <Route path="sell" element={<SellListContent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default SellListPage;
