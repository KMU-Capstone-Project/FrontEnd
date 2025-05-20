// src/pages/sizeGuide/sizeGuide.js
import React from 'react';
import MyPageHeader from '../component/myPage_header';
import MyPageCategory from '../component/myPage_category';
import MyPageMenu from '../component/myPage_menu';
import SizeGuidePage from './sizeGuidePage';

function SizeGuide() {
  return (
    <div>
      <MyPageHeader />
      <MyPageCategory />

      <div className="mypage-body">
        <div className="menu-wrapper">
          <MyPageMenu />
        </div>
        <div className="right-section-wrapper">
          <SizeGuidePage />
        </div>
      </div>
    </div>
  );
}

export default SizeGuide;
