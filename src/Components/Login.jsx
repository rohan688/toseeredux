
import "./Login.css"
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginfailure, loginloading, loginsuccess } from '../Redux/Login/action';
import { store } from '../Redux/store';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
   const lodding = useSelector(store => store.login.loading);
   const error = useSelector(store => store.login.error);
   const token = useSelector(store => store.login.token);

    const handleSubmit =()=>{
        const payload={
            email,
            password
        };
        dispatch(loginloading())   //set loading status to true
        axios.post("https://authmyapp.herokuapp.com/login",payload )
        .then((res)=>{
            dispatch(loginsuccess(res.data.token))
          
        }).catch(err=>{
            dispatch(loginfailure(error))
            console.log(err.massage)
        })
    }
    if(token){
      return <Navigate to="/"/>
  }
  


  return (
    <div className='login_form'>
         <input type="email"
         placeholder='Enter your mail'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         /> <br />
         <input type="password"
         placeholder='Enter your Password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         /> <br />
         <button onClick={handleSubmit}>Submit</button>
           {lodding && <div>...Loading</div>}
    </div>
  )
}

export default Login