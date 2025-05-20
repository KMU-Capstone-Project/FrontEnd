// src/pages/login/findPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css';

function FindPassword() {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');
  const maxLength = 30;
  const navigate = useNavigate();

  const handleFindPassword = () => {
    if (!name.trim() || !userId.trim() || !phone.trim()) {
      alert('이름, 아이디, 전화번호를 모두 입력해주세요.');
      return;
    }
    alert('비밀번호 찾기 기능은 아직 구현되지 않았습니다.');
  };

  return (
    <div className="login-container">
      <h1
        className="spotlight-logo"
        onClick={() => navigate('/mainpage')}
        style={{ cursor: 'pointer' }}
      >
        <span className="black">SPOT</span>
        <span className="light animated">LIGHT</span>
      </h1>

      <div className="account-box">
        <h2 className="account-title">
          이름, 아이디, 전화번호로<br />
          비밀번호를 찾습니다.
        </h2>
        <p className="account-desc">
          SPOTLIGHT에 등록한 정보를 입력해주세요.
        </p>

        <div className="form-group">
          <label className="form-label">등록한 이름</label>
          <div className="input-with-counter">
            <input
              type="text"
              placeholder="등록한 이름 입력"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, maxLength))}
            />
            <span className="char-count">{name.length} / {maxLength}</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">등록한 아이디</label>
          <input
            type="text"
            placeholder="아이디 입력"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{
              width: '100%',
              fontSize: '16px',
              padding: '10px 0',
              border: 'none',
              borderBottom: '2px solid #eee',
              outline: 'none'
            }}
          />
        </div>

        <div className="form-group">
          <label className="form-label">전화번호</label>
          <div className="phone-input-wrap">
            <select disabled className="country-code">
              <option value="+82">+82</option>
            </select>
            <input
              type="tel"
              placeholder="전화번호 입력"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <button className="btn gray-btn" onClick={handleFindPassword}>
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
}

export default FindPassword;