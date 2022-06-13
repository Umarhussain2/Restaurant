import react,{useEffect, useffect} from "react";
import React from 'react'
import {useNavigate } from 'react-router-dom'
import axios from "axios"
import {useCookies} from "react-cookie";
import {ToastContainer,toast} from "react toastify";

function Secret() {

  var firstimage = require('./images/firstimage.jpg')
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookies] = useCookies([]);
  useEffect(()=> {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/");
      }
      else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookies("jwt");
          navigate("/login");
        }
        //  else toast(`HI ${data.user}`)
      }
    };
    verifyUser();
  },[cookies, navigate]);
  
  const logOut = () => {
    removeCookies("jwt")
    navigate('/signin')
  }

  return <div className='main-wrapper'>
      <div className='description'>
         
          <button className='header-btn logout-btn' onClick={logOut}>Log Out</button>
      </div>
      <img className='desc-image' src={firstimage} alt='image'/>
      <ToastContainer/>
    </div>
}

export default Secret