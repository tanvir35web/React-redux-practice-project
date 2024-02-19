import React from "react";

const Button = ({ onClick, label }) => {
    return (
        <button type="button" onClick = {onClick}>
            {label}
        </button>
    );
};

export default Button;
