import React from 'react';
import MainPageHeader from '../mainPage/mainPage_header';
import MyPageCategory from '../component/myPage_category';

function MainPage() {
  return (
    <div>
      <MainPageHeader />
      <MyPageCategory />
      <div className="mypage-body">
        <div className="menu-wrapper">
        </div>
      </div>
    </div>
  );
}

export default MainPage;