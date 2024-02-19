import React from "react";

const Button = ({ onClick, label }) => {
    return (
        <button
            className="bg-green-700 text-white px-4 py-1 rounded"
            type="button"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
