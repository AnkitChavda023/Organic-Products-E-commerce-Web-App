import React, { useState } from "react";

import './style.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from "react-router-dom";
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import axios from 'axios';

const RegisterPage = ()=>{

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');


  async function submit(e){
    e.preventDefault();

    try{
          await axios.post('http://127.0.0.1:8000/register',
           {username , email, mobile, password, ConfirmPassword
          })
          .then(res=>{
            if(res.data ==="exist"){
              alert("user Already exist");
            }
            else if(res.data ==="success"){
              alert("Registered successfully");
            }
          })
          .catch(e =>{
            alert("wrong details");
          } )
    }

    catch(e){
        console.log(e);
    }
  }

    return(
        <>
        
        <div className="RegisterPageWrapper">
           <div className='box'>
           <form action="POST">
            <h1> Register </h1>

            <div className="input-box">
              <input type="text" onChange={(e) =>{ setUsername(e.target.value) }} placeholder="Enter Username" required />
              <PersonIcon  className='icon'/>
            </div>
            <div className="input-box">
              <input type="text" onChange={(e) =>{ setMobile(e.target.value) }} placeholder="Enter Mobile" required />
              <MobileFriendlyOutlinedIcon  className='icon'/>
            </div>
            <div className="input-box">
              <input type="email" onChange={(e) =>{ setEmail(e.target.value) }} placeholder="Enter Email Address" required />
              <MarkEmailReadOutlinedIcon  className='icon'/>
            </div>

            <div className="input-box">
              <input type="password" onChange={(e) =>{ setPassword(e.target.value) }} placeholder="Enter Password" required />
              <LockIcon  className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" onChange={(e) =>{ setConfirmPassword(e.target.value) }} placeholder="Enter Confirm Password" required />
              <LockPersonOutlinedIcon  className='icon'/>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button type="submit" onClick={submit}> Register</button>

            <div className="register-link">
              <p>
                Already have an account? <Link to="/login">Sign  in</Link>
              </p>
            </div>
          </form>
           </div>
        </div>

        </>
    );
}
export default RegisterPage;