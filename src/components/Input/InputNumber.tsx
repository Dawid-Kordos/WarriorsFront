import React, {useContext} from "react";
import {RegistrationDataContext} from "../../views/AddForm";

interface Props {
    className: string;
    name: string;
    value: number;
}

export const InputNumber = (props: Props) => {

    const context = useContext(RegistrationDataContext);
    if (!context) return null;
    const {handleInput} = context;

    return (
        <>
            <input
                className={props.className}
                type="number"
                name={props.name}
                min="1"
                max="7"
                value={props.value}
                onChange={handleInput}
            />
        </>
    );
};
