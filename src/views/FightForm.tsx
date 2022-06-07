import React, {useEffect, useState} from "react";
import {WarriorEntity} from "../types/WariorEntity";
import {Spinner} from "../components/common/Spinner/Spinner";
import arena from '../graphics/arena2.jpg';

export const FightForm = () => {
    const [data, setData] = useState<WarriorEntity[] | null>(null);

    const getAllWarriors = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/arena/fight-form');
        setData(await res.json())
    };

    useEffect(() => {
        (async () => {
            await getAllWarriors();
        })();
    }, []);

    if (data === null) {
        return <Spinner/>;
    }

    return (
        <>
            <h1 className="article__title">Choose the warriors for a fight.</h1>
            <img className="article__img" src={arena} alt="arena"/>
            <form className="article__form">
                <select className="article__select" name="warrior1">
                    {[...data].map(warrior => (
                        <option key={warrior.id} className="article__option" value={warrior.id}>{warrior.name}</option>
                    ))}
                </select>
                <select className="article__select" name="warrior2">
                    {[...data].map(warrior => (
                        <option key={warrior.id} className="article__option" value={warrior.id}>{warrior.name}</option>
                    ))}
                </select>
                <button className="article__btn" type="submit">Start your fight!</button>
            </form>
        </>
    );
};
