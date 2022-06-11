import React, {useContext} from 'react';
import {RegistrationDataContext} from "../../views/AddForm";

interface Props {
   className: string;
   name: string;
}

export const InputText = (props: Props) => {
    const context = useContext(RegistrationDataContext);
    if (!context) return null;
    const {registrationData, handleInput} = context;

  return(
      <>
          <label className="article__label">
              Name:
          <input
              required
              className={props.className}
              type="text"
              name={props.name}
              minLength={3}
              maxLength={50}
              value={registrationData.name}
              onChange={handleInput}
          />
          </label>
      </>
  );
};
