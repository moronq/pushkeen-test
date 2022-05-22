import React, {useState} from 'react'
import Button from '../../../common/Button/Button'
import {addPostComment} from '../../../store/Reducers/UserSlice'
import {useAppDispatch} from '../../../hook/hook'
import styles from './CommentsInput.module.scss'

type CommentsInputType = {
    postId: string
}

const CommentsInput: React.FC<CommentsInputType> = ({postId}) => {

    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [commentText, setCommentText] = useState('')
    const onSubmitButton = () => {
        dispatch(addPostComment({postId, bodyComment: commentText, email, name}))
        setName('')
        setEmail('')
        setCommentText('')
    }

    const disabledButton = name === '' ? true : email === '' ? true : commentText === ''

    return (<div className={styles.commentInputWrapper}>
            <form className={styles.commentInputForm}>
                <div className={styles.commentInputContainer}>
                    <label htmlFor="name">Имя:</label>
                    <input placeholder={'Иван Иванов'} type={"text"} id={'name'} value={name}
                           onChange={(e) => setName(e.currentTarget.value)}/>
                </div>
                <div className={styles.commentInputContainer}>
                    <label htmlFor="email">email:</label>
                    <input placeholder={'IvanIvanov@gmail.com'} type={"email"} id={'email'} value={email}
                           onChange={(e) => setEmail(e.currentTarget.value)}/>
                </div>
                <div className={styles.commentInputContainer + ' ' + styles.commentInput}>
                    <label htmlFor="comment">Комметарий:</label>
                    <textarea className={styles.commentTextArea} placeholder={'Начните вводить комментарий...'} id={'comment'}
                           value={commentText}
                           onChange={(e) => setCommentText(e.currentTarget.value)}/>
                </div>
                <div className={styles.commentButtonContainer}>
                    <Button disabled={disabledButton} height='35px' color='white' fontSize='11px' background={'black'}
                            pdCol='20px'
                            callBackFn={onSubmitButton}>
                        Отправить
                    </Button>
                </div>
            </form>
        </div>

    )
}

export default CommentsInput;