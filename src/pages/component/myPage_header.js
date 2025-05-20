import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/myPage/myPage_header.css';

function MainPageHeader() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem('loggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate('/');
  };

  const handleMyPage = () => {
    setShowDropdown(false);
    navigate('/mypage');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="mypage-wrapper">
      <div className="mypage-header">
        <div
          className="logo"
          onClick={() => navigate('/mainpage')} // ✅ 메인페이지 이동
          style={{ cursor: 'pointer' }}
        >
          <span className="black">SPOT</span>
          <span className="light animated">LIGHT</span>
        </div>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="찾고 싶은 상품을 입력해보세요." />
        </div>

        <div className="nav-links">
          <div className="nav-item" onClick={() => navigate('/chat')} style={{ cursor: 'pointer' }}>
            💬 채팅하기
          </div>
          <span className="divider-line" />
          <div className="nav-item">📦 대여하기</div>
          <span className="divider-line" />

          {isLoggedIn ? (
            <div className="nav-item user-menu" ref={dropdownRef}>
              <div onClick={() => setShowDropdown(!showDropdown)} style={{ cursor: 'pointer' }}>
                👤 마이 페이지
              </div>
              {showDropdown && (
                <div className="dropdown">
                  <div onClick={handleMyPage} className="dropdown-item">마이페이지</div>
                  <div onClick={handleLogout} className="dropdown-item">로그아웃</div>
                </div>
              )}
            </div>
          ) : (
            <div className="nav-item" onClick={handleLogin} style={{ cursor: 'pointer' }}>
              👤 로그인
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPageHeader;