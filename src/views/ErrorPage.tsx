import React from "react";
import {Link} from "react-router-dom";

interface Props {
    message: string,
}

export const ErrorPage = (props: Props) => (
    <>
        <div className="error">
            <h2>There is an error:</h2>
            {props.message}
        </div>
        <Link to='/' className="article__link">Go to main page</Link>
    </>
);
