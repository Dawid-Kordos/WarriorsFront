import React from "react";

interface Props {
    message: string,
}

export const ErrorPage = (props: Props) => (
    <div className="error">
        <h2>There is an error:</h2>
        {props.message}
    </div>
);
