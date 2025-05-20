// src/pages/reviewPage/reviewPage.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MyPageHeader from '../component/myPage_header';
import MyPageCategory from '../component/myPage_category';
import MyPageMenu from '../component/myPage_menu';
import ReviewPageReview from './reviewPage_review'; // ✅ 라우팅 대상 컴포넌트

import '../../css/myPage/myPage.css'; // ✅ 공통 레이아웃 스타일
import '../../css/reviewPage/reviewPage.css'; // ✅ 리뷰 전용 스타일

function ReviewPage() {
  return (
    <div>
      <MyPageHeader />
      <MyPageCategory />

      <div className="mypage-body">
        <div className="menu-wrapper">
          <MyPageMenu />
        </div>
        <div className="right-section-wrapper">
          {/* ✅ 라우팅 처리된 본문 영역 */}
          <Routes>
            <Route path="/" element={<Navigate to="review" replace />} />
            <Route path="review" element={<ReviewPageReview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;