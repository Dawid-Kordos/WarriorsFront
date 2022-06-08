import React from "react";
import {Link} from "react-router-dom";

interface Props {
    message: string,
}

export const ErrorPage = (props: Props) => (
    <>
        <h2>There is an error:</h2>
        {props.message}
    </>
);
