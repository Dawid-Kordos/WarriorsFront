import React, {FormEvent, useEffect, useState} from 'react';
import {Spinner} from "../components/common/Spinner/Spinner";
import {WarriorEntity} from "../types/WariorEntity";
import trash from '../graphics/trash.png';
import {WarriorsList} from "../components/Warriors/WarriorsList";

export const ListAllWarriors = () => {
    const [data, setData] = useState<WarriorEntity[] | null>(null);

    const refreshAllWarriors = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/warrior');
        setData(await res.json())
    };

    useEffect(() => {
        (async () => {
            await refreshAllWarriors();
        })();
    }, []);


    if (data === null) {
        return <Spinner/>;
    };

    const handleDelete = async (e: FormEvent, id: string | undefined) => {
        await fetch(`http://localhost:3001/warrior/${id}`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        });
        //alert('Warrior deleted.');
        await refreshAllWarriors();
    }

    return (
        <>
            <h1 className="article__title">List of all warriors:</h1>
            <ol className="article__list">
                {[...data].map(warrior => (
                    <WarriorsList
                        key={warrior.id}
                        warrior={warrior}
                        onDelete={handleDelete}
                    />
                ))}
            </ol>
        </>
    );
};
