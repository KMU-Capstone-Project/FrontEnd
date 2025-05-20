// src/pages/login/findAccount.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import '../../css/login.css';

function FindAccount() {
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const maxLength = 30;
  const navigate = useNavigate(); // ✅ 추가

  const handleFindAccount = () => {
    if (!nickname.trim() || !phone.trim()) {
      alert('이름과 전화번호를 모두 입력해주세요.');
      return;
    }
    alert('계정을 찾는 기능은 아직 구현되지 않았습니다.');
  };

  return (
    <div className="login-container">
      <h1
        className="spotlight-logo"
        onClick={() => navigate('/mainpage')} // ✅ 메인페이지 이동
        style={{ cursor: 'pointer' }}
      >
        <span className="black">SPOT</span>
        <span className="light animated">LIGHT</span>
      </h1>

      <div className="account-box">
        <h2 className="account-title">
          이름과 전화번호로<br />
        아이디를 찾습니다.
        </h2>
        <p className="account-desc">
          SPOTLIGHT 서비스에 등록한 이름과,<br />
          전화번호를 입력해 주세요.
        </p>

        <div className="form-group">
          <label className="form-label">
            등록한 이름
          </label>
          <div className="input-with-counter">
            <input
              type="text"
              placeholder="등록한 이름 입력"
              value={nickname}
              onChange={(e) => setNickname(e.target.value.slice(0, maxLength))}
            />
            <span className="char-count">{nickname.length} / {maxLength}</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">전화번호</label>
          <div className="phone-input-wrap">
            <select disabled className="country-code">
              <option value="+82">+82</option>
            </select>
            <input
              type="tel"
              placeholder="전화번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <button className="btn gray-btn" onClick={handleFindAccount}>
          SPOTLIGHT 아이디 찾기
        </button>
      </div>
    </div>
  );
}

export default FindAccount;