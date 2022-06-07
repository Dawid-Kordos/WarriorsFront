import React, {FormEvent, useEffect, useState} from 'react';
import {Spinner} from "../components/common/Spinner/Spinner";
import {WarriorEntity} from "../types/WariorEntity";
import trash from '../graphics/trash.png';

export const ListAllWarriors = () => {
    const [data, setData] = useState<WarriorEntity[] | null>(null);

    const refreshAllWarriors = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/warrior');
        setData(await res.json())
    };

    useEffect(() => {
        refreshAllWarriors();
    }, []);


    if (data === null) {
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
        alert('Warrior deleted.');
        refreshAllWarriors();
    }

    return (
        <>
            <h1 className="article__title">List of all warriors:</h1>
            <ol className="article__list">
                {[...data].map(warrior => (
                    <li key={warrior.id} className="article__item">{warrior.name}
                        <form className="article__form-icon" onSubmit={(e) => handleDelete(e, warrior.id)}>
                            <button className="article__btn-icon" type="submit">
                                <img
                                    src={trash}
                                    alt="trash"
                                    className="article__btn-delete"/>
                            </button>
                        </form>
                    </li>
                ))}
            </ol>
        </>
    );
}
