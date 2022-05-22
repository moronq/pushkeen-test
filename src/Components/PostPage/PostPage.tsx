import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hook/hook';
import {fetchPostComments, fetchUserInfo, fetchUserPost}
  from '../../store/Reducers/UserSlice';
import PostItem from '../UserPage/PostList/PostItem';
import Comments from './Comments/Comments';
import CommentsInput from './CommentsInput/CommentsInput';
import Button from '../../common/Button/Button';
import styles from './PostPage.module.scss';

const PostPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const {
    statusPost, userPosts, userPostComments,
    errorPost,
  } = useAppSelector((state) => state.userPage);
  const [commentActive, setCommentActive] = useState(false);

  useEffect(() => {
    dispatch(fetchUserInfo(params.id as string));
    dispatch(fetchUserPost(params.id as string));
    dispatch(fetchPostComments(params.idPost as string));
  }, []);

  let contentPost;

  if (statusPost === 'loading') {
    contentPost = <p>Загрузка...</p>;
  } else if (statusPost === 'succeeded') {
    contentPost = userPosts.length > 0 &&
    <>
      <PostItem showAll={true}
        title={userPosts.filter((el) => {
          return el.id.toString() === params.idPost;
        })[0].title}
        body={userPosts.filter((el) =>{
          return el.id.toString() === params.idPost;
        })[0].body}
        userId={parseInt(params.id as string)}
        postId={parseInt(params.idPost as string)}/>
      <h5 className={styles.commentTitle}>
            Comments:
      </h5>
      <ul className={styles.commentsList}>
        {userPostComments.filter((el) => {
          return el.postId.toString() === params.idPost;
        }).map((el) => <Comments key={el.id} body={el.body}
          email={el.email} name={el.name}/>)}
      </ul>
    </>;
  } else if (statusPost === 'failed') {
    contentPost = <p>{errorPost}</p>;
  }

  return (
    <div className={styles.postPageContainer}>
      <div className={styles.postPageWrapper}>
        {contentPost}
        {!commentActive ? <Button callBackFn={() => setCommentActive(true)}
          background={'black'} color={'white'}
          fontSize={'11px'} pdCol={'20px'}>
                    Оставить комментарий
        </Button> : <CommentsInput postId={params.idPost as string}/>}
      </div>
    </div>
  );
};

export default PostPage;
