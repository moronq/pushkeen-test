import React from 'react';
import styles from './Button.module.scss'

type ButtonType = {
    children: React.ReactNode
    pdRow?: string
    pdCol?: string
    height?: string
    background?: string
    color?: string
    fontSize?: string
    callBackFn?: ()=>void
}

const Button: React.FC<ButtonType> = ({
                                          pdRow = '10px',
                                          pdCol = '40px',
                                          height = '40px',
                                          background = 'white',
                                          color = 'black',
                                          fontSize = '14px',
                                          callBackFn,
                                          ...props
                                      }) => {

    const styleButton = {
        padding: pdRow + ' ' + pdCol,
        height,
        background,
        color,
        fontSize
    }

    return (
        <button onClick={callBackFn} className={styles.buttonBody} style={styleButton}>
            {props.children}
        </button>
    );
};

export default Button;