import React, { useState } from "react";

const RegularCounter = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    function handleReset() {
        setCount(0);
    }
    return (
        <>
            <h1>Test Counter</h1>
            <h2> {count} </h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

export default RegularCounter;
