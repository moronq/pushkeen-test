import React, {useState} from 'react';
import Button from '../Button/Button';
import styles from './InputForm.module.scss';
import {useAppDispatch} from '../../hook/hook';
import {addPostComment} from '../../store/Reducers/UserSlice';

type InputFormType = {
    title: string
    placeholder: string
    idPost?: string
}

const InputForm: React.FC<InputFormType> = ({title, placeholder, idPost}) => {
  const [textForm, setTextForm] = useState('');
  const dispatch = useAppDispatch();

  const onFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextForm(e.currentTarget.value);
  };

  const onSubmitButton = () => {
    dispatch(addPostComment({postId: idPost as string, bodyComment: textForm}));
    setTextForm('');
  };

  return (
    <section className={styles.concertForm}>
      <h5 className={styles.concertFormTitle}>{title}</h5>
      <textarea className={styles.concertFormText} value={textForm}
        onChange={(e) => onFormChange(e)} placeholder={placeholder}/>
      <div className={styles.concertFormButtonWrapper}>
        <Button height='35px' color='white' fontSize='11px' background={'black'}
          pdCol='20px' callBackFn={onSubmitButton}>
                    Отправить
        </Button>
      </div>
    </section>
  );
};

export default InputForm;
