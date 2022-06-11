import React, {createContext, useEffect, useState} from "react";
import {Spinner} from "../components/common/Spinner/Spinner";
import {WarriorEntity} from "../types/WariorEntity";
import {Table} from "../components/common/Table/Table";

export const FamousWarriorsContext = createContext<WarriorEntity[] | null>(null);

export const HallOfFame = () => {
    const [famousWarriors, setFamousWarriors] = useState<WarriorEntity[] | null>(null);


    const refreshFameWarriors = async () => {
        try {
            setFamousWarriors(null);
            const res = await fetch('http://localhost:3001/hall-of-fame');
            setFamousWarriors(await res.json());
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        (async () => {
            await refreshFameWarriors();
        })();
    }, []);


    if (famousWarriors === null) {
        return <Spinner/>;
    }

    return (
        <>
            <h1 className="article__title">Hall of fame</h1>
            <FamousWarriorsContext.Provider value={famousWarriors}>
                <Table/>
            </FamousWarriorsContext.Provider>
        </>
    );
}
