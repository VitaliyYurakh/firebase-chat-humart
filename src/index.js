import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBDzQITOC9RlEIFERSCRVvB_a6ztMMEBXw",
    authDomain: "third-ui.firebaseapp.com",
    databaseURL: "https://third-ui-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "third-ui",
    storageBucket: "third-ui.appspot.com",
    messagingSenderId: "924310054290",
    appId: "1:924310054290:web:cf13d47209cb7550458d4b"
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
