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
                <label className="article__label">
                    Name:
                    <InputText className={"article__input"} name={"name"}/>
                </label>
                <label className="article__label">
                    Power:
                    <InputNumber className={"article__input"} name={"power"} value={props.data.power}/>
                </label>
                <label className="article__label">
                    Defence:
                    <InputNumber className={"article__input"} name={"defence"} value={props.data.defence}/>
                </label>
                <label className="article__label">
                    Resistance:
                    <InputNumber className={"article__input"} name={"resistance"} value={props.data.resistance}/>
                </label>
                <label className="article__label">
                    Agility:
                    <InputNumber className={"article__input"} name={"agility"} value={props.data.agility}/>
                </label>
                <button className="article__btn">Send</button>
            </form>
        </>
    );
};
