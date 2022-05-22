import React from 'react';
import styles from './UserInfo.module.scss'
import {GetUsersType} from "../../../types/UsersTypes";

type UserInfoType = {
    userInfo: GetUsersType
}

const UserInfo:React.FC<UserInfoType> = ({userInfo}) => {
    return (
        <section className={styles.userPageBody}>
            <div className={styles.userNameWrapper}>
                <h5 className={styles.userName}>{userInfo.username}</h5>
            </div>
            <div className={styles.userInfoWrapper}>
                <ul className={styles.userInfoList}>
                    <li className={styles.userInfoItem}>{userInfo.name}</li>
                    <li className={styles.userInfoItem}>{userInfo.email}</li>
                    <li className={styles.userInfoItem}>{userInfo.phone}</li>
                    <li className={styles.userInfoItem}>{userInfo.website}</li>
                    <li className={styles.userInfoItem}>{userInfo.company.name}</li>
                    <li className={styles.userInfoItem}>{userInfo.company.bs}</li>
                </ul>
            </div>
        </section>
    );
};

export default UserInfo;