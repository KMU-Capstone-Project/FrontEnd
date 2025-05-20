import React from 'react';
import '../../css/myPage/myPage_rentProduct.css';

function MyPageRentProduct() {
  return (
    <div className="rent-product-wrapper">
      <div className="rent-title">대여 내역</div>
      
      <div className="rent-tabs">
        <span className="active">전체</span>
        <span>대여중</span>
        <span>예약중</span>
        <span>반납완료</span>
      </div>

      <div className="rent-sort">
        <span className="active">최신순</span>
        <span>낮은가격순</span>
        <span>높은가격순</span>
      </div>

      <div className="rent-list">
        선택된 조건에 해당하는 상품이 없습니다.
      </div>
    </div>
  );
}

export default MyPageRentProduct;