// src/pages/sellList/sellList_content.js
import React, { useState } from 'react';
import '../../css/sellList/sellList.css';

function SellListContent() {
  const [activeTab, setActiveTab] = useState('판매완료');
  const [sortOrder, setSortOrder] = useState('최신순');

  const tabs = ['전체', '대여중', '예약중', '완료'];
  const sortOptions = ['최신순', '낮은가격순', '높은가격순'];

  return (
    <div className="rent-product-wrapper">
      <div className="rent-title">대여 내역</div>

      <div className="rent-tabs">
        {tabs.map(tab => (
          <span
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="rent-sort">
        {sortOptions.map(option => (
          <span
            key={option}
            className={sortOrder === option ? 'active' : ''}
            onClick={() => setSortOrder(option)}
          >
            {option}
          </span>
        ))}
      </div>

      <div className="rent-list">
        선택된 조건에 해당하는 상품이 없습니다.
      </div>
    </div>
  );
}

export default SellListContent;
