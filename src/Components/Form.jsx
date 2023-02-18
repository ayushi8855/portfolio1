import React, { useState } from 'react'
import "./form.css"
const Form = () => {
    const [data ,setdata] =useState({})
   
    const handlechange=(e)=>{
     const {name,value}=e.target
     setdata({
        ...data,
        [name] :value
     })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (

    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' className="tech-icons" onChange={handlechange} name="name"/>
            <input type="text" placeholder='Email' className="tech-icons" onChange={handlechange} name="email"/>
            <input type="submit" value="Send" className='btn-1' />
        </form>
    </div>
  )
}

export default Form