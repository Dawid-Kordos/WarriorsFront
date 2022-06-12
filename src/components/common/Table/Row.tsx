import React, {useContext} from "react";
import {FamousWarriorsContext} from "../../../views/HallOfFame";

import './Table.css';

export const Row = () => {
    const context = useContext(FamousWarriorsContext);
    if (!context) return null;
    const famousWarriors = context;

    return(
        <>
            {famousWarriors.map(warrior => (
                <tr key={warrior.id} className="article__table-row">
                    <td className="article__table-column">{warrior.place}</td>
                    <td className="article__table-column">{warrior.name}</td>
                    <td className="article__table-column">{warrior.wins}</td>
                </tr>
            ))}
        </>

    );
};
