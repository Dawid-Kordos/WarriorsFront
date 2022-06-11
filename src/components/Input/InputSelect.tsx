import React, {ChangeEvent} from "react";
import {WarriorEntity} from "../../types/WariorEntity";

interface Props {
    warriors: WarriorEntity[] | null;
    name: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const InputSelect = (props: Props) => {
    if (!props.warriors) return null;

    return (
        <select className="article__select" name={props.name} onChange={(e) => props.onChange(e)}>
            <option
                className="article__option"
            >
                Choose a warrior
            </option>
            {[...props.warriors].map(warrior => (
                <option
                    key={warrior.id}
                    className="article__option"
                    value={warrior.id}
                >
                    {warrior.name}
                </option>
            ))}
        </select>
    );
};
