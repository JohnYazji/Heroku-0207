import React from 'react';
import './FooterComponent.styles.css';

import NavigationalButton from '../NavigationalButtonComponent/NavigationalButtonComponent';

import homeIcon from '../../assets/images/home-icon-footer.svg';
import profileIcon from '../../assets/images/profile-icon-footer.svg';
import cupIcon from '../../assets/images/cup-icon-footer.svg';

export default function FooterComponent() {
  return (
    <footer className="footer-component">
      <NavigationalButton
        content="Home"
        imgSrc={homeIcon}
        alt="icon"
        href="/home"
      />
      <NavigationalButton
        content="Winners"
        imgSrc={cupIcon}
        alt="icon"
        href="/leaderboard"
      />
      <NavigationalButton
        content="Profile"
        imgSrc={profileIcon}
        alt="icon"
        href="/profile"
      />
    </footer>
  );
}
