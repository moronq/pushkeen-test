import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './PostList.module.scss';

type PostItemType = {
    title: string
    body: string
    userId: number
    postId: number
    showAll?: boolean
    link?: boolean
}

const PostItem: React.FC<PostItemType> = ({title, body, link = false,
  userId, postId, showAll=false}) => {
  const navigate = useNavigate();

  const callBackPostFn = () =>{
    navigate(`/userPost/${userId.toString()}/post/${postId.toString()}`);
  };

  return (
    <li className={styles.postItemWrapper} onClick={link ?
        callBackPostFn : ()=>{}}>
      <h6 className={styles.postTitle}>{title}</h6>
      <p style={{whiteSpace: showAll ? 'normal' : 'nowrap'}}
        className={styles.postItemBody} >{body}</p>
    </li>
  );
};

export default PostItem;
