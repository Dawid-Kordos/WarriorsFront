import React, {FormEvent} from 'react';
import {WarriorEntity} from "../../types/WariorEntity";
import { Button } from '../common/Button/Button';

interface Props {
    warrior: WarriorEntity;
    onDelete: (e: FormEvent, id: string | undefined) => void;
};

export const WarriorsList = (props: Props) => {
    return (
        <li className="article__item">{props.warrior.name}
            <form
                className="article__form-icon"
                onSubmit={(e) => props.onDelete(e, props.warrior.id)}>
                <Button/>
            </form>
        </li>
    );
};
