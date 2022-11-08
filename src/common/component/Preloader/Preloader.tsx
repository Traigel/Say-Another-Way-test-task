import React from 'react';
import styles from './Preloader.module.scss'
import CircularProgress from '@mui/material/CircularProgress';

export const Preloader = () => {

    return <div className={styles.init}>
        <CircularProgress color="inherit"/>
    </div>
}