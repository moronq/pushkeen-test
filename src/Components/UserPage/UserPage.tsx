import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styles from './UserPage.module.scss'
import {useAppDispatch, useAppSelector} from "../../hook/hook";
import PostList from "./PostList/PostList";
import {fetchUserInfo, fetchUserPost, userSlice} from "../../store/Reducers/UserSlice";

const UserPage = () => {

    type ParamsType = {
        id: string
    }

    const COUNT_POST = 3

    const params = useParams<ParamsType>()
    const dispatch = useAppDispatch()
    const {statusInfo, userInfo, statusPost, userPosts, errorInfo, errorPost} = useAppSelector(state => state.userPage)
    const {nullStatusPost, nullStatusInfo} = userSlice.actions

    useEffect(() => {
        if (statusInfo === 'idle') {
            dispatch(fetchUserInfo(params.id as string))
        }
        if (statusPost === 'idle') {
            dispatch(fetchUserPost(params.id as string))
        }
        return () => {
            dispatch(nullStatusInfo())
            dispatch(nullStatusPost())
        }
    }, [])


    // let contentInfo
    //
    // if (statusInfo === 'loading') {
    //     contentInfo = <p>Загрузка...</p>
    // } else if (statusInfo === 'succeeded') {
    //     contentInfo = <section className={styles.userPageBody}>
    //         <div className={styles.userNameWrapper}>
    //             <h5 className={styles.userName}>{userInfo.username}</h5>
    //         </div>
    //         <div className={styles.userInfoWrapper}>
    //             <ul className={styles.userInfoList}>
    //                 <li className={styles.userInfoItem}>{userInfo.name}</li>
    //                 <li className={styles.userInfoItem}>{userInfo.email}</li>
    //                 <li className={styles.userInfoItem}>{userInfo.phone}</li>
    //                 <li className={styles.userInfoItem}>{userInfo.website}</li>
    //                 <li className={styles.userInfoItem}>{userInfo.company.name}</li>
    //                 <li className={styles.userInfoItem}>{userInfo.company.bs}</li>
    //             </ul>
    //         </div>
    //     </section>
    // } else if (statusInfo === 'failed') {
    //     contentInfo = <p>{errorInfo}</p>
    // }
    return (
        <main className={styles.userPageContainer}>
            <div className={styles.userPageBody}>
                <div className={styles.userNameWrapper}>
                    <h5 className={styles.userName}>{userInfo.username}</h5>
                </div>
                <div className={styles.userInfoWrapper}>
                    <ul className={styles.userInfoList}>
                        <li className={styles.userInfoItem}>{userInfo.name}</li>
                        <li className={styles.userInfoItem}>{userInfo.email}</li>
                        <li className={styles.userInfoItem}>{userInfo.phone}</li>
                        <li className={styles.userInfoItem}>{userInfo.website}</li>
                        {/*<li className={styles.userInfoItem}>{userInfo.company.name}</li>*/}
                        {/*<li className={styles.userInfoItem}>{userInfo.company.bs}</li>*/}
                    </ul>
                </div>
                <PostList userPosts={userPosts} countPost={COUNT_POST}/>
            </div>
        </main>
    )
}

export default UserPage;