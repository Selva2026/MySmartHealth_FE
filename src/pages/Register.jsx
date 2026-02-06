import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {


    const [formData, setFormData]=useState({
        name:"", email:"", password:""
    })
const [error, setError]=useState("");
const handleChange=(e)=>{

    setFormData({
        ...formData, [e.target.name]: e.target.value
    })

}

const handleSubmit= async(e)=>{
    e.preventDefault();

const res = await axios.post("http://localhost:5000/api/auth/regis", formData);
console.log(res.data);

if(res.data.error){
setError(res.data.error);
}else{
    setError("Registration Successfull");
}

}
  return (
    <div className='border h-dvh flex justify-center items-center'>
    <div className='border flex justify-center p-4'>
        <div className='flex flex-col gap-2 items-center'>
  <h1 className='p-4 text-3xl text-green-600 font-bold'>REGISTER PAGE</h1>
  <p className='text-red-500'>{error}</p>
<form className='flex flex-col gap-2 items-center' onSubmit={handleSubmit}>
  <input className='border p-2 rounded ' name='name' value={formData.name} onChange={handleChange} placeholder='Name'/>
  <input className='border p-2 rounded  ' name='email' value={formData.email} onChange={handleChange} placeholder='Email'/>
  <input className='border p-2 rounded  ' type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password'/>

  <button type='submit' className='border rounded bg-green-700 cursor-pointer px-4 p-1 text-white font-bold text-3xl'>Register</button>
  </form>
  <Link className='underline' to="/">Go to Login</Link>
  </div>
 
  </div>
 
</div>
  )
}

export default Register
