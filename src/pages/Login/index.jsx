import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function Login() {
    const goTo = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const { setUser } = useAuth();

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await setUser(inputValue);
        goTo("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="username"
                onChange={handleInput}
                value={inputValue}
            />
            <br />
            <input type="submit" />
        </form>
    );
}
