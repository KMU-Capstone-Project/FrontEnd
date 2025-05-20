// src/pages/myPage/myPage_profile.js
import React from 'react';
import '../../css/myPage/myPage_profile.css';

function MyPageProfile() {
  return (
    <div className="profile-box">
      <div className="profile-header">
        <h2>자라나는 새싹님</h2>
        <p>내 소개를 작성하고 신뢰도를 높여 보세요.</p>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <span>안전거래</span>
          <strong>0</strong>
        </div>
        <div className="stat">
          <span>거래후기</span>
          <strong>0</strong>
        </div>
        <div className="stat">
          <span>단골</span>
          <strong>0</strong>
        </div>
      </div>
    </div>
  );
}

export default MyPageProfile;