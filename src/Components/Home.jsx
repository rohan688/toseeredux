import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginsuccess } from '../Redux/Login/action';

const Home = () => {
  ///for manage products 
  const [alldata, setAlldata] = useState([]);
  //navigation and token and dispatch
    const navigate = useNavigate();
    const token = useSelector(store=>store.login.token);
   const dispatch = useDispatch()

   // api request only when get token
   useEffect(()=>{
        if(token){
     axios.get("http://localhost:8080/data").then((res)=>{
       console.log(res.data)
       setAlldata([...res.data])
     })
   }},[])



  return (
    //handle user profile
    <div className='App'>
        <h1>{token?token:"plz login"}</h1>
        <h1>HOME PAGE</h1>
  
        <button onClick={() => navigate('/signup')}>Go to Signup</button>
        <button onClick={() => navigate('/login')}>Go to Login</button>
        <button onClick={()=>dispatch(loginsuccess(""))}>logout</button>

{/* //for rendring  products  when we get token */}

         {token?<div>
          {alldata.map((e)=>{

return (<div key={e.id} style={{border:"2px solid green",display:"flex", justifyContent:"space-between"}}>


    <div className='res_img' style={{ width:"200px", height:"200px", padding:"20px"}}>
        <img src={e.image} alt="" style={{width:"100%", height:"100%"}} />
    </div>
    <div className='res-details' style={{ width:"400px", height:"250px"}}>
        <h3>{e.name}</h3>
        {e.category.map((el)=>{
            return(
                <span key={el.id}>{el}, </span> 
            )
        })}
        <p>cost for one ₹ {e.cost_for_one}</p>
        <span>min ₹ 50  upto 30 min</span><br />
        
        <span>Accepts:
            {e.payment_method.card?"card,":""}
            {e.payment_method.cash?"cash,":""}
            {e.payment_method.upi?"upi":""}
            
            </span>
          
          
    </div>
    <div style={{width:"400px"}}>
        <h3>{e.rating}</h3>
        <span>Votes: {e.votes}</span><br />
        <span>Reviews: {e.review}</span>
    </div>
</div>)
  })}

         </div>:null}

    </div>
  )
}

export default Home