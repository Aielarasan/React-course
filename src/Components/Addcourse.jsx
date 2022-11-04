
import React, { useState } from 'react'

export default function Addcourse(props) {
    const [courseName,setcourseName]=useState()
    const [courseDuration,setcourseDuration]=useState()
    const [price,setPrice]=useState()


     

     function handlecourseNameChange(e) {
       
        setcourseName(e.target.value)
    }

    function handlecourseDurationChange(e) {
       
        setcourseDuration(e.target.value)

    }

  

    

    function handlePriceChange(e) {
        
        setPrice(e.target.value)

    }


   
    async function handleFormSubmit (e) {
        
        e.preventDefault();
    const data={
        courseName:courseName,
        courseDuration:courseDuration,
        
        price:price
    }

    props.onclickSubmit(data)
    setcourseName("")
    setcourseDuration("")
   
    setPrice("")

    }

    return (
        <div>
            <input type="text" value={courseName} onChange={handlecourseNameChange} placeholder="courseName"/>
            <input type="text" value={courseDuration} onChange={handlecourseDurationChange} placeholder="courseDuration"/>
            
            <input type="text" value={price} onChange={handlePriceChange} placeholder="price"/>
            <button onClick={handleFormSubmit} type='submit'>submit</button>
        </div>
    )
}
