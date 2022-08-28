import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import {collection,getDocs} from "firebase/firestore"
import fireDB from '../fireconfig';
//import { fireproducts } from '../firecommerce-products';

 


function Homepage() {
const[products,setProducts]=useState([])
 useEffect(()=>{
  getData()
 },[])

       async function getData(){
        try {
        
          const users=await getDocs(collection(fireDB, "products"));
const productsArray=[]
users.forEach((doc) => {
  
  const obj={
    id:doc.id ,
    ...doc.data()
  }
  productsArray.push(obj)
});
 setProducts(productsArray)
        } catch (error) {
         console.log(error)
        }
          } 
  return (
    <Layout>
      <h4>homepage</h4>
        
        
    </Layout>
  )
}

export default Homepage
