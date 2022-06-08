import React, {ChangeEvent, createContext, FormEvent, useState} from "react";
import {Form} from "../components/Form/Form";
import {RegistrationData} from "../types/RegistrationData";
import {registrData} from "../utils/registrData";
import {ErrorPage} from "./ErrorPage";

interface RegistrationDataContextType {
    registrationData: RegistrationData;
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RegistrationDataContext = createContext<RegistrationDataContextType | null>(null);

export const AddForm = () => {
    const [registrationData, setRegistrationData] = useState<RegistrationData>(registrData);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        await fetch('http://localhost:3001/warrior', {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        });
    }

    const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        if (name === 'name') {
            setRegistrationData({
                ...registrationData,
                name: value,
            });
        } else {
            setRegistrationData({
                ...registrationData,
                [name]: Number(value),
            })
        }
    }

    const {power, defence, resistance, agility, name} = registrationData;
    const stats = [power, defence, resistance, agility];
    const sum = stats.reduce((prev, curr) => prev + curr, 0)

    if (isSubmitted) {
        for (const stat of stats) {
            if (stat < 1) {
                return <ErrorPage message={'Each property must have min 1 point.'}/>
            }
        }

        if (sum !== 10) {
            return <ErrorPage
                message={`Sum of all properties (power, defence, resistance and agility) must be equal 10, but you have entered ${sum}.`
                }
            />
        }

        if (name.trim().length < 3 || name.length > 50) {
            return <ErrorPage
                message={`Name should have at least 3 and at most 50 characters, but you entered ${name.trim().length}.`
                }
            />
        }
        setRegistrationData(registrData);
        setIsSubmitted(false);
    }

    return (
        <>
            <h1 className="article__title">You are registering a new warrior:</h1>
            <p className="article__paragraph">(Total sum of all properties must be equal 10).</p>
            <RegistrationDataContext.Provider value={{
                registrationData,
                handleInput,
            }}>
                <Form data={registrationData} onSubmit={handleForm}/>
            </RegistrationDataContext.Provider>
        </>
    )
}
