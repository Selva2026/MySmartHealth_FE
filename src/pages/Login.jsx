import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
const navigate=useNavigate();
    const [formData, setFormData]=useState({
        email:"", password:""
    })
const [error, setError]=useState("");

const handleChange=(e)=>{

    setFormData({
        ...formData, [e.target.name]: e.target.value
    })

}

const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
  
      console.log(res.data);
  
      setError(res.data.message);
      navigate("/dash");
  
    } catch (err) {
      console.log(err);
  
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      }
    }
  };
  
  return (
    <div className='border h-dvh flex justify-center items-center'>
        <div className='border flex justify-center p-8'>
        <div className='flex flex-col gap-2 items-center'>
  <h1 className='p-4 text-3xl text-green-600 font-bold'>LOGIN PAGE</h1>
  <p className='text-red-500'>{error}</p>
<form className='flex flex-col gap-2 items-center' onSubmit={handleSubmit}>
  <input className='border p-2 rounded  ' name='email' value={formData.email} onChange={handleChange} placeholder='Email'/>
  <input className='border p-2 rounded  ' type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password'/>

  <button type='submit' className='border rounded bg-green-700 cursor-pointer px-4 p-1 text-white font-bold text-3xl'>LOGIN</button>
  </form>
  <Link className='underline' to="/regis">Go to Register</Link>

  </div>
      </div>
    </div>
  )
}

export default Login
