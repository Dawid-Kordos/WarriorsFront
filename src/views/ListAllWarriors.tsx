import React, {FormEvent, useEffect, useState} from 'react';
import {Spinner} from "../components/common/Spinner/Spinner";
import {WarriorEntity} from "../types/WariorEntity";
import {WarriorsList} from "../components/Warriors/WarriorsList";

export const ListAllWarriors = () => {
    const [warriors, setWarriors] = useState<WarriorEntity[] | null>(null);

    const refreshAllWarriors = async () => {
        setWarriors(null);
        const res = await fetch('http://localhost:3001/warrior');
        setWarriors(await res.json())
    };

    useEffect(() => {
        (async () => {
            await refreshAllWarriors();
        })();
    }, []);


    if (warriors === null) {
        return <Spinner/>;
    }

    const handleDelete = async (e: FormEvent, id: string | undefined) => {
        await fetch(`http://localhost:3001/warrior/${id}`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        });

        await refreshAllWarriors();
    };

    return (
        <>
            <h1 className="article__title">List of all warriors:</h1>
            <ol className="article__list">
                {[...warriors].map(warrior => (
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
