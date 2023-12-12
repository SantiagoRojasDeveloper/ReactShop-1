// GlobalContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        dataFromAPI: null,
        listProductsHome: null,
        cartProducts: null
    });

    const updateDataFromAPI = (data) => {
        setGlobalState(prevState => ({
            ...prevState,
            dataFromAPI: data,
        }));
    };

    const updateCartProducts = (data) => {
        setGlobalState(prevState => ({
            ...prevState,
            cartProducts: data,
        }));
    };

    const updateListProductsHome = (data) => {
        setGlobalState(prevState => ({
            ...prevState,
            listProductsHome: data,
        }));
    };

    return (
        <GlobalContext.Provider value={{ globalState, updateDataFromAPI, updateCartProducts, updateListProductsHome }}>
            {children}
        </GlobalContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
