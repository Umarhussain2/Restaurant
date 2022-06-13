import React,{useState} from 'react'
import {Link,useNavigate } from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify' 
import axios from "axios"

function Signup() {

  let navigate = useNavigate()

    

    let [value, setValues] = useState({
      name: "",
      email: "",
      password: "",
    })

const generateError = (err) => 
toast.error(err,{
position: "top-left",
})

    let handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(values)
        try{
          let { data } = await axios.post("http://localhost:4000/signup", {
            ...value,
          },{
            withCredentials: true,
          });
          console.log(data)
          if(data){
            if(data.errors) {

               const { name,email,password } = data.errors;
                if (name) generateError(name);
                else if (email) generateError(email);
                else if (password) generateError(password);
            } else {
            navigate("/signin")
            }
            }

       } catch (err) {
          console.log(err)
        }
    }

  return (
    <div className='login-wrapper'>
    <form className='create-form' onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
    <div>
      <label>Name</label><br></br>
      <input className='box' name='name' placeholder='Name' onChange={(e)=> setValues({...value, [e.target.name]: e.target.value})}/>
    </div>  
    <div>
      <label>Email</label><br></br>
      <input className='box' name='email' placeholder='Email' onChange={(e)=> setValues({...value, [e.target.name]: e.target.value})}/>
    </div>
    <div>
      <label>Password</label><br></br>
      <input className='box' name='password' placeholder='Password' type='password' onChange={(e)=> setValues({...value, [e.target.name]: e.target.value})}/>
    </div>
    <br/>
    <button className='login-button'><b>Sign Up</b></button>
    <br/><hr/>
      Already A User ? <Link to='/' className='link-click'>Signin</Link>
  </form>
  <ToastContainer/>
  </div>
  )
}

export default Signup