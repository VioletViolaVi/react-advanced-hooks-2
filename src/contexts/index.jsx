import React, { useState, useContext, createContext } from "react";

const ___Context = createContext();

export const ___Provider = ({ children }) => {
    const [$$$, set$$$] = useState();

    return (
        <___Context.Provider value={{ $$$, set$$$ }}>
            {children}
        </___Context.Provider>
    );
};

export const use___ = () => useContext(___Context);
