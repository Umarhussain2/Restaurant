import React from "react";
import {Link} from 'react-router-dom'
import  { useContext } from 'react'
import { Foodcontext } from '../App';

function Header() {
  let context = useContext (Foodcontext)
  return (
    <div className="header-top">
      <div>
        <div className="bluepost">The La poma</div>
        <div className="eps">TRADITIONAL FOOD SERVED</div>
      </div>
      <div>
        <Link to='/'><button className="ops">HOME</button></Link>
        <Link to='/signup'><button className="ops">SIGNUP</button></Link>  
      <Link to = '/signin'><button className="ops">SIGNIN</button></Link>
      
      </div>
    </div>
  );
}

export default Header;
