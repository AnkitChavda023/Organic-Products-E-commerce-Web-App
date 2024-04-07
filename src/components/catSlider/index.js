import React from "react";
import "./style.css";
import Slider from "react-slick";
import Img_1 from '../../assets/images/dry fruit/dry-12.png';
import Img_2 from '../../assets/images/Fruits/cat-2.png';
import Img_3 from '../../assets/images/Fruits/cat-3.png';
import Img_4 from '../../assets/images/Fruits/cat-4.png';
import Img_5 from '../../assets/images/dry fruit/dry-12.png';
import Img_6 from '../../assets/images/Fruits/cat-6.png';
import Img_7 from '../../assets/images/Fruits/cat-7.png';
import Img_8 from '../../assets/images/Fruits/cat-8.png';
import Img_9 from '../../assets/images/Fruits/cat-9.png';
import Img_10 from '../../assets/images/Fruits/cat-6.png';
import { useState } from "react";

const CatSlider = ()=>{

    const [itemBg , setItemBg] = useState(['#fffceb','#ecffec','#fff3eb','#fff3ff','#f2fce4','#feefea','#fffceb','#feefea','#ecffec','#feefea']);

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      fade : false,
      arrows:true,
      autoplay:3000,
      centerMode:true,
    };

    return (
      <>
        <div className="catSliderSection">
          <div className="container-fluid">
            <h2 className="hd"> Featured Categories</h2>
            <Slider {...settings} className="cat_slider_main">
                <div className="item">
                    <div className="info">
                        <img src={Img_1} className="w-100" />
                        <h6>Cake & Milk</h6>
                        <p>26 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_2} className="w-100" />
                        <h6>Organic Kiwi</h6>
                        <p>28 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_3} className="w-100" />
                        <h6>Peach</h6>
                        <p>13 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_4} className="w-100" />
                        <h6> Red Apple</h6>
                        <p> 54 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_5} className="w-100" />
                        <h6>Snack</h6>
                        <p>56 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_6} className="w-100" />
                        <h6>Vegetables</h6>
                        <p>72 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_7} className="w-100" />
                        <h6>Strawberry</h6>
                        <p>36 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_8} className="w-100" />
                        <h6>Black Plum</h6>
                        <p>123 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_9} className="w-100" />
                        <h6>Custard Apple</h6>
                        <p>34 items</p>
                    </div>
                </div>
                <div className="item">
                    <div className="info">
                        <img src={Img_10} className="w-100"/>
                        <h6>Coffee & Tea</h6>
                        <p>89 items</p>
                    </div>
                </div>
            </Slider>
          </div>
        </div>
      </>
    );
}

export default CatSlider;