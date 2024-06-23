import React from 'react';
import styles from './Error.module.css'

const Error = () => {
    return (
        <div className={styles.error}>
            <h3>Something was happened. Please check your request</h3>
        </div>
    );
};

export default Error;