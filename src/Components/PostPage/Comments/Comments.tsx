import React from 'react';
import styles from './Comments.module.scss';

type CommentsType = {
    name: string
    email: string
    body: string
}

const Comments:React.FC<CommentsType> = ({name, email, body}) => {
  return (
    <li className={styles.commentBody}>
      <p className={styles.commentName}>{name}</p>
      <p className={styles.commentEmail}>{email}</p>
      <p className={styles.commentText}>{body}</p>
    </li>
  );
};

export default Comments;
