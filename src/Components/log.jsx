import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
   
    axios.defaults.withCredentials = true;
  
    const handleSubmit = (event) => {
        event.preventDefault()
        
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result =>{
            if(values.email="admin@gmail.com" && values.password==1234){
            navigate('/dashboard')
            }
            else{
                alert("Wrong Email or Password. Enter details as given in placeholder.")
            }
        })
        .catch(err => console.log(err))
   
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm '>
            <h2>Admin Login</h2><hr></hr>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input type="email" name='email' autoComplete='off' placeholder='Email:- admin@gmail.com' required
                    onChange={(e)=>setValues({...values,email:e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'> 
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input type="password" name='password' placeholder='Password:- 1234' required
                     onChange={(e)=>setValues({...values,password:e.target.value})}className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
