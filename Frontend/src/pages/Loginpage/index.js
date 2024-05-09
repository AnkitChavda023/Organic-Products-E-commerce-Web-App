import React, { useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';

const LoginPage = ()=>{


  const [Email,setEmail] = useState('');
  const [Mobile,setMobile] = useState('');
  const [password,setpassword] = useState('');


  // async function submit(e) {
  //   e.preventDefault();

  //   try {
  //     await axios
  //       .post("http://127.0.0.1:8000/login", { Email, Mobile, password })
  //       .then((res) => {
  //         if (res.data === "exist") {
  //           alert("user Already exist");
  //         } else if (res.data === "success") {
  //           alert("Registered successfully");
  //         }
  //       })
  //       .catch((e) => {
  //         alert("wrong details");
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

    return (
      <>
        <div className="loginPageWrapper">
           <div className='box'>
           <form action="POST">
            <h1>Login </h1>

            <div className="input-box">
              <input type="text" onChange={(e) =>{ setEmail(e.target.value) }} placeholder="Username" required />
              <PersonIcon  className='icon'/>
            </div>
            <div className="input-box">
              <input type="text" onChange={(e) =>{ setMobile(e.target.value) }} placeholder="Mobile No." required />
              <MobileFriendlyOutlinedIcon  className='icon'/>
            </div>

            <div className="input-box">
              <input type="password" onChange={(e) =>{ setpassword(e.target.value) }} placeholder="Password" required />
              <LockIcon  className='icon'/>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/login/reset">Forgot password?</Link>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
           </div>
        </div>
      </>
    );
}
export default LoginPage;