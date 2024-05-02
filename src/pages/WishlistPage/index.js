import React from "react";
import './style.css';

import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Rating from '@mui/material/Rating';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const WishlistPage = ({data , removeFromWishlist , clearWishlist}) =>{
    return(
        <>
        <div className="breadcrumWrapper mb-4">
          <div className="container-fluid">
            <h6 className="text-black">
              {" "}
              <Link to={"/"} className="text-black ">
                <HomeOutlinedIcon />
                Home
              </Link>{" "}
              &nbsp; <ChevronRightIcon /> &nbsp;{" "}
              <Link to={"/listing"} className="text-black ">
                {" "}
                <ShoppingBagOutlinedIcon /> Shop
              </Link>{" "}
              &nbsp; <ChevronRightIcon /> <FavoriteBorderOutlinedIcon />{" "}
              Wishlist{" "}
            </h6>
          </div>
        </div>

        <div className='cartSection mb-5'>
            <div className='container-fluid'>
                <div className='row'>
                        <div className='carthead d-flex align-items-center  w-100 mb-2'>
                             <div className='left'>
                                <h3 className='hd mb-3'> Your Wishlist</h3>
                                 <p> There are <span className='text-g '>{data.length}</span> Products in your Wishlist. </p>
                             </div>
                                <span className='clearCart d-flex align-items-center cursor' onClick={()=>{clearWishlist()}}> <DeleteOutlineOutlinedIcon  /> Clear Wishlist</span>
                         </div>

                         <div className='cartWrapper'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead className="justify-center">
                                        <tr>
                                            <th>Products</th>
                                            <th>Discription</th>
                                            <th>Price</th>
                                            <th>Old_Price</th>
                                            <th>Tag</th>
                                            <th>Company</th>
                                            <th>Availability</th>
                                            <th>Ratting</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody className=" align-items-center">
                                        {

                                        data.map((item,index)=>{
                                            return(
                                                
                                              <tr key={index}>
                                                <td>

                                                <div className=''>
                                                     <div className='img'>
                                                        <img src={item.picture} />
                                                    </div>
                                                </div>
                                            </td>
                                            
                                            <td className="text-wrap"><div className='info'>
                                                        <Link><h4 > {item.description} </h4></Link>
                                                    </div> </td>
                                            <td className='unitprice'> ${item.price} </td> 
                                            <td className='unitprice'> ${item.old_price} </td> 
                                            <td className="fs-5">{item.tag} </td>
                                            <td className="fs-7 text-wrap"> {item.company_name}  </td>
                                            <td className="fs-5"> {item.Availability} </td>
                                            <td > <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly className='mt-1' /> <span className='text-black '>(3.5)</span> </td>
                                            <td> <DeleteOutlineOutlinedIcon className="fs-2 cursor" onClick={()=>removeFromWishlist(index)} /> </td>
                                        </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>    
                            </div>
                         </div>
                </div>
                <div className="carthead d-flex align-items-center mt-4 mb-0 w-100">
              <div className="bottomBtn">
                <Button className="leftBtn ">
                  {" "}
                  <ArrowBackIcon />{" "}
                  <Link
                    to="/listing"
                    className="text-white text-decoration-none"
                  >
                    continue shopping
                  </Link>{" "}
                </Button>
              </div>
            </div>
            </div>
        </div>
      </>
    )
}

export default WishlistPage;