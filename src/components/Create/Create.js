import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { authContext, firebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState('')
  const [catagory, setCatagory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const {firebase} = useContext(firebaseContext)
  const {user} = useContext(authContext)
  const history = useHistory()
  const date = new Date()

  const submitHandler = ((e) => {
    e.preventDefault()
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
    ref.getDownloadURL().then((url) => {
      console.log(url)
      firebase.firestore().collection('products').add({
        name,
        catagory,
        price,
        url,
        userId: user.uid,
        createdAt: date.toDateString()
      })
      history.push('/')
      })
    })
  })
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e) => setCatagory(e.target.value)}
              value={catagory}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" onChange={(e) => setPrice(e.target.value)} value={price}/>
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
          <form>
            <br />
            <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
            <br />
            <button className="uploadBtn" onClick={submitHandler}>upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
