import React from 'react';
import './App.css';
import {Catalog} from '../features/Catalog/Catalog';
import {DisplayOnError} from '../common/component/DisplayOnError/DisplayOnError';

export const App = () => {
    return (
        <div className="App">
            <Catalog/>
            <DisplayOnError/>
        </div>
    );
}