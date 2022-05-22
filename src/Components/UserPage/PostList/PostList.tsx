import React from 'react';
import styles from './PostList.module.scss';
import PostItem from './PostItem';
import Button from '../../../common/Button/Button';
import {UserPostType} from '../../../types/UsersTypes';
import {useNavigate} from 'react-router-dom';

type PostListType = {
    userPosts: Array<UserPostType>
    countPost: number
}

const PostList:React.FC<PostListType> = ({userPosts, countPost}) => {
  const navigate = useNavigate();

  const onAllPostButtonClick = ()=>{
    navigate(`/userpost/${userPosts[0].userId.toString()}`);
  };

  return (
    <section className={styles.posts}>
      <div className={styles.postsContainer}>
        <div className={styles.postsTitleContainer}>
          <h5 className={styles.postTitleMain}>Посты</h5>
          <p>{countPost}
            <span className={styles.postsTitleCount}>
              {userPosts.length}
            </span>
          </p>
        </div>
        <ul className={styles.postList}>
          {userPosts.slice(0, countPost).map((el) => <PostItem key={el.id}
            title={el.title} userId={el.userId} postId={el.id} link={true}
           body={el.body}/>,
          )}
        </ul>
      </div>
      <Button background={'black'} color='white' pdCol='15px' fontSize='11px'
        callBackFn={onAllPostButtonClick}>
            Смотреть все посты
      </Button>
    </section>
  );
};

export default PostList;
