import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {fetchUserInfo, fetchUserPost} from '../../store/Reducers/UserSlice'
import {useAppDispatch, useAppSelector} from '../../hook/hook'
import PostItem from '../UserPage/PostList/PostItem'
import styles from './AllPostPage.module.scss'

const AllPostPage = () => {

    const params = useParams()
    const dispatch = useAppDispatch()
    const {statusPost, statusInfo, userInfo, userPosts, errorInfo, errorPost} = useAppSelector(state=> state.userPage)

    useEffect(()=>{
        if (statusInfo === 'idle') {
            dispatch(fetchUserInfo(params.id as string))
        }
        if (statusPost === 'idle') {
            dispatch(fetchUserPost(params.id as string))
        }
    },[])

    let contentPosts

    if (statusInfo === 'loading' || statusPost === 'loading') {
        contentPosts = <p>Загрузка...</p>
    } else if (statusInfo === 'succeeded' && statusPost === 'succeeded') {
        contentPosts = <>
            <h5 className={styles.allPostTitle}>{`Посты ${userInfo.name}`}</h5>
            <ul className={styles.commentList}>
                {userPosts.map((el)=><PostItem postId={el.id} userId={el.userId} key={el.id}
                                               title={el.title} body={el.body}/>)}
            </ul>
        </>
    } else if (statusInfo === 'failed') {
        contentPosts = <p>{errorInfo}</p>
    } else if (statusPost === 'failed'){
        contentPosts = <p>{errorPost}</p>
    }

    return (
        <>
            <div className={styles.allPostContainer}>
                {contentPosts}
            </div>
            <div className={styles.allPostFooter}/>
        </>
    );
};

export default AllPostPage;