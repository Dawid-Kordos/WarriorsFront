import React, {FormEvent} from "react";
import {InputText} from "../Input/InputText";
import {InputNumber} from "../Input/InputNumber";
import {RegistrationData} from "../../types/RegistrationData";

interface Props {
    data: RegistrationData;
    onSubmit: (e: FormEvent) => void;
}

export const Form = (props: Props) => {
    return (
        <>
            <form className="article__form" onSubmit={(e) => props.onSubmit(e)}>
                <InputText
                    className={"article__input"}
                    name={"name"}
                />
                <InputNumber
                    className={"article__input"}
                    name={"power"}
                    label={"Power"}
                    value={props.data.power}
                />
                <InputNumber
                    className={"article__input"}
                    name={"defence"}
                    label={"Defence"}
                    value={props.data.defence}
                />
                <InputNumber
                    className={"article__input"}
                    name={"resistance"}
                    label={"Resistance"}
                    value={props.data.resistance}
                />
                <InputNumber
                    className={"article__input"}
                    name={"agility"}
                    label={"Agility"}
                    value={props.data.agility}
                />
                <button className="article__btn">Send</button>
            </form>
        </>
    );
};
