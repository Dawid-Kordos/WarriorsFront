import React, {useEffect, useState} from "react";
import {Spinner} from "../components/common/Spinner/Spinner";
import {WarriorEntity} from "../types/WariorEntity";

export const HallOfFame = () => {
    const [data, setData] = useState<WarriorEntity[] | null>(null);

    const refreshFameWarriors = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/hall-of-fame');
        setData(await res.json())
    };

    useEffect(() => {
        refreshFameWarriors();
    }, []);


    if (data === null) {
        return <Spinner/>;
    }

    return (
        <>
            <h1 className="article__title">Hall of fame</h1>
            <table className="article__table">
                <thead>
                <tr className="article__table-row">
                    <th className="article__table-column">#</th>
                    <th className="article__table-column">Name</th>
                    <th className="article__table-column">Wins</th>
                </tr>
                </thead>
                <tbody>
                {[...data].map(warrior => (
                    <tr key={warrior.id} className="article__table-row">
                        <td className="article__table-column">{warrior.place}</td>
                        <td className="article__table-column">{warrior.name}</td>
                        <td className="article__table-column">{warrior.wins}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
