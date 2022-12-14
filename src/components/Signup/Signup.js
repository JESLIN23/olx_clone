import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import { firebaseContext } from '../../store/Context';
import './Signup.css';

export default function Signup() {
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNo,setPhoneNo] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(firebaseContext)
  const history = useHistory()

  const signupHandler = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
      result.user.updateProfile({displayName: userName}).then(()=> {
        // console.log(result)
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          name: userName,
          phone: phoneNo
        }).then(() => {
          history.push('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        {/* <img width="200px" height="200px" src={Logo} alt=''></img> */}
        <form onSubmit={signupHandler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"       
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
