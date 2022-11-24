import React,{useEffect, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { authContext, firebaseContext } from './store/Context';

function App() {
  const {setUser} = useContext(authContext)
  const {firebase} = useContext(firebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=> {
      setUser(user)
    })
  })
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/viewpost'>
          <ViewPost/>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
