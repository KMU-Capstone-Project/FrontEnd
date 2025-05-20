import React from 'react';
import MyPageHeader from '../component/myPage_header';
import MyPageCategory from '../component/myPage_category';
import MyPageMenu from '../component/myPage_menu';
import MyPageProfile from './myPage_profile';
import MyPageChat from './myPage_chat';
import MyPageRentProduct from './myPage_rentProduct';
import '../../css/myPage/myPage.css';

function MyPage() {
  return (
    <div>
      <MyPageHeader />
      <MyPageCategory />
      <div className="mypage-body">
        <div className="menu-wrapper">
          <MyPageMenu />
        </div>
        <div className="right-section-wrapper">
          <div className="profile-chat-container">
            <div className="profile-wrapper">
              <MyPageProfile />
            </div>
            <div className="chat-wrapper">
              <MyPageChat />
            </div>
          </div>
          <div className="rent-product-wrapper">
            <MyPageRentProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;