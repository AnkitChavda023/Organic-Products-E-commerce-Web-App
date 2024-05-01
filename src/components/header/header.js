import React, { useEffect, useRef, useState } from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from '@mui/icons-material/Search';
import Select from "../selectDrop/select";
import axios from "axios";

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import iconCompare from '../../assets/images/icon-compare.svg';
import iconHeart from '../../assets/images/icon-heart.svg';
import iconCart from '../../assets/images/icon-cart.svg';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import Button from '@mui/material/Button';

import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import Nav from './nav/nav';
import { Link } from "react-router-dom";

const Header = ({data , wishlistItems}) => {
 

     const [categories, setCategories] = useState([
            'All Categories',
            'Milks and Dairies',
            'Wines & Drinks',
            'Clothing & beauty',
            'Fresh Seafood',
            'Pet Foods & Toy',
            'Fast food',
            'Baking material',
            'Vegetables',
            'Fresh Fruit',
            'Bread and Juice',
            'Milks and Dairies',
            'Wines & Drinks',
            'Clothing & beauty',
            'Fresh Seafood'
     ]);

     const countryList =['Your Location'];

     const [isOpenDropdown, setisOpenDropdown] = useState(false);

     useEffect(() => {
       getCountry("https://countriesnow.space/api/v0.1/countries/");
     }, []);

     const getCountry = async(url)=>{
          //countries name API
          try{  
              await axios.get(url).then((res)=>{
                if(res !== null){

                  res.data.data.map((item , index)=>{
                    countryList.push(item.country);
                  })
                }
              });  
          }catch(error){
            console.log(error.message);
          }
     } 

    const headerRef = useRef();
     useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            let pos = window.pageYOffset;
            if(pos >= 100){
              headerRef.current.classList.add('fixed1');
            }
            else{
              headerRef.current.classList.remove('fixed1');
            }
        })
     }
     ,[]);


  return (
    <>
    <div className="headerWrapper" ref={headerRef}>
      <header>
        <div className="container-fluid">
          <div className="row">
            {/* logo */}
            <div className="logo col-sm-1">
              <img id="main-logo" src={Logo} />
            </div>

            <div className="nav-sec-2 col-sm-5">
              {/* header search bar division */}
              <div className="headerSearch d-flex align-items-center">
                    <Select data={categories} placeholder={'All Categories'} icon={false} />
                    <div className="search">
                        <input type="text" placeholder="Search for items... "/>
                        <SearchIcon className="searchIcon cursor" />

                    </div>
              </div>
            </div>

            <div className="col-sm-2 d-flex align-items-center">
                   <div className="ml-auto d-flex align-items-center">
                      <div className="countryWrapper">
                          <Select data={countryList} placeholder={'Your Location'} icon={<PlaceOutlinedIcon style={{opacity:'0.6', padding: "0px 5px 0px 0px" }}/>} />
                      </div>
                   </div>
            </div>

            <div className="col-sm-3 d-flex align-items-center " >
                   <div className="ml-auto d-flex align-items-center">
                          <span>
                               Compate
                               <img src={iconCompare}/> 
                               <span className="badge bg-success rounded-circle"> 5 </span> 
                         </span>
                         <Link to="/wishlist" className="text-black text-decoration-none">
                         <span>
                              Wishlist
                             <img src={iconHeart}/> 
                             <span className="badge bg-success rounded-circle"> {wishlistItems.length+3} </span>
                         </span>
                         </Link>

                         <Link to="/cart" className="text-black text-decoration-none">
                            <span>
                                Cart
                                <img src={iconCart}/> 
                                <span className="badge bg-success rounded-circle"> {data.length+2} </span>
                           </span>
                         </Link>
                         
                   </div>
            </div>
            
            <ClickAwayListener onClickAway={() => {setisOpenDropdown(false);}} >
                <div className="account-main-menu col-sm-1 d-flex align-items-center position-relative" >
                 <div className="mb-0 d-flex align-items-left" >
                      <Button className="account-menu" onClick={()=>setisOpenDropdown(!isOpenDropdown)}> Account <AccountCircleOutlinedIcon className="user-icon"/> </Button>
                       {   isOpenDropdown!==false &&
                            <div className="dropdownMenu">
                               <Button> <Link to='/login'> <LoginOutlinedIcon/> Log in/Sign Up </Link> </Button>
                               <Button> <Link> <AccountCircleOutlinedIcon/> My Account </Link> </Button>
                               <Button> <Link> <PinDropOutlinedIcon/> Order Tracking  </Link> </Button>
                               <Button> <Link> <DiscountOutlinedIcon/> My Voucher  </Link> </Button>
                               <Button> <Link> <FavoriteBorderOutlinedIcon/> My Wishlist  </Link> </Button>
                               <Button> <Link> <SettingsSuggestOutlinedIcon/> Setting  </Link> </Button>
                               <Button> <Link> <LogoutOutlinedIcon/> Sign out  </Link> </Button>
                        </div>
                       }
                  </div>
                </div>
            </ClickAwayListener>
          </div>

        </div>
      </header>

    <Nav data={data}/>
    </div>
    </>
  );
};
export default Header;
