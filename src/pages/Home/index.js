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
import axios from "axios";
import Pagination from '@mui/material/Pagination';

const Home = ({handleAddToCart, addToWishlist}) => {
  const [productData, setProductData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    getData('http://localhost:3000/products');
  }, []);

  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
    centerMode: true,
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    setCurrentPage(1);
  };

  const filteredProducts = categoryFilter
    ? productData.filter(product => product.category === categoryFilter)
    : productData;

  const totalItems = filteredProducts.length;
  const itemsPerPage = 10;
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
          <div className="topHeading d-flex align-items-center">
            <div className="col-sm-4">
              <div className="d-flex align-items-center">
                <h2 className="hd mb-0 mt-0">Popular Products</h2>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="filterTab d-flex align-items-center mb-0">
                <ul className="list list-inline ml-auto">
                  <li className="list-inline-item">
                    <a onClick={() => handleCategoryFilter(null)} className="cursor">All</a>
                  </li>
                  {/* Other category filter options */}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="row productRow">
              {displayedProducts.map((item, index) => (
                <div key={index} className="item">
                  <Product data={item} handleAddToCart={handleAddToCart}  addToWishlist={addToWishlist} />
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

      {/* Other sections */}
    </>
  );
}

export default Home;
