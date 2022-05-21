import React, {useState} from 'react'
import Button from '../../../common/Button/Button'
import styles from './ConcertForm.module.scss'

const ConcertForm: React.FC = () => {

    const [textForm, setTextForm] = useState('')

    const onFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextForm(e.currentTarget.value)
    }

    return (
        <section className={styles.concertForm}>
            <h5 className={styles.concertFormTitle}>Оставить заявку на проведение концерта</h5>
            <textarea className={styles.concertFormText} value={textForm} onChange={(e)=>onFormChange(e)}
                      placeholder='Расскажите о вашем предложении '/>
            <div className={styles.concertFormButtonWrapper}>
                <Button height='35px' color='white' fontSize='11px' background={'black'} pdCol='20px'>
                    Отправить
                </Button>
            </div>
        </section>
    );
};

export default ConcertForm;