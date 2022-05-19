import React from 'react';
import Button from "../../common/Button/Button";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.bodyBar}>
            <nav className={styles.navContainer}>
                <a className={styles.title} href="#">CONCERN CLUB</a>
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