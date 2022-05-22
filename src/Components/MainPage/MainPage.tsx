import React from 'react';
import styles from './MainPage.module.scss';
import Slider from './Slider/Slider';
import TicketsPurchased from './TicketsPurchased/TicketsPurchased';
import About from './About/About';
import InputForm from '../../common/InputForm/InputForm';


const MainPage = () => {
  return (
    <>
      <Slider mainTitle={'Twenty One Pilots'} subTitle={'22.02.23 в 21:00'}/>
      <div className={styles.mainPageContainer}>
        <TicketsPurchased/>
        <div className={styles.aboutAndFormWrapper}>
          <div className={styles.aboutPlaceWrapper}>
            <About title={'О площадке'}>
              <b>Современная площадка для проведения концертов
                  и других мероприятий любой сложности.
              </b>
              <p>
                  Мы предоставляем всю необходимую для организаторов
                  инфраструктуру и готовые решения под все основные задачи
                  любого события, а также современное оборудование,
                  соответствующее самым высоким мировым стандартам.
              </p>
              <p>
                  Мы предоставляем всю необходимую для организаторов
                  инфраструктуру и готовые решения под все основные задачи
                  любого события, а также современное оборудование,
                  соответствующее самым высоким мировым стандартам.
              </p>
            </About>
          </div>
          <div className={styles.concertFormWrapper}>
            <InputForm title={'Оставить заявку на проведение концерта'}
              placeholder={'Расскажите о вашем предложении'}/>
          </div>
        </div>
        <div className={styles.aboutGroupWrapper}>
          <About title={'О группе'}>
            <p style={{fontSize: '16px'}}>
                Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
                Группа образовалась в 2009 году и на данный момент состоит из
                Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил
                два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
            </p>
          </About>
        </div>
      </div>
    </>
  );
};

export default MainPage;
