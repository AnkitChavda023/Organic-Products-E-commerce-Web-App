import React from "react";
import './style.css';

import img1 from '../../../assets/images/vegatable/cat-2.jpg';
import img3 from '../../../assets/images/Fruits/cat-11.jpg';
import img2 from '../../../assets/images/Fruits/cat-27.jpg';

import {Link} from 'react-router-dom';

import { Rating } from "@mui/material";


const TopProduct = (props)=>{
    return(
        <>
            <div className="topSelling_box">
                <h3>{props.title}</h3>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                        <img src={img1} className="w-100"/>
                        </Link>
                    </div>
                    <div className="info px-1">
                        <Link to="" > <h5> Important vegetable for its fleshy edible, colorful roots </h5>  </Link> 
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price">$10.50</span> <span className="oldPrice">$15.10</span>
                        </div> 
                    </div>
                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                        <img src={img2} className="w-100"/>
                        </Link>
                    </div>
                    <div className="info px-1">
                        <Link to="" > <h5> Citrus fruits with fragrant, leathery skin and juicy flesh </h5>  </Link> 
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price">$8.50</span> <span className="oldPrice">$10.10</span>
                        </div> 
                    </div>
                </div>
                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to="">
                        <img src={img3} className="w-100"/>
                        </Link>
                    </div>
                    <div className="info px-1">
                        <Link to="" > <h5> Ripe mangoes are juicy, fleshy, and delicious </h5>  </Link> 
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <div className="d-flex align-items-center">
                            <span className="price">$20.50</span> <span className="oldPrice">$25.10</span>
                        </div> 
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default TopProduct;