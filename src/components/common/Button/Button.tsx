import React from "react";
import trash from "../../../graphics/trash.png";

export const Button = () => {
    return(
    <button className="article__btn-icon" type="submit">
        <img
            src={trash}
            alt="trash"
            className="article__btn-delete"
        />
    </button>
    );
};
