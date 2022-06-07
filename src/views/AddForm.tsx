import React, {ChangeEvent, FormEvent, useState} from "react";

export const AddForm = () => {
    const [registrationData, setRegistrationData] = useState({
        name: '',
        power: 1,
        defence: 1,
        resistance: 1,
        agility: 1,
    });

    const handleForm = async (e: FormEvent) => {
        e.preventDefault();

        await fetch('http://localhost:3001/warrior', {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        });

        setRegistrationData({
            name: '',
            power: 1,
            defence: 1,
            resistance: 1,
            agility: 1,
        });
    }

    const handleInput = async (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;

        setRegistrationData({
            ...registrationData,
            [name]: value,
        });
    }

/*    const {power, defence, resistance, agility, name} = registrationData;
    const stats = [power, defence, resistance, agility];
    const sum = stats.reduce((prev, curr) => prev + curr, 0)

    for (const stat of stats) {
        if (stat < 1) {
            return <ErrorPage message={'Each property must have min 1 point.'}/>
        }
    }

    if (sum !== 10) {
        return <ErrorPage
            message={`Sum of all properties (power, defence, resistance and agility) must be equal 10, but you have entered ${sum}.`}/>
    }

    if (name.trim().length < 3 || name.length > 50) {
        return <ErrorPage
            message={`Name should have at least 3 and at most 50 characters, but you entered ${name.trim().length}.`}/>
    }*/

    return (
        <>
            <h1 className="article__title">You are registering a new warrior:</h1>
            <p className="article__paragraph">(Total sum of all properties must be equal 10).</p>
            <form className="article__form" onSubmit={handleForm}>
                <label className="article__label">
                    Name:
                    <input
                        required
                        className="article__input"
                        type="text"
                        name="name"
                        minLength={3}
                        maxLength={50}
                        value={registrationData.name}
                        onChange={handleInput}
                    />
                </label>
                <label className="article__label">
                    Power:
                    <input
                        className="article__input"
                        type="number"
                        name="power"
                        min="1"
                        max="7"
                        value={registrationData.power}
                        onChange={handleInput}
                    />
                </label>
                <label className="article__label">
                    Defence:
                    <input
                        className="article__input"
                        type="number"
                        name="defence"
                        min="1"
                        max="7"
                        value={registrationData.defence}
                        onChange={handleInput}
                    />
                </label>
                <label className="article__label">
                    Resistance:
                    <input
                        className="article__input"
                        type="number"
                        name="resistance"
                        min="1"
                        max="7"
                        value={registrationData.resistance}
                        onChange={handleInput}
                    />
                </label>
                <label className="article__label">
                    Agility:
                    <input
                        className="article__input"
                        type="number"
                        name="agility"
                        min="1"
                        max="7"
                        value={registrationData.agility}
                        onChange={handleInput}
                    />
                </label>
                <button className="article__btn">Send</button>
            </form>
        </>
    )
}
