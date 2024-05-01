import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Product from "../src/components/product/index";
import Home from './pages/Home/index';
import About from './pages/About/index';
import Listing from './pages/Listing';
import Footer from './components/footer/footer';
import NotFound from './pages/pagenotFound';
import DetailPage from './pages/Detailspage';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordReq from './pages/resetPasword/sendResetReq';
import ResetPassword from './pages/resetPasword/index';
import CartPage from './pages/cartPage/index';
import WishlistPage from './pages/WishlistPage/index';
import axios from 'axios';

function App() {


const [cartItems, setCartItems] = useState([]);
const [wishlistItems, setWishlistItems] = useState([]);

const handleAddToCart = (product) => {
  const isProductInCart = cartItems.some(item => item.id === product.id);

  if (!isProductInCart) {
    setCartItems(prevItems => [...prevItems, product]);
  }
};

const removeProduct = (id) =>{
  setCartItems(cartItems.filter((item, index) => index!== id));
}
//----------------------------------------------------------------

const addToWishlist = (product) => {
  const isProductInWishlist = wishlistItems.some(item => item.id === product.id);

  if (!isProductInWishlist) {
    setWishlistItems(prevItems => [...prevItems, product]);
  } 
};

const removeFromWishlist = (id) =>{
  setWishlistItems(wishlistItems.filter((item, index) => index!== id));
}

//-------------------------------------------------------------------

console.log(wishlistItems);

  return (
    
    // productData.length !==0 &&
    <BrowserRouter>
      <Header data={cartItems} wishlistItems={wishlistItems} />
      
      <Routes>
        <Route exact={true} path="/" element={<Home handleAddToCart={handleAddToCart} addToWishlist={addToWishlist} />} />
        <Route exact={true} path="/listing" element={<Listing handleAddToCart={handleAddToCart} addToWishlist={addToWishlist} />} />
        <Route exact={true} path="/detail" element={<DetailPage/>} />
        <Route exact={true} path="/login" element={<LoginPage/>} />
        <Route exact={true} path="/register" element={<RegisterPage/>} />
        <Route exact={true} path="/login/reset" element={<ResetPasswordReq/>} />
        <Route exact={true} path="/resetpwd" element={<ResetPassword/>} />
        <Route exact={true} path="/cart" element={<CartPage data={cartItems} removeProduct={removeProduct} />} />
        <Route exact={true} path="/wishlist" element={<WishlistPage data={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
        <Route exact={true} path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
