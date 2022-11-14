import React from 'react';
import '@styles/Menu.scss';
import iconClose from '@icons/icon_close.png';

const mobileMenu = ({ toggleMobileMenu, setToggleMobileMenu }) => {

  return (
    <div className="mobileMenu">
      <img src={iconClose} 
      alt="iconClose"
      onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
      />
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/" className="title">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li className='user'>
          platzi@example.com
        </li>
        <li>
          <a href="/" className='sign-out'>Sign out</a>
        </li>
      </ul>               
    </div>
  );
};

export default mobileMenu;