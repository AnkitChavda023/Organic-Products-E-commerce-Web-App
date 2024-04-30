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
import axios from 'axios';

function App() {


const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (product) => {
  const isProductInCart = cartItems.some(item => item.id === product.id);

  if (!isProductInCart) {
    product = {...product, inputValue:1} ;
    setCartItems(prevItems => [...prevItems, product]);
  }
};

const removeProduct = (id) =>{
  setCartItems(cartItems.filter((item, index) => index!== id));
}

console.log(cartItems);

  return (
    
    // productData.length !==0 &&
    <BrowserRouter>
      <Header data={cartItems} />
      
      <Routes>
        <Route exact={true} path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route exact={true} path="/listing" element={<Listing handleAddToCart={handleAddToCart} />} />
        <Route exact={true} path="/detail" element={<DetailPage/>} />
        <Route exact={true} path="/login" element={<LoginPage/>} />
        <Route exact={true} path="/register" element={<RegisterPage/>} />
        <Route exact={true} path="/login/reset" element={<ResetPasswordReq/>} />
        <Route exact={true} path="/resetpwd" element={<ResetPassword/>} />
        <Route exact={true} path="/cart" element={<CartPage data={cartItems} removeProduct={removeProduct} />} />
        <Route exact={true} path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
