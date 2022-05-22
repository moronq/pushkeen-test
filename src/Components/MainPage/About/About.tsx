import React from 'react';
import styles from './About.module.scss';

type AboutType = {
    title: string
    children: string | React.ReactNode
}

const About:React.FC<AboutType> = ({title, ...props}) => {
  return (
    <section className={styles.aboutContainer}>
      <h4 className={styles.aboutTitle}>{title}</h4>
      <article className={styles.textWrapper}>
        <div className={styles.textWrapperDirection}>
          {props.children}
        </div>
      </article>
    </section>
  );
};

export default About;
