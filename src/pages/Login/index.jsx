import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function Login() {
    const [inputValue, setInputValue] = useState("");

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInput} value={inputValue} placeholder="username" autocomplete="off"/>
            <br />
            <input type="submit" />
        </form>
    );
}
