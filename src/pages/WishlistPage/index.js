import React from "react";
import './style.css';

import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Image2 from '../../assets/images/Fruits/cat-11.jpg';
import Image3 from '../../assets/images/Fruits/cat-12.jpg';
import Rating from '@mui/material/Rating';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const WishlistPage = ({data , removeFromWishlist}) =>{
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
              &nbsp; <ChevronRightIcon /> <AddShoppingCartOutlinedIcon />{" "}
              Wishlist{" "}
            </h6>
          </div>
        </div>

        <div className='cartSection mb-5'>
            <div className='container-fluid'>
                <div className='row'>
                        <div className='carthead d-flex align-items-center  w-100'>
                             <div className='left'>
                                <h3 className='hd mb-0'> Your Wishlist</h3>
                                 <p> There are <span className='text-g '>{data.length+2}</span> Products in your Wishlist. </p>
                             </div>
                                <span className='clearCart d-flex align-items-center cursor' > <DeleteOutlineOutlinedIcon/> Clear Wishlist</span>
                         </div>

                         <div className='cartWrapper'>
                            <div className='table-responsive'>
                                <table className='table mb-4'>
                                    <thead>
                                        <tr>
                                            <th>Products</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {

                                        data.map((item,index)=>{
                                            return(
                                                
                                              <tr key={index}>
                                                <td>

                                                <div className='d-flex align-items-center'>
                                                   
                                                     <div className='img'>
                                                        <img src={item.picture} />
                                                    </div>
                                                    <div className='info'>
                                                        <Link><h4> {item.description} </h4></Link>
                                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly className='mt-1' /> <span className='text-black '>(3.5)</span>
                                                    </div> 
                                                </div>
                                            </td>

                                            <td className='unitprice'> {item.price} </td> 

                                            <td className='subTotal '> ${item.price*inputValue} </td>
                                            <td>   <DeleteOutlineOutlinedIcon className='delete' onClick={() =>  removeProduct(index)} /> </td>
                                           
                                        </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                     <div className='img'>
                                                        <img src={Image2} />
                                                    </div>
                                                    <div className='info'>
                                                        <Link><h4> Mangoes, juicy and refreshing.</h4></Link>
                                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly className='mt-1' /> <span className='text-black '>(4.5)</span>
                                                    </div> 
                                                </div>
                                            </td>

                                            <td className='unitprice'>$5.52</td>  

                                            <td className='subTotal '>$5.52</td>
                                            <td> <DeleteOutlineOutlinedIcon className='delete'/> </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                     <div className='img'>
                                                        <img src={Image3} />
                                                    </div>
                                                    <div className='info'>
                                                        <Link><h4> Organic raspberries, tart and juicy.</h4></Link>
                                                        <Rating name="half-rating-read" defaultValue={4.0} precision={0.5} readOnly className='mt-1' /> <span className='text-black '>(4.0)</span>
                                                    </div> 
                                                </div>
                                            </td>

                                            <td className='unitprice'>$3.50</td>  

                                            <td className='subTotal '>$3.50</td>
                                            <td> <DeleteOutlineOutlinedIcon className='delete'/> </td>
                                        </tr>
                                    </tbody>
                                </table>    
                            </div>
                         </div>

                </div>
            </div>
        </div>
      </>
    )
}

export default WishlistPage;