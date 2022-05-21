import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styles from './UserPage.module.scss'
import {useAppDispatch, useAppSelector} from "../../hook/hook";
import {fetchUserInfo, fetchUserPost} from "../../store/Reducers/UserSlice";
import PostItem from "./PostList/PostItem";

const UserPage = () => {

    type ParamsType = {
        id: string
    }

    const params = useParams<ParamsType>()
    const dispatch = useAppDispatch()
    const {statusInfo, userInfo, statusPost, userPosts, errorInfo, errorPost} = useAppSelector(state => state.userPage)

    useEffect(() => {
        if (statusInfo === 'idle') {
            dispatch(fetchUserInfo(params.id as string))
        }
    }, [])

    useEffect(() => {
        if (statusPost === 'idle') {
            dispatch(fetchUserPost(params.id as string))
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
                <section className={styles.posts}>
                    <div className={styles.postsContainer}>
                        <h5 className={styles.postTitle}>Посты</h5>
                        <ul className={styles.postList}>
                            {userPosts.slice(0,3).map((el)=><PostItem key={el.id} title={el.title} body={el.body}/>
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default UserPage;