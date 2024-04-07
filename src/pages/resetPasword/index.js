import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';


const ResetPassword = ()=>{
    return (
      <>
        <div className="loginPageWrapper">
           <div className='box'>
           <form action="">
            <h1>Reset Password </h1>

            <div className="input-box">
              <input type="password" placeholder="Enter Current Password" required />
              <LockIcon  className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Enter New Password" required />
              <LockIcon  className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Enter Confirm Password" required />
              <LockPersonOutlinedIcon  className='icon'/>
            </div>


            <button type="submit">Set Password</button>

            <div className="register-link">
              <p>
                Back to  <Link to="/login">Login page</Link>
              </p>
            </div>
          </form>
           </div>
        </div>
      </>
    );
}
export default ResetPassword;