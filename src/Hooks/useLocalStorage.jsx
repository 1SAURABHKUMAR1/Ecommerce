import { useEffect } from 'react';

const useSetLocalStorage = (key, value) => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
};

const useGetLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export { useSetLocalStorage, useGetLocalStorage };
