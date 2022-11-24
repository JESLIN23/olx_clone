import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { firebaseContext } from './store/Context';
import Context from './store/Context';
import firebase from './firebase/config'
import Post from './store/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Context>
      <Post>
        <firebaseContext.Provider value={{firebase}}>
          <App />
        </firebaseContext.Provider>
      </Post>  
    </Context>
    
  </React.StrictMode>
);


