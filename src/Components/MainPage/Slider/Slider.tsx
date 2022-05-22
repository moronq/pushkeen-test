import React from 'react';
import styles from './Slider.module.scss';
import pilotsLogo from '../../../img/21-pilots-logo.jpg';
import arrow from '../../../img/arrow-right.svg';
import Button from '../../../common/Button/Button';

type SliderType = {
    mainTitle: string
    subTitle: string
}

const Slider:React.FC<SliderType> = ({mainTitle, subTitle}) => {
  return (
    <section className={styles.sliderWrapper}>
      <img className={styles.sliderLogo} src={pilotsLogo}
        alt="Twenty One Pilots Logo" width='1116px' height='509px'/>
      <article className={styles.sliderContainer}>
        <div className={styles.sliderTitleContainer}>
          <h3 className={styles.mainTitle}>{mainTitle}</h3>
          <h4 className={styles.subTitle}>{subTitle.toLowerCase()}</h4>
        </div>
      </article>
      <div className={styles.sliderButtonContainer}>
        <Button pdCol={'17px'}>
          <img src={arrow} alt='button-left'
            style={{transform: 'rotate(180deg)'}}/>
        </Button>
        <Button>
                    Купить билет
        </Button>
        <Button pdCol={'17px'}>
          <img src={arrow} alt='button-right'/>
        </Button>
      </div>
    </section>
  );
};

export default Slider;
