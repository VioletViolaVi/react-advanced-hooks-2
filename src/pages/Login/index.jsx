/* (OG one)

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

export default function Login() {
    const [inputValue, setInputValue] = useState("");
    const {setUser} = useAuth();
    const inputRef = useRef();

    const goTo = useNavigate();

    function handleInput(e) {
        setInputValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // set global variable for user
        setUser(inputValue);

        goTo("/");
    }

    useEffect(() => {
        return inputRef.current.focus();  
    }, []);    

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" onChange={handleInput} value={inputValue} placeholder="username" autoComplete="off"/>
            <br />
            <input type="submit" />
        </form>
    );
}
*/

/* 
    taken from ==> https://dmitripavlutin.com/react-useref-guide/
    (another reason why useRef would be used)
*/
import React from 'react';
import { useRef, useState, useEffect } from 'react';

export default function Stopwatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
