import React, {ChangeEvent, createContext, FormEvent, useState} from "react";
import {Form} from "../components/Form/Form";
import {RegistrationData} from "../types/RegistrationData";
import {registrData} from "../utils/registrData";
import {ErrorPage} from "./ErrorPage";
import {RegistrationDataContextType} from "../types/RegistrationDataContextType";
import {Acknowledge} from "./Acknowledge";

export const RegistrationDataContext = createContext<RegistrationDataContextType | null>(null);

export const AddForm = () => {
    const [registrationData, setRegistrationData] = useState<RegistrationData>(registrData);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [addedWarriorName, setAddedWarriorName] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        try {
            const res = await fetch('http://localhost:3001/warrior', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            const message = await res.json();

            !message.message ? setAddedWarriorName(message.name) : setErrorMessage(message.message);
        } catch (err) {
            console.error(err);
            return <ErrorPage message={'Sorry, try again later.'}/>
        }
    };

    const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        name === 'name'
            ?
            setRegistrationData({
                ...registrationData,
                name: value,
            })
            : setRegistrationData({
                ...registrationData,
                [name]: Number(value),
            });
    };

    if (isSubmitted) {
        setRegistrationData(registrData);
        setIsSubmitted(false);
    }

    if (errorMessage) {
        return <ErrorPage message={errorMessage}/>
    }

    if (addedWarriorName) {
        return <Acknowledge name={addedWarriorName}/>
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
    );
};
