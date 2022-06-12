import React from "react";

import './FightLog.css';

interface Props {
    log: string[];
}

export const FightLog = (props: Props) => {
    return (
        <>
            <h1 className="article__title">Fight log</h1>
            <ol className="article__log-list">
                {[...props.log].map((entry, i) => <li key={i} className="article__log-item"> {entry}</li>)}
            </ol>
        </>
    )
}
