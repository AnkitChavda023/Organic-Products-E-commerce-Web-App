import React from 'react';
import './style.css';
import LockIcon from '@mui/icons-material/Lock';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';


const ResetPasswordReq = ()=>{
    return (
      <>
        <div className="loginPageWrapper">
           <div className='box'>
           <form action="">
            <h1>Reset Password </h1>

            <div className="input-box">
              <input type="text" placeholder="Enter Email address" required />
              <MarkEmailReadOutlinedIcon  className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Enter Current Password" />
              <LockIcon  className='icon'/>
            </div>
           

            <button type="submit">Send Request</button>


          </form>
           </div>
        </div>
      </>
    );
}
export default ResetPasswordReq;