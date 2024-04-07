import React from "react";
import './style.css';
import PageNotFound from '../../assets/images/page-404.png';
import {Link} from "react-router-dom";
import { Button } from "@mui/material";

const NotFound = ()=>{
    return(
        <>
            <section className="notFound">
                <div className="container-fluid">
                    <div className="box">
                        <img src={PageNotFound}/>
                        <br/>
                        <h1>Page Not Found</h1>
                        <p>The link you clicked may be broken or 
                        the page may have been removed.visit the <Link to='/' className="text-g">Homepage</Link> &nbsp; or 
                        &nbsp;<Link to='/' className="text-g">&nbsp;Contact us</Link> about the problem.</p><br/>

                        <div className="d-flex">
                          <Link to="/" className="m-auto">  <Button className="btn">Back to Home Page</Button> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound;