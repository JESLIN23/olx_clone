import React, { useContext, useEffect, useState } from 'react';
import { firebaseContext } from '../../store/Context';
import { Postcontext } from '../../store/PostContext';

import './View.css';
function View() {
  const {postDetails} = useContext(Postcontext)
  const [userDetails,setUserDetails] = useState([])
  const {firebase} = useContext(firebaseContext)
  useEffect(() => {
    const {userId} = postDetails
    console.log(userId)
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
      })
    })
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>postDetails.name</span>
          <p>{postDetails.catagory}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.name}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
