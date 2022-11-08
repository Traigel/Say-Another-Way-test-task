import React from 'react';
import styles from './App.module.css';
import {Catalog} from '../features/Catalog/Catalog';
import {DisplayOnError} from '../common/component/DisplayOnError/DisplayOnError';

export const App = () => {
    return (
        <div className={styles.App}>
            <Catalog/>
            <DisplayOnError/>
        </div>
    );
}