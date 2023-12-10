// GlobalContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        dataFromAPI: null, 
    });

    const updateDataFromAPI = (data) => {
        setGlobalState({
            ...globalState,
            dataFromAPI: data,
        });
    };

    return (
        <GlobalContext.Provider value={{ globalState, updateDataFromAPI }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
