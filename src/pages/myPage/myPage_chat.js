// src/pages/myPage/myPage_chat.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import '../../css/myPage/myPage_chat.css';

function MyPageChat() {
  const navigate = useNavigate(); // ✅ 추가

  return (
    <div className="chat-card-wrapper">
      <div className="chat-top-bar">
        <div className="rental-info">
          <span className="label">대여횟수</span>
          <span className="value">40</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '4%' }}></div>
          </div>
        </div>
        <div className="user-icon">👤</div>
      </div>

      <div className="chat-main-content">
        <div className="chat-icon">💬</div>
        <div className="chat-text">
          <div className="chat-title">'김현수'님과 이어서 채팅하기</div>
        </div>

        <div className="nav-item" onClick={() => navigate('/chat')} style={{ cursor: 'pointer' }}>
          <button className="chat-button">채팅하기</button>
        </div>
      </div>
    </div>
  );
}

export default MyPageChat;