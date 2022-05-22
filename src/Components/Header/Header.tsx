import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../common/Button/Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.bodyBar}>
      <nav className={styles.navContainer}>
        <NavLink to='/mainPage' className={styles.title}>CONCERN CLUB</NavLink>
        <div className={styles.navBarButtonContainer}>
          <Button>
              Версия для слабовидящих
          </Button>
          <Button>
              Мой профиль
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
