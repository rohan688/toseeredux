

import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup, signupError, signupLoading} from '../Redux/Signup/action';
// import { store } from '../Redux/store';

const Signup = () => {
     const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
   const loading = useSelector(store => store.signup.loading)
   const error = useSelector(store => store.signup.error)
   const token = useSelector(store => store.signup.token)

  //  console.log(token)

    const handleSubmit =()=>{
      const payload={
        username,
        email,
        password
      };
      //  dispatch(signupLoading())
        axios.post("https://authmyapp.herokuapp.com/register",payload )
        .then((res)=>{
            dispatch(signup(res.data.token))
            console.log(res.data.token)
        }).catch(err=>{
            dispatch(signupError(error))
            console.log(err.massage)
        })
        navigate("/")
    }
  return (
    <div>
         <input type="text"
         placeholder='Enter your name'
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         /> <br />
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
         <button onClick={handleSubmit}>Sign up</button>
           {loading && <div>...Loading</div>}
    </div>
  )
}

export default Signup