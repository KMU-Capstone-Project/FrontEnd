// src/pages/login/signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css';

function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [pwMismatch, setPwMismatch] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !userId || !password || !confirmPw) {
      setError('모든 항목을 입력해주세요.');
      return;
    }

    if (!isIdChecked) {
      setError('아이디 중복 확인을 해주세요.');
      return;
    }

    if (password !== confirmPw) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!agreement) {
      setError('약관에 동의해주세요.');
      return;
    }

    setError('');
    alert(`회원가입 완료! 🎉\n이름: ${name}, 아이디: ${userId}`);
    navigate('/login'); // ✅ 회원가입 후 로그인 페이지로 이동
  };

  const handleCheckId = () => {
    if (!userId.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }
    alert(`아이디 "${userId}"는 사용 가능합니다.`);
    setIsIdChecked(true);
  };

  const handlePhoneVerify = () => {
    if (!phone.trim()) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }
    alert('인증번호가 발송되었습니다! (실제 동작은 구현 필요)');
  };

  const handleConfirmPw = (value) => {
    setConfirmPw(value);
    setPwMismatch(password && value && password !== value);
  };

  return (
    <div className="login-container">
      <h1
        className="spotlight-logo"
        onClick={() => navigate('/mainpage')} // ✅ 로고 클릭 시 메인페이지 이동
        style={{ cursor: 'pointer' }}
      >
        <span className="black">SPOT</span>
        <span className="light animated">LIGHT</span>
      </h1>

      <form className="signup-box" onSubmit={handleSubmit}>
        <h2>가입을 시작합니다!</h2>

        <div className="form-section">
          <h3 className="form-title">회원 정보</h3>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-wrap phone-check">
            <input
              type="tel"
              placeholder="휴대폰 번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="button" className="check-btn" onClick={handlePhoneVerify}>
              인증 요청
            </button>
          </div>
        </div>

        <div className="form-section">
          <h3 className="form-title">계정</h3>
          <div className="input-wrap id-check">
            <input
              type="text"
              placeholder="아이디 입력"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                setIsIdChecked(false);
              }}
            />
            <button type="button" className="check-btn" onClick={handleCheckId}>
              중복 확인
            </button>
          </div>
          <div className="input-wrap">
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-wrap">
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPw}
              onChange={(e) => handleConfirmPw(e.target.value)}
            />
          </div>
          {pwMismatch && (
            <div className="error-message">비밀번호가 일치하지 않습니다.</div>
          )}
        </div>

        <div className="terms">
          <input
            type="checkbox"
            id="agree"
            checked={agreement}
            onChange={(e) => setAgreement(e.target.checked)}
          />
          <label htmlFor="agree">이용 약관에 동의합니다.</label>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="btn login-btn shine-button">
          회원가입 완료
        </button>
      </form>
    </div>
  );
}

export default Signup;