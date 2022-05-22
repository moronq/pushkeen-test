import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styles from './UserPage.module.scss'
import {useAppDispatch, useAppSelector} from "../../hook/hook";
import PostList from "./PostList/PostList";
import {fetchUserInfo, fetchUserPost, userSlice} from "../../store/Reducers/UserSlice";
import UserInfo from "./UserInfo/UserInfo";

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


    let contentInfo

    if (statusInfo === 'loading' || statusPost === 'loading') {
        contentInfo = <p>Загрузка...</p>
    } else if (statusInfo === 'succeeded' && statusPost === 'succeeded') {
        contentInfo = <>
            <UserInfo userInfo={userInfo}/>
            <PostList userPosts={userPosts} countPost={COUNT_POST}/>
        </>
    } else if (statusInfo === 'failed') {
        contentInfo = <p>{errorInfo}</p>
    } else if (statusPost === 'failed'){
        contentInfo = <p>{errorPost}</p>
    }
    return (
        <main className={styles.userPageContainer}>
            <div className={styles.userPageBody}>
                {contentInfo}
            </div>
        </main>
    )
}

export default UserPage;