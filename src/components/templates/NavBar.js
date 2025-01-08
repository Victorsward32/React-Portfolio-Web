import React from 'react';
import styles from './NavBar.module.css';
import CommonButton from '../atoms/CommonButton';

const NavBar = ({
  OnPressHome,
  OnPressServices,
  OnPressAboutMe,
  OnPressPortfolio,
  OnPressContactMe,
}) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>All in one service</div>
      <ul className={styles.navLinks}>
        <li><a onClick={() => { OnPressHome(); }} className={styles.link}>Home</a></li>
        <li><a onClick={() => { OnPressServices(); }} className={styles.link}>Services</a></li>
        <li><a onClick={() => { OnPressAboutMe(); }} className={styles.link}>About Me</a></li>
        <li><a onClick={() => { OnPressPortfolio(); }} className={styles.link}>Portfolio</a></li>
        <li><a onClick={() => { OnPressContactMe(); }} className={styles.link}>Contact Me</a></li>
      </ul>
      <div className={styles.buttonWrapper}>
        <CommonButton variant="default" iconPosition="right">
          Hire Me
        </CommonButton>
      </div>
    </nav>
  );
};

export default NavBar;
