import React from "react";
import {Row} from "./Row";

import './Table.css';

export const Table = () => {
    return (
        <table className="article__table">
            <thead>
            <tr className="article__table-row">
                <th className="article__table-column">#</th>
                <th className="article__table-column">Name</th>
                <th className="article__table-column">Wins</th>
            </tr>
            </thead>
            <tbody>
                <Row/>
            </tbody>
        </table>
    );
};
