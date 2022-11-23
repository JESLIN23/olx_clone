import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { firebaseContext } from './store/Context';
import Context from './store/Context';
import firebase from './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <firebaseContext.Provider value={{firebase}}>
        <App />
      </firebaseContext.Provider>
    </Context>
    
  </React.StrictMode>
);


