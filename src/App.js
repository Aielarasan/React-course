import './App.css';
import axios from 'axios';

import { useState, useEffect } from "react";
import ProductsData from './Components/Coursedetails';
import Addcourse from './Components/Addcourse';
function App() {
  let url = 'http://localhost:3000/products';
 
  const [data,setData]=useState([])
 useEffect(()=>{
axios.get(url).then(res=>{
   setData(res.data)

  
})

 })
 console.log(data);

  const onclickSubmit=async(productData)=>{
    console.log(productData);
    const id =data.length===0?1:data[data.length-1].id+1
    await axios.post(url,{id:id,...productData})
  }
  const onDeleteClick=async(productData)=>{
    // console.log(productData);
    await axios.delete(`${url}/${productData}`)
  }
  return (
    <div className="App">
         
      <Addcourse onclickSubmit={onclickSubmit}/>
      <ProductsData data={data} onDeleteClick={onDeleteClick}/>
    </div>
  );
}

export default App;
