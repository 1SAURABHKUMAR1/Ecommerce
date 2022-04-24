import { useState, useContext, createContext, useReducer } from 'react';

import {
    useSetLocalStorage,
    useGetLocalStorage,
} from '../../Hooks/useLocalStorage';

import AuthReducer from './AuthReducer';

const initalUserState = {
    login: false,
    token: '',
    user: {
        name: '',
        email: '',
        photo: '',
    },
};

const AuthContext = createContext(initalUserState);

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        login: useGetLocalStorage('login') ?? initalUserState.login,
        token: useGetLocalStorage('token') ?? initalUserState.token,
        user: useGetLocalStorage('user') ?? initalUserState.user,
    });

    const [userAuth, userAuthDispatch] = useReducer(AuthReducer, userData);

    useSetLocalStorage('login', userAuth.login);
    useSetLocalStorage('token', userAuth.token);
    useSetLocalStorage('user', userAuth.user);

    return (
        <AuthContext.Provider value={{ userAuth, userAuthDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthProvider = () => useContext(AuthContext);

export { AuthProvider, useAuthProvider };
