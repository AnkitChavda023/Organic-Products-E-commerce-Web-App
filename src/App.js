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
import ComparePage from './pages/ComparePage';
import axios from 'axios';

function App() {


const [cartItems, setCartItems] = useState([
  {
    "tag": "best",
    "picture": "images/Fruits/cat-11.jpg",
    "category": "Fruits",
    "description": "mangoes, juicy and refreshing.",
    "company_name": "Organic  Pear Perfection Orchards",
    "price": 5.49,
    "old_price": 6.99,
  },
  {
    "picture": "images/Fruits/cat-27.jpg",
    "category": "Fruits",
    "description": "Organic raspberries, tart and juicy.",
    "company_name": "Raspberry Ridge Orchards",
    "price": 4.99,
    "old_price": 6.49,
  },
  {
    "tag": "sale",
    "picture": "images/vegatable/cat-12.jpeg",
    "category": "Vegetables",
    "description": "broccoli florets, perfect for stir-fries and salads.",
    "company_name": "Broccoli Bliss Farms",
    "price": 2.49,
    "old_price": 3.29
  }
]);
const [wishlistItems, setWishlistItems] = useState([
  {
    "tag": "best",
    "picture": "images/Fruits/cat-11.jpg",
    "category": "Fruits",
    "description": "mangoes, juicy and refreshing.",
    "company_name": "Organic  Pear Perfection Orchards",
    "price": 5.49,
    "old_price": 6.99,
    "Availability": "No",
    
  },
  {
    "picture": "images/Fruits/cat-27.jpg",
    "category": "Fruits",
    "description": "Organic raspberries, tart and juicy.",
    "company_name": "Raspberry Ridge Orchards",
    "price": 4.99,
    "old_price": 6.49,
    "Availability": "Yes"
  }
]);

const [compareItems, setCompareItems] = useState([
  {
    "tag": "best",
    "picture": "images/Fruits/cat-11.jpg",
    "category": "Fruits",
    "description": "mangoes, juicy and refreshing.",
    "company_name": "Organic  Pear Perfection Orchards",
    "price": 5.49,
    "old_price": 6.99,
    "Availability": "No",
    
  },
  {
    "picture": "images/Fruits/cat-27.jpg",
    "category": "Fruits",
    "description": "Organic raspberries, tart and juicy.",
    "company_name": "Raspberry Ridge Orchards",
    "price": 4.99,
    "old_price": 6.49,
    "Availability": "Yes"
  }
]);



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

const addToCompare = (product) => {
  const isProductInWishlist = compareItems.some(item => item.id === product.id);

  if (!isProductInWishlist) {
    setCompareItems(prevItems => [...prevItems, product]);
  } 
};

const removeFromCompare = (id) =>{
  setCompareItems(compareItems.filter((item, index) => index!== id));
}
//-------------------------------------------------------------------


  return (
    
    // productData.length !==0 &&
    <BrowserRouter>
      <Header data={cartItems} wishlistItems={wishlistItems} compareItems={compareItems} />
      
      <Routes>
        <Route exact={true} path="/" element={<Home handleAddToCart={handleAddToCart} addToWishlist={addToWishlist} addToCompare={addToCompare} />} />
        <Route exact={true} path="/listing" element={<Listing handleAddToCart={handleAddToCart} addToWishlist={addToWishlist} addToCompare={addToCompare} />} />
        <Route exact={true} path="/detail" element={<DetailPage/>} />
        <Route exact={true} path="/login" element={<LoginPage/>} />
        <Route exact={true} path="/register" element={<RegisterPage/>} />
        <Route exact={true} path="/login/reset" element={<ResetPasswordReq/>} />
        <Route exact={true} path="/resetpwd" element={<ResetPassword/>} />
        <Route exact={true} path="/cart" element={<CartPage data={cartItems} removeProduct={removeProduct} />} />
        <Route exact={true} path="/wishlist" element={<WishlistPage data={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
        <Route exact={true} path="/compare" element={<ComparePage data={compareItems} removeFromCompare={removeFromCompare} />} />
        <Route exact={true} path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
