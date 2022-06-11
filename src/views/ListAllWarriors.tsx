import React, {FormEvent, useEffect, useState} from 'react';
import {Spinner} from "../components/common/Spinner/Spinner";
import {WarriorEntity} from "../types/WariorEntity";
import {WarriorsList} from "../components/Warriors/WarriorsList";
import {DeleteConfirmation} from "./DeleteConfirmation";

export const ListAllWarriors = () => {
    const [warriors, setWarriors] = useState<WarriorEntity[] | null>(null);
    const [removedWarriorId, setRemovedWarriorId] = useState<string | undefined>(undefined);

    const refreshAllWarriors = async () => {
        setWarriors(null);
        const res = await fetch('http://localhost:3001/warrior');
        setWarriors(await res.json());
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
        e.preventDefault();

        await fetch(`http://localhost:3001/warrior/${id}`, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        });

        setRemovedWarriorId(id);

        await refreshAllWarriors();
    };

    if (removedWarriorId) {
        return <DeleteConfirmation removedId={removedWarriorId}/>
    }

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
