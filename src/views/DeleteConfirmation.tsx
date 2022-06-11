import React from 'react';
import warrior from "../graphics/warrior2.jpg";
import {Link} from "react-router-dom";

interface Props {
    removedId: (string | undefined);
}

export const DeleteConfirmation = (props: Props) => (
    <>
        <h1 className="article__title">Warrior with ID: <span className="article__paragraph">'{props.removedId}'</span> has been removed!</h1>
        <img className="article__img" src={warrior} alt="warrior"/>
        <h3 className="article__sub-title">Do you want to add another one?
            <Link to="/warrior/add-form" className="article__link"> Add a warrior</Link>
        </h3>
    </>
)
