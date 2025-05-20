// src/pages/myPage/myPage_menu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/myPage/myPage_menu.css';

function MyPageMenu() {
  const navigate = useNavigate();

  return (
    <div className="mypage-menu">
      <h2 className="menu-title">마이 페이지</h2>

      <div className="menu-section">
        <h3 className="section-title">거래 정보</h3>
        <ul>
          <li onClick={() => navigate('/sellpage')}>대여 내역</li>
          <li>택배</li>
          <li>찜한 상품</li>
        </ul>
      </div>

      <hr className="section-divider" />

      <div className="menu-section">
        <h3 className="section-title">내 정보</h3>
        <ul>
          <li>계좌 관리</li>
          <li>배송지 관리</li>

          {/* ✅ 요거 고쳤습니다! */}
          <li onClick={() => navigate('/reviews/review')}>거래 후기</li>

          <li>탈퇴하기</li>
        </ul>
      </div>
    </div>
  );
}

export default MyPageMenu;
