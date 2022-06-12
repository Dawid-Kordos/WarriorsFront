import React from 'react';
import {Link} from "react-router-dom";
import warrior from '../graphics/warrior2.jpg';

import './Acknowledge.css';

interface Props {
    name: string;
}

export const Acknowledge = (props: Props) => (
    <>
        <h1 className="article__title">Warrior <span className="article__paragraph">'{props.name}'</span> has been
            registered!</h1>
        <img className="article__img" src={warrior} alt="warrior"/>
        <h3 className="article__sub-title">Now you can test yourself!
            <Link to="/arena/fight-form" className="article__link"> Make a fight!</Link>
        </h3>
    </>
)
