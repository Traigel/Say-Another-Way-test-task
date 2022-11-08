import React from 'react';
import styles from './App.module.scss';
import {Catalog} from '../features/Catalog/Catalog';
import {DisplayOnError} from '../common/component/DisplayOnError/DisplayOnError';

export const App = () => {
    return (
        <div className={styles.app}>
            <Catalog/>
            <DisplayOnError/>
        </div>
    );
}