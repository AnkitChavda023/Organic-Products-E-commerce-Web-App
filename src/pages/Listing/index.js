import React, { useEffect, useState } from 'react';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import Product from '../../components/product/index';
import { Button } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

const Listing = ()=>{


    const [productData , setproductData] = useState([]);

 
  useEffect(()=>{
    getData('http://localhost:3000/products');

  } ,[]);

  const getData =  async(url)=>{
    try{

        await axios.get(url).then((response)=>{
            setproductData(response.data);
            
        })
    }
    catch(error){
      console.log(error);
    }
  }



    return (
      <section className="listingPage">
        <div className="container-fluid">
          <div className="breadCrum">
            <h1>Shop</h1>
            <p>
              {" "}
              <span>
                <HomeOutlinedIcon className="text-black" />
                &nbsp; <Link className="text-g">Home</Link>{" "}
              </span>
              &nbsp; <KeyboardArrowRightOutlinedIcon />
              <Link className="text-black">Shop</Link>
            </p>
          </div>

          <div className="listingData">
            <div className="row">
              <div className="col-md-3 sidebaWrpper">
                <Sidebar />
              </div>
              <div className="col-md-9 rightContent homeProducts pt-0 ">
                <div className="topStrip mt-4 d-flex align-items-center">
                  <p className="mb-0 ">
                    We found <span className="text-g">29</span> items for you!
                  </p>
                </div>
                <div className="row productRow pl-5 pr-4">
                  {productData.map((item, index) => (
                    <div key={index} className="item">
                      <Product data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Listing;