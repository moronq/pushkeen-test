import React from 'react';
import styles from './PostList.module.scss'

type PostItemType = {
    title: string
    body: string
}

const PostItem: React.FC<PostItemType> = ({title, body}) => {
    return (
        <li className={styles.postItemWrapper}>
            <h6 className={styles.postTitle}>{title}</h6>
            <p className={styles.postItemBody}>{body}</p>
        </li>
    );
};

export default PostItem;