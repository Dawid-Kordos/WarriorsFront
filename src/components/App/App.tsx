import React from 'react';
import {Header} from '../../layouts/Header';
import {Main} from "../../layouts/Main";
import {Footer} from "../../layouts/Footer";

import './App.css';

export const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

