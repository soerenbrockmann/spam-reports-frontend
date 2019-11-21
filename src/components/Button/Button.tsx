import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    id: string;
    name: string;
    clickHandler: any;
}

export const Button = ({
    id,
    name,
    clickHandler,
}: ButtonProps): JSX.Element => {
    return (
        <button id={id} onClick={clickHandler} className={styles.button}>
            {name}
        </button>
    );
};
