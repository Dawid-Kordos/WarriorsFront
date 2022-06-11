import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {WarriorEntity} from "../types/WariorEntity";
import {chosenWarriors} from "../types/ChoosenWarriors";
import {Spinner} from "../components/common/Spinner/Spinner";
import {InputSelect} from "../components/Input/InputSelect";
import arena from '../graphics/arena2.jpg';
import {ErrorPage} from "./ErrorPage";
import {FightLog} from "./FightLog";

export const FightForm = () => {
    const [warriors, setWarriors] = useState<WarriorEntity[] | null>(null);
    const [fightingWarriors, setFightingWarriors] = useState<chosenWarriors>({warrior1: '', warrior2: ''});
    const [log, setLog] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const getAllWarriors = async () => {
        try {
            setWarriors(null);
            const res = await fetch('http://localhost:3001/arena/fight-form');
            setWarriors(await res.json());
        } catch (err) {
            console.error(err);
            return <ErrorPage message={'Sorry, try again later.'}/>
        }
    };

    useEffect(() => {
        (async () => {
            await getAllWarriors();
        })();
    }, []);

    if (warriors === null) {
        return <Spinner/>;
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target;

        setFightingWarriors({
            ...fightingWarriors,
            [name]: value,
        });
    };

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3001/arena/fight', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fightingWarriors),
            });

            const message = await res.json();

            message.message ? setErrorMessage(message.message) : setLog(message);
        } catch (err) {
            console.error(err);
            return <ErrorPage message={'Sorry, try again later.'}/>
        }
    };

    if (errorMessage) {
        return <ErrorPage message={errorMessage}/>
    }

    if (log.length > 0) {
        return <FightLog log={log}/>
    }

    return (
        <>
            <h1 className="article__title">Choose the warriors for a fight.</h1>
            <img className="article__img" src={arena} alt="arena"/>
            <form className="article__form" onSubmit={handleForm}>
                <InputSelect warriors={warriors} name={'warrior1'} onChange={handleSelectChange}/>
                <InputSelect warriors={warriors} name={'warrior2'} onChange={handleSelectChange}/>
                <button className="article__btn" type="submit">Start your fight!</button>
            </form>
        </>
    );
};
