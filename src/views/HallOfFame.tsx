import React, {createContext, useEffect, useState} from "react";
import {Spinner} from "../components/common/Spinner/Spinner";
import {WarriorEntity} from "../types/WariorEntity";
import {Table} from "../components/common/Table/Table";

export const FamousWarriorsContext = createContext<WarriorEntity[] | null>(null);

export const HallOfFame = () => {
    const [data, setData] = useState<WarriorEntity[] | null>(null);

    const refreshFameWarriors = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/hall-of-fame');
        setData(await res.json())
    };

    useEffect(() => {
        (async () => {
            await refreshFameWarriors();
        })();
    }, []);


    if (data === null) {
        return <Spinner/>;
    }

    return (
        <>
            <h1 className="article__title">Hall of fame</h1>
            <FamousWarriorsContext.Provider value={data}>
                <Table/>
            </FamousWarriorsContext.Provider>
        </>
    );
}
