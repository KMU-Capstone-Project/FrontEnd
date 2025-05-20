// src/pages/login/login.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ 추가
import '../../css/login.css';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const navigate = useNavigate(); // ✅ 추가

  const handleLogin = () => {
    if (!id.trim() || !pw.trim()) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    setError('');
    localStorage.setItem('loggedIn', 'true');
    alert('로그인 성공!');
    navigate('/mainpage'); // ✅ 수정된 경로
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    }

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <div className="login-container">
      <h1
        className="spotlight-logo"
        onClick={() => navigate('/mainpage')} // ✅ 수정된 경로
        style={{ cursor: 'pointer' }}
      >
        <span className="black">SPOT</span>
        <span className="light animated">LIGHT</span>
      </h1>

      <div className="login-box">
        <div className="input-wrap">
          <input
            type="text"
            placeholder="SPOTLIGHT 아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="input-wrap password-line">
          <input
            type={showPw ? 'text' : 'password'}
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPw(!showPw)}
          >
            {showPw ? '숨기기' : '보기'}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="remember-wrap">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">간편로그인 정보 저장</label>
          <div className="tooltip-wrapper" ref={tooltipRef}>
            <button
              type="button"
              className="tooltip-icon"
              onClick={() => setShowTooltip(!showTooltip)}
            >
              ⓘ
            </button>
            {showTooltip && (
              <div className="tooltip-box">
                로그인한 계정의 정보가 저장됩니다. 개인정보 보호를 위해<br />
                개인 기기에서만 사용해 주세요.<br />
                <a href="" className="tooltip-link" target="_blank" rel="noopener noreferrer">
                  도움말 보기
                </a>
              </div>
            )}
          </div>
        </div>
        <button className="btn login-btn shine-button" onClick={handleLogin}>
          로그인
        </button>
        <div className="login-links-row">
          <a href="/signup" className="left-link">회원가입</a>
          <div className="right-links single-line">
            <a href="/find-account">아이디 찾기</a>
            <span className="divider-line" />
            <a href="/find-password">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;