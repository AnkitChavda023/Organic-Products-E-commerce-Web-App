import React from "react";
import "./style.css";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button } from "@mui/material";


const NewsLatter = ()=>{
    return(
        <>
         <div className="newslatterBanner">
            <SendOutlinedIcon/>
            <input type="text" placeholder="Your email address"></input>
            <Button>Subscribe</Button>
        </div>

        </>
    );
}

export default NewsLatter;