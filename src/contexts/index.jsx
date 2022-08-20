import React, { useState, useContext } from "react";

const ___Context = React.createContext();

export const ___Provider = ({ children }) => {
    const [$$$, set$$$] = useState();

    return (
        <___Context.Provider value={{ $$$, set$$$ }}>
            {children}
        </___Context.Provider>
    );
};

export const use___ = () => useContext(___Context);
