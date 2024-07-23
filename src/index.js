import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            firebase,
            auth,
            firestore
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>
);
