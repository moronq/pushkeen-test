import React from 'react';
import styles from './Button.module.scss'

type ButtonType = {
    children: React.ReactNode
    pdRow?: string
    pdCol?: string
}

const Button:React.FC<ButtonType> = ({pdRow='10px', pdCol='40px', ...props}) => {

    return (
        <button className={styles.buttonBody} style={{padding: pdRow + ' ' + pdCol,}}>
            {props.children}
        </button>
    );
};

export default Button;