import React, { useEffect, useState } from "react";
import './nav.css';
import {Link} from 'react-router-dom';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Button from '@mui/material/Button';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
// import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Nav = (props)=> {

    useEffect(()=>{
        // console.log(props.data);
    })

    const [isdropdownMenuHome, setisdropdownMenuHome] = useState(false);
    const [isdropdownMenuPages, setisdropdownMenuPages] = useState(false);
    const [isdropdownMenuShop, setisdropdownMenuShop] = useState(false);
    const [isdropdownMenuVendors,setisdropdownMenuVendors] = useState(false);
    const [isdropdownMenuBlog,setisdropdownMenuBlog] = useState(false);

    return(
        <div className="nav d-flex align-items-center">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button className="text-white catTab">
                            <GridViewOutlinedIcon/> &nbsp;
                            Browse All Categories 
                            <KeyboardArrowDownIcon/>
                        </Button>
                    </div>

                    <div className="col-sm-7 part2 position-static">
                        <nav>
                            <ul className="list list-inline mb-0">

                                <li className="list-inline-item mb-0">
                                    <Button > <Link to="/">Home</Link> </Button>
                        
                                </li>
                            {/* </ClickAwayListener> */}
                                <li className="list-inline-item">
                                    <Button> <Link>About </Link> </Button>
                                </li>

                                <li className="list-inline-item">
                                    <Button onClick={()=>setisdropdownMenuShop(!isdropdownMenuShop)}> <Link>Shop <KeyboardArrowDownIcon/> </Link> </Button>
                        
                                    <div className="dropdownMenuShop">
                                        <Button> <Link to="/listing"> Single Product          </Link> </Button>
                                        <Button> <Link to="/listing"> Shop Filter             </Link> </Button>
                                        <Button> <Link to="/listing"> Shop Wishlist           </Link> </Button>
                                        <Button> <Link to="/listing"> Shop Cart               </Link> </Button>
                                        <Button> <Link to="/listing"> Checkout                </Link> </Button>
                                        <Button> <Link to="/listing"> Compare                 </Link> </Button>
                                        <Button> <Link to="/listing"> Shop Invoice            </Link> </Button>
                                    </div>
                                
                                </li>

                            
                                <li className="list-inline-item position-static" >
                                    <Button> <Link>Mega Menu <KeyboardArrowDownIcon/> </Link> </Button>
                                    <div className="dropdownMenuHome dropdown-Megamenu">  
                                        <div className="row">
                                            <div className="col">
                                                <h4 >Fruit & Vegetables</h4>
                                                <ul  className="fruit fruit mt-3 mb-0">
                                                    <li> <Link to="/about"> Meat & Poultry </Link></li>
                                                    <li> <Link to="/about"> Fresh Vegetables </Link></li>
                                                    <li> <Link to="/about"> Herbs & Seasonings </Link></li>
                                                    <li> <Link to="/about"> Cuts & Sprouts </Link></li>
                                                    <li> <Link to="/about"> Exotic Fruits & Veggies </Link></li>
                                                    <li> <Link to="/about"> Packaged Produce </Link></li>
                                                </ul>
                                            </div>

                                            <div className="col">
                                                <h4>Breakfast & Dairy</h4>
                                                <ul  className="fruit mt-3 mb-0">
                                                    <li> <Link to="/about"> Milk & Flavoured Milk </Link></li>
                                                    <li> <Link to="/about"> Butter and Margarine </Link></li>
                                                    <li> <Link to="/about"> Eggs Substitutes </Link></li>
                                                    <li> <Link to="/about"> Marmalades </Link></li>
                                                    <li> <Link to="/about"> Sour Cream </Link></li>
                                                    <li> <Link to="/about"> Cheese </Link></li>
                                                </ul>
                                            </div>

                                            <div className="col">
                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" className="w-100"/>
                                            </div>
                                        </div>  

                                    </div>
                                </li>

                            {/* <ClickAwayListener onClickAway={() => {setisdropdownMenuBlog(false);}}> */}
                                <li className="list-inline-item">
                                    <Button onClick={()=>setisdropdownMenuBlog(!isdropdownMenuBlog)}> <Link>Blogs <KeyboardArrowDownIcon/> </Link> </Button>
                                     {/* {
                                        isdropdownMenuBlog!==false && */}
                                        <div className="dropdownMenuBlog">    
                                            <Button> <Link to="/about">  Blog Category Grid  </Link></Button>
                                            <Button> <Link to="/about">  Blog Category List  </Link></Button>
                                            <Button> <Link to="/about">  Blog Category Big  </Link></Button>
                                            <Button> <Link to="/about">  Blog Category Wide  </Link></Button>
                                            <Button> <Link to="/about">  Single Post  </Link></Button>
                                          </div>
                                     {/* } */}
                                </li>
                            {/* </ClickAwayListener> */}

                            {/* <ClickAwayListener onClickAway={() => {setisdropdownMenuPages(false);}} > */}
                                <li className="list-inline-item">
                                    <Button onClick={()=>setisdropdownMenuPages(!isdropdownMenuPages)}> <Link>Pages <KeyboardArrowDownIcon/> </Link> </Button>

                                {/* {
                                    isdropdownMenuPages!==false && */}
                                    <div className="dropdownMenuPages">
                                        <Button> <Link to="/about"> About Us    </Link> </Button>
                                        <Button> <Link to="/about"> Contact     </Link> </Button>
                                        <Button> <Link to="/about"> My Account  </Link> </Button>
                                        <Button> <Link to="/about"> Login       </Link> </Button>
                                        <Button> <Link to="/about"> Forgot password </Link> </Button>
                                        <Button> <Link to="/about"> Reset password </Link> </Button>
                                        <Button> <Link to="/about"> Purchase Guide </Link> </Button>
                                        <Button> <Link to="/about"> Privacy Policy </Link> </Button>
                                        <Button> <Link to="/about"> Terms of Service </Link> </Button>
                                        <Button> <Link to="/about"> 404 Page         </Link> </Button>
                                    </div>
                                {/* } */}
                                </li>
                            {/* </ClickAwayListener> */}
                                <li className="list-inline-item">
                                    <Button> <Link>Contact </Link> </Button>
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-2 part3 d-flex align-items-center justify-content-flex-end">
                        <div className="phNo d-flex align-items-start ml-auto">
                            <span> <HeadsetMicOutlinedIcon/> </span>
                              <div className="info ml-3 mb-0">
                                 <h3>1900-888</h3>
                                 <p className="mb-0">24/7 Support Center</p>
                              </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Nav;