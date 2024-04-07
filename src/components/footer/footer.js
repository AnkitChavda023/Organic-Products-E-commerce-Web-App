import React from "react";
import './footer.css';

import Icon_1 from '../../assets/images/footerIcon-1.svg';
import Icon_2 from '../../assets/images/footerIcon-2.svg';
import Icon_3 from '../../assets/images/footerIcon-3.svg';
import Icon_4 from '../../assets/images/footerIcon-4.svg';
import Icon_5 from '../../assets/images/footerIcon-5.svg';

import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import AppStore from '../../assets/images/app-storeApple.jpg';
import PlayStore from '../../assets/images/google-play.jpg';

import Visa from '../../assets/images/payment-methodVisa.png';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

import NewsLatter from "../../components/newslatter";
import NewsLatterImage from '../../assets/images/newsLatterBanner.png';


const Footer = ()=>{
    return (
      <>
      <section className="newsLatterSection">
      <div className="container-fluid">
          <div className="box d-flex align-items-center ">
            <div className="info">
              <h2>Stay home & get your daily <br/> needs from our shop</h2>
              <p>Start You'r Daily Shopping with <Link to="" className="text-g">Natural Product </Link> </p> <br/>
              <NewsLatter/>
            </div>
            <div className="img">
                <img src={NewsLatterImage} className="w-100"/>
            </div>
          </div>
      </div>
    </section>

      <div className="footerWrapper">
        <div className="footerBox">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center">
                  <span>
                    {" "}
                    <img src={Icon_1} className="w-100" />{" "}
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center">
                  <span>
                    {" "}
                    <img src={Icon_2} className="w-100" />{" "}
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center">
                  <span>
                    {" "}
                    <img src={Icon_3} className="w-100" />{" "}
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center">
                  <span>
                    {" "}
                    <img src={Icon_4} className="w-100" />{" "}
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center">
                  <span>
                    {" "}
                    <img src={Icon_5} className="w-100" />{" "}
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="">
                  {" "}
                  <img src={Logo} />{" "}
                </Link>{" "}
                <br />
                <p>Awesome grocery store website template</p>
                <p>
                  {" "}
                  <FmdGoodOutlinedIcon /> <strong>Address</strong>: 5171 W
                  Campbell Ave undefined Kent, Utah 53127 United States{" "}
                </p>
                <p>
                  {" "}
                  <HeadphonesOutlinedIcon /> <strong>Call Us</strong> :(+91) -
                  540-025-124553
                </p>
                <p>
                  {" "}
                  <MarkEmailReadOutlinedIcon /> <strong>Email</strong>
                  :sale@NaturalProduct.com
                </p>
                <p>
                  {" "}
                  <AccessTimeOutlinedIcon /> <strong>Hours</strong>:10:00 -
                  18:00, Mon - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        {" "}
                        <Link to="#"> About Us </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Delivery Information </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Privacy Policy </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Terms & Conditions </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Contact Us </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Support Center </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Careers </Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Account</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        {" "}
                        <Link to="#"> Sign In </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> View Cart </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> My Wishlist </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Track My Order </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Help Ticket </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Shipping Details </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Compare products </Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Corporate</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        {" "}
                        <Link to="#"> Become a Vendor </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Affiliate Program </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Farm Business </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Farm Careers </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Our Suppliers </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Accessibility </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Promotions </Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h3>Popular</h3>
                    <ul className="footer-list mb-sm-5 mb-md-0">
                      <li>
                        {" "}
                        <Link to="#"> Milk & Flavoured Milk </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Butter and Margarine </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Marmalades </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Sour Cream and Dips </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Tea & Kombucha </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="#"> Cheese </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <h3>Install App</h3>
                <br />
                <p>From App Store or Google Play</p>
                <br />
                <div className="d-flex app">
                  <Link to="">
                    <img src={AppStore} width={150} />
                  </Link>
                  <Link to="">
                    <img src={PlayStore} className="mx-4" width={150} />
                  </Link>
                </div>
                <br />
                <p>Secured Payment Gateways</p>
                <br />
                <Link to="">
                  {" "}
                  <img src={Visa} width={250} />{" "}
                </Link>
              </div>
            </div>

            <hr />

            <div className="row lastStrip">
                 <div className="col-md-3">
                     <p>
                         © 2024, <strong> NaturalProduct </strong> <br/> All rights reserved
                    </p>
                </div>
                <div className="col-md-5 contact">
                     <div className="d-flex ">
                     <div className="phNo d-flex align-items-center mx-4">
                         <span><WifiCalling3OutlinedIcon />{" "}</span>
                        <div className="info ml-3 mb-0">
                         <h3 className="text-g">1900-6666</h3>
                         <p className="mb-0">Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="phNo d-flex align-items-center mx-4">
                         <span><WifiCalling3OutlinedIcon />{" "}</span>
                        <div className="info ml-3 mb-0">
                         <h3 className="text-g">1900-8888</h3>
                         <p className="mb-0">24/7 Support Center</p>
                        </div>
                    </div>
                     </div>
                </div>

              <div className="col-md-4 part3 ">
                <div className="d-flex align-atems-center socialHandle">
                    <h5>Follow Us</h5>
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <Link to=""><FacebookOutlinedIcon className="w-100"/> </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""><TwitterIcon/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""><InstagramIcon/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""><PinterestIcon/> </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""> <YouTubeIcon/> </Link>
                        </li>
                    </ul>
                </div>
                    <p className="lastLine">Up to 15% discount on your first subscribe </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </>
    );
}

export default Footer;