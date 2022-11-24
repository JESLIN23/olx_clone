import React, { useContext, useState } from 'react';
import { firebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const {firebase} = useContext(firebaseContext)
  const history = useHistory()
  const loginHandler = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/')
    }).catch((error) => [
      alert(error.message)
    ])
  }
  return (
    <div>
      <div className="loginParentDiv">
        {/* <img width="200px" height="200px" src={Logo}>  </img> */}
        <form onSubmit={loginHandler}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/Signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
