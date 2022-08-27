import React from 'react'
import Layout from '../Components/Layout'
import {collection,addDoc} from "firebase/firestore"
import fireDB from '../fireconfig';

 


function Homepage() {

  async function addData(){
    const docRef = await addDoc(collection(fireDB, "users"), {
      name: "Rajeena",
      age: 33
    });
       } 
  return (
    <Layout>
      <h4>homepage</h4>
        <button onClicl={addData}>Add data to firebase</button>
    </Layout>
  )
}

export default Homepage
