// src/pages/reviewPage/reviewPage_review.js
import React, { useState } from 'react';
import '../../css/reviewPage/reviewPage.css';

const reviewImages = [
  '/images/review1.jpg',
  '/images/review2.jpg',
  '/images/review3.jpg',
  '/images/review4.jpg',
  '/images/review5.jpg',
  '/images/review6.jpg',
  '/images/review7.jpg',
  '/images/review8.jpg',
];

function ReviewPageReview() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="review-wrapper">
      <h2 className="review-title">상점후기 <span className="count">1</span></h2>

      <div className="review-summary-box">
        <div className="avg-score">5</div>
        <div className="stars">★★★★★</div>
        <div className="divider" />
        <div className="satisfaction">
          <div className="percent">100%</div>
          <div className="label">만족후기</div>
        </div>
      </div>

      {/* 📸 후기 사진 모아보기 */}
      <div className="review-photo-gallery">
        <h3 className="gallery-title">📷 후기 사진 모음</h3>
        <div className="photo-grid">
          {reviewImages.slice(0, visibleCount).map((src, idx) => (
            <img key={idx} src={src} alt={`후기사진${idx}`} className="review-photo" />
          ))}
        </div>
        {visibleCount < reviewImages.length && (
          <button className="load-more-button" onClick={handleLoadMore}>
            {reviewImages.length - visibleCount}개 더보기
          </button>
        )}
      </div>

      <div className="review-item">
        <div className="profile-icon">🏪</div>
        <div className="review-content">
          <div className="username">김현수</div>
          <div className="rating">★★★★★</div>
          <div className="product">찢어진 정장 ▶</div>
          <div className="text">
            옷 대여 거래는 처음이라 조금 걱정되었는데
            잘 사용해서 기분이 좋네요 ㅎㅎ 잘 쓰고 반납합니다!
          </div>
          <div className="time">2일 전</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPageReview;