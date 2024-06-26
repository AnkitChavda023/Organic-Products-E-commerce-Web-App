import React, { useEffect, useState } from 'react';
import {Link}  from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';


 import GooglePay from '../../assets/images/payments/google-pay-icon.png';
import ApplePay from '../../assets/images/payments/apple-pay-icon.png';
import AmazonPay from '../../assets/images/payments/amazon-a-logo-icon.png';
import Paypal from '../../assets/images/payments/paypal-color-icon.png';
import Upi from '../../assets/images/payments/upi-icon.png';


import './style.css';


const CartPage = ({data, removeProduct , clearCartItems})=>{
  
 
  const [showFirstContent, setShowFirstContent] = useState(true);
  const [showSecondContent, setShowSecondContent] = useState(false);



  const handleFirstButtonClick = () => {
    setShowFirstContent(true);
    setShowSecondContent(false);
  };

  const handleSecondButtonClick = () => {
    setShowFirstContent(false);
    setShowSecondContent(true);
  };

    const [countryValue , setcountryValue] = useState('');
    const setCounty = () =>{
        setcountryValue(countryValue);
    }

    const [inputValue, setinputValue] = useState(1);

    const plus = () => {
        setinputValue(inputValue + 1);
    }
        
    const minus = () => {
        if (inputValue !== 1) {
        setinputValue(inputValue - 1);
        }
    }

    return (
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
              Cart{" "}
            </h6>
          </div>
        </div>

        <div className='cartSection mb-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='carthead d-flex align-items-center  w-100 mb-0'>
                             <div className='left'>
                                <h3 className='hd mb-2'> Your Cart</h3>
                                 <p> There are <span className='text-g '>{data.length}</span> Products in your Cart. </p>
                             </div>
                                <span className='clearCart d-flex align-items-center cursor' onClick={()=>{clearCartItems()}}> <DeleteOutlineOutlinedIcon  /> Clear Cart</span>
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

                                            <td>
                                            <div className='addCartSection pt-4 pb-4 d-flex align-items-center '>
                                                <div className= 'counterSec'>
                                                    <span className='arrow plus' onClick={plus}><ArrowDropUpIcon /></span>
                                                    <input type='number' value={inputValue} />
                                                    <span className='arrow minus' onClick={minus}><ArrowDropDownIcon /></span>
                                                </div>
                                            </div>
                                            </td>   

                                            <td className='subTotal '> ${item.price*inputValue} </td>
                                            <td>   <DeleteOutlineOutlinedIcon className='delete' onClick={() => removeProduct(index)} /> </td>
                                           
                                        </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>    
                            </div>
                         </div>

                         <div className='subTotaldis d-flex align-items-center mb-2'>
                                <h6 className='mb-0'>Subtotal</h6>
                                <h5 className='mb-0'> <span  className='text-g '> $12.49 </span></h5>
                             </div> 
                             <div className='subTotaldis d-flex align-items-center mb-2'>
                                <h6 className='mb-0'>Shipping</h6>
                                <h5 className='mb-0'> <span  className='text-black'> Free </span></h5>
                             </div> 
                             <div className='subTotaldis d-flex align-items-center mb-2'>
                                <h6 className='mb-0'>Estimate for </h6>
                                <h5 className='mb-0'> <span  className='text-black'> India </span></h5>
                             </div> 
                             <div className='subTotaldis d-flex align-items-center mb-2'>
                                <h6 className='mb-0'>Total</h6>
                                <h3 className='mb-0'> <span  className='text-g'> $12.49</span></h3>
                             </div>
                             <hr/>

                         <div className='carthead d-flex align-items-center mt-4 mb-0 w-100'>
                             <div className='bottomBtn'>
                             <Button className='leftBtn '> <ArrowBackIcon/> <Link to="/listing" className='text-white text-decoration-none'>continue shopping</Link> </Button>
                             </div>
                             <div className='bottomBtn'>
                             <Button className='leftBtn'> <LoopOutlinedIcon/> upadate cart </Button>
                             </div>
                                
                         </div>
                    </div>

                    <div className='col-md-5 pl-5 mt-10'>
                        <div className='card  p-4 shadow mt-4'>
                             <div className='delivery d-flex align-items-center mb-1'>
                                <h4 className='mb-0'>Delivery Info.</h4>
                             </div> <hr/>
                             <div className=' deliveryinfoData d-flex align-items-center  mb-4'>
                                <div className='dataInfo'>
                                    <h6 className='mb-0'>First Name*</h6>
                                    <input type="text" placeholder="Robert" required/>
                                </div>
                                <div className='dataInfo'>
                                    <h6 className='mb-0'>Last Name*</h6>
                                    <input type="text" placeholder="Damos" required/>
                                </div>
                             </div>

                            
                            <div className='Address  mb-4'>
                                
                                <h6 className='mb-0 d-flex align-items-center'>Address*</h6>
                                <input type="text" placeholder="Block-35, Tech-city, Ahmedabad" required/>
                                
                            </div>
                            
                             <div className=' deliveryinfoData d-flex align-items-center  mb-4'>
                                <div className='dataInfo'>
                                    <h6 className='mb-0'>City*</h6>
                                    <input type="text" placeholder="Ahmedabad" required/>
                                </div>
                                <div className='dataInfo'>
                                    <h6 className='mb-0'>State</h6>
                                    <input type="text" placeholder="Gujarat" />
                                </div>
                             </div> 
                             <div className=' deliveryinfoData d-flex align-items-center  mb-4'>
                                <div className='dataInfo'>
                                    <h6 className='mb-0'>Zip*</h6>
                                    <input type="number" placeholder="Zip Code" required/>
                                </div>
                                <div className='dataInfo'>
                                    <h6 className='mb-0'>Phone*</h6>
                                    <input type="text" placeholder="+91 898-895-4586" required/>
                                </div>
                             </div> 
                            
                         </div>

                         <div className='card  p-4 shadow mt-3'>
                            <div className='Payment d-flex align-items-center mb-1'>
                                <h3 className='mb-0'>Payment</h3>
                                <div className='paymentType'>
                                    <Button onClick={handleFirstButtonClick}> Card </Button>
                                    <Button onClick={handleSecondButtonClick}> UPI </Button>
                                </div>
                             </div>
                             <hr/>
                             
                             { showFirstContent &&
                                (<div>
                                    <div className='Address  mb-4'>
                                        <h6 className='mb-0 d-flex align-items-center'>Card Number *</h6>
                                        <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" required/>
                                    </div>
                                    <div className=' deliveryinfoData d-flex align-items-center  mb-4'>
                                      <div className='dataInfo'>
                                        <h6 className='mb-0'>Expiry *</h6>
                                        <input type="text" placeholder="mm/yyyy" required/>
                                      </div>
                                    <div className='dataInfo'>
                                        <h6 className='mb-0'>CVC *</h6>
                                        <input type="text" placeholder="xxx" />
                                    </div>
                                   </div> 
                                </div>
                                )
                             }

                             { showSecondContent &&
                                (<div>
                                    <div className='Address  mb-4'>
                                        <h6 className='mb-0 d-flex align-items-center'>UPI Id*</h6>
                                        <input type="text" placeholder="abc@okhdfcbank" required/>
                                    </div>
                                    <hr/>

                                    <div className=' deliveryinfoData d-flex align-items-center  mb-4'>
                                      <div className='dataInfo'>
                                        <div className="align-atems-center socialHandle">
                                                <ul className="image list list-inline">
                                                    <li className="list-inline-item">
                                                        <Link to=""><img  className='googlepay' src={GooglePay} /></Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to=""><img className='googlepay' src={AmazonPay} /></Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to=""> <img src={Paypal}/> </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to=""> <img src={ApplePay} /> </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to=""> <img src={Upi} className=''/> </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                     </div>
                                   </div> 
                                </div>
                                )
                             }

                             <div className='subTotaldis d-flex align-items-center mb-0'>
                                <Button className='checkOutBtn'> Proceed to CheckOut <ShoppingCartCheckoutOutlinedIcon/></Button>
                             </div>
                         </div>

                    </div>

                </div>
            </div>
        </div>
      </>
    );
}

export default CartPage;    