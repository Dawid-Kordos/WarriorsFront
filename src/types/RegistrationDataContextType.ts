import {RegistrationData} from "./RegistrationData";
import {ChangeEvent} from "react";

export interface RegistrationDataContextType {
    registrationData: RegistrationData;
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
