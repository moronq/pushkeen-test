import React from 'react';
import styles from './MainPage.module.scss'
import Slider from "./Slider/Slider";
import UserItemContainer from "./UserItem/UserItemContainer";


const MainPage = () => {
    return (
        <>
            <Slider mainTitle={'Twenty One Pilots'} subTitle={'22.02.23 в 21:00'}/>
            <div className={styles.mainPageContainer}>
                <div>
                    <h4>Купили билеты</h4>
                    <p>932/<span>1000</span></p>
                </div>
                <UserItemContainer/>
            </div>
        </>
    );
};

export default MainPage;