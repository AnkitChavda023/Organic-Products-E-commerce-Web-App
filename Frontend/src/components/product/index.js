import React from "react";
import './style.css';
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Link from '@mui/material/Link';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';

const Product = ({ data, handleAddToCart, addToWishlist ,addToCompare }) => {
  const { tag, picture, description, category, company_name, price, old_price } = data;

  return (
    <div className="productThumb position-relative">
      {tag && <span className={`badge ${tag}`}>{tag}</span>}
      <Link>
        <div className="imageWrapper">
          <img src={picture} className="w-100" alt={description} />
          <div className="overLay">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Tooltip title="Add to Wishlist">
                  <a className="cursor transition">
                    <FavoriteBorderOutlinedIcon onClick={()=>{addToWishlist(data);}} />
                  </a>
                </Tooltip>
              </li>
              <li className="list-inline-item">
                <Tooltip title="Compare">
                  <a className="cursor transition">
                    <CompareArrowsOutlinedIcon onClick={()=>addToCompare(data)} />
                  </a>
                </Tooltip>
              </li>
              <li className="list-inline-item">
                <Tooltip title="Quick view">
                  <a className="cursor transition">
                    <RemoveRedEyeOutlinedIcon />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </Link>
      <div className="info">
        <span className="d-block catName">{category}</span>
        <h4 className="title"><Link>{description}</Link></h4>
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        <span className="brand d-block">by <Link className="text-g">{company_name}</Link></span>
        <div>
          <div className="d-flex align-items-center">
            <span className="price">${price}</span> <span className="oldPrice">${old_price}</span>
          </div>
          <Button className="addButton mb-auto" onClick={() => handleAddToCart(data)}><ShoppingCartCheckoutOutlinedIcon />Add</Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
