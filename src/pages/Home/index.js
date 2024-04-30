import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SliderBanner from "./slider/index";

import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners";
import './style.css';

import Product from "../../components/product";
import Banner_4 from "../../assets/images/banner-4.png";

import { Button } from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

import TopProduct from "./topProducts";

import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from '@mui/material/Pagination';


const Home = ()=>{

  const [productData , setproductData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

 
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

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };


 

  // const displayedProducts = productData.slice(startIndex, endIndex);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade : false,
    arrows:true,
    autoplay:3000,
    centerMode:true,
  };

//------------------------------------------------------------------------------
// filter product data methods
const handleCategoryFilter = (category) => {
  setCategoryFilter(category);
  setCurrentPage(1); // Reset to first page when filter changes
};

    const filteredProducts = categoryFilter
                             ? productData.filter(product => product.category === categoryFilter)
                            : productData;

    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = filteredProducts.slice(startIndex, endIndex);




    return (
      <>
        <SliderBanner />
        <CatSlider />
        <Banners />

        <section className="homeProducts">
          <div className="container-fluid">
            <div className="topHeading d-flex align-items-center ">
              <div className="col-sm-4">
                <div className="d-flex align-items-center">
                  <h2 className="hd mb-0 mt-0">Popular Products</h2>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="filterTab d-flex align-items-center mb-0">
                  <ul className="list list-inline ml-auto">
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter(null)} className="cursor">All</a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter("Dairy and Milk")} className="cursor">Milks & Dairies</a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter("Snacks")} className="cursor">Snacks</a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter("Dry Fruits")} className="cursor">Dry Fruits</a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter("Vegetables")} className="cursor">Vegetables</a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter("Beverages")} className="cursor">Beverages</a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter("Fruits")} className="cursor">Fruits</a>
                    </li>
                    <li className="list-inline-item">
                      <a onClick={()=>handleCategoryFilter("Bakery")} className="cursor">Bakery</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
               <div className="row productRow">
                  {displayedProducts.map((item, index) => (
                      <div key={index} className="item">
                        <Product data={item} />
                      </div>
                    ))}
                </div>
            </div>
            <Pagination className="pagination"
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              color="secondary"  
            />
            </div>

        </section>

        <section className="homeProducts homeProductsRow2 pt-3">
          <div className="container-fluid">
            <div className="topHeading d-flex align-items-center ">
              <div className="col-sm-4">
                <div className="d-flex align-items-center">
                  <h2 className="hd mt-0">Daily Best Sells</h2>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="filterTab d-flex align-items-center mb-0">
                  <ul className="list list-inline ml-auto">
                    <li className="list-inline-item">
                      <a className="cursor">Featured</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="cursor">Popular</a>
                    </li>
                    <li className="list-inline-item">
                      <a className="cursor">New added</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 pr-6 position-relative">
                <img src={Banner_4} className="w-100 " />
                <Button className="shopNow">
                  {" "}
                  Shop Now <EastOutlinedIcon />{" "}
                </Button>
              </div>

              <div className="col-md-9">
                <Slider {...settings} className="prodSlider">
                {
               productData.map((item ,index) => (
                <div key={index} className="item">
                  <Product  data = {item}/>
                </div>
               )) 
              }
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className="topProductsSection">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <TopProduct title="Top Selling" />
              </div>
              <div className="col">
                <TopProduct title="Trending Products" />
              </div>
              <div className="col">
                <TopProduct title="Recently added" />
              </div>
              <div className="col">
                <TopProduct title="Top Rated" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Home;

                            
                            
                            
                            
                            