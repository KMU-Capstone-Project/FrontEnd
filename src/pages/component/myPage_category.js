import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/myPage/myPage_category.css';

function MyPageCategory() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleReviewClick = () => {
    navigate('/reviews');
  };

  return (
    <div className="mypage-category">
      <div className="dropdown-wrapper">
        <button className="category-button" onClick={toggleDropdown}>
          ☰ <span className="highlight">카테고리</span>
        </button>

        {showDropdown && (
          <div className="expanded-dropdown">
            <div className="category-group">
              <div className="category-title">여성의류</div>
              <ul>
                <li>티셔츠/캐쥬얼의류</li>
                <li>니트/스웨터/가디건</li>
                <li>원피스/정장</li>
                <li>블라우스/셔츠/남방</li>
                <li>조끼/베스트</li>
                <li>바지/팬츠/청바지</li>
                <li>스커트/치마</li>
                <li>자켓/코트</li>
                <li>패딩/야상/점퍼</li>
                <li>트레이닝복</li>
                <li>언더웨어/잠옷</li>
                <li>파티복/드레스/기타</li>
              </ul>
            </div>
            <div className="category-group">
              <div className="category-title">남성의류</div>
              <ul>
                <li>티셔츠/캐쥬얼의류</li>
                <li>니트/스웨터/가디건</li>
                <li>정장</li>
                <li>조끼/베스트</li>
                <li>셔츠/남방</li>
                <li>바지/팬츠/청바지</li>
                <li>자켓/코트</li>
                <li>패딩/야상/점퍼</li>
                <li>트레이닝복</li>
                <li>언더웨어/잠옷</li>
                <li>테마의상/기타</li>
              </ul>
            </div>
            <div className="category-group right-bold">
              <ul>
                <li><strong>수입명품</strong></li>
                <li><strong>패션의류</strong></li>
                <li><strong>패션잡화</strong></li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="category-menu">
        <span>커뮤니티</span>
        <span>대여 절차 안내</span>
        <span>사이즈 가이드</span>
        <span onClick={handleReviewClick} style={{ cursor: 'pointer' }}>
          후기 모아보기
        </span>
      </div>
    </div>
  );
}

export default MyPageCategory;