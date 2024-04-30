import React from "react";
import MilkDairy from '../../assets/images/milk&dairy.svg';
import Cloth from '../../assets/images/clothing.svg';
import bakingMater from '../../assets/images/bakingMterial.svg';
import petFood from '../../assets/images/petFood.svg';
import Fruit from '../../assets/images/fruit.svg';

import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TopProduct from "../../pages/Home/topProducts";
import SidebarBanner from '../../assets/images/sidebarBanner.png';


function valuetext(value) {
    return `${value}$`;
  }

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = ()=>{

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    return (
      <>
        <div className="sidebar">
          <div className="card border-0 shadow">
            <h3>Category</h3>

            <div className="catList">
              <div className="catItem d-flex align-items-center justify-content-between">
                <span className="img">
                  <img src={MilkDairy} width={30} />{" "}
                </span>
                <h5 className="mb-0 ml-3 mr-3">Milks & Dairies</h5>
                <span className="d-flex align-items-center rounded-circle ml-auto">
                  30
                </span>
              </div>
              <div className="catItem d-flex align-items-center justify-content-between">
                <span className="img">
                  <img src={Cloth} width={30} />{" "}
                </span>
                <h5 className="mb-0 ml-3 mr-3">Snacks</h5>
                <span className="d-flex align-items-center rounded-circle ml-auto">
                  45
                </span>
              </div>
              <div className="catItem d-flex align-items-center justify-content-between">
                <span className="img">
                  <img src={petFood} width={30} />{" "}
                </span>
                <h5 className="mb-0 ml-3 mr-3">Dry Fruits</h5>
                <span className="d-flex align-items-center rounded-circle ml-auto">
                  02
                </span>
              </div>
              <div className="catItem d-flex align-items-center justify-content-between">
                <span className="img">
                  <img src={bakingMater} width={30} />{" "}
                </span>
                <h5 className="mb-0 ml-3 mr-3">Vegetables</h5>
                <span className="d-flex align-items-center rounded-circle justify-content-between">
                  08
                </span>
              </div>
              <div className="catItem d-flex align-items-center justify-content-between">
                <span className="img">
                  <img src={Fruit} width={30} />{" "}
                </span>
                <h5 className="mb-0 ml-3 mr-3 align-items-flex-start ">
                  Fresh Fruits
                </h5>
                <span className="d-flex align-items-center justify-content-center rounded-circle justify-content-between">
                  13
                </span>
              </div>
              <div className="catItem d-flex align-items-center justify-content-between">
                <span className="img">
                  <img src={Fruit} width={30} />{" "}
                </span>
                <h5 className="mb-0 ml-3 mr-3 align-items-flex-start ">
                  Beverages
                </h5>
                <span className="d-flex align-items-center justify-content-center rounded-circle justify-content-between">
                  80
                </span>
              </div>
              <div className="catItem d-flex align-items-center justify-content-between">
                <span className="img">
                  <img src={Fruit} width={30} />{" "}
                </span>
                <h5 className="mb-0 ml-3 mr-3 align-items-flex-start ">
                  Bakery
                </h5>
                <span className="d-flex align-items-center justify-content-center rounded-circle justify-content-between">
                  23
                </span>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow">
            <h3>Fill By Price</h3>
            <Slider
              min={1}
              step={1}
              max={2000}
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color="success"
            />

            <div className="d-flex pt-2 pb-2 priceRange justify-content-between">
                <span> From: <strong className="text-success">${value[0]} </strong></span>
                <span > To: <strong className="text-success">${value[1]} </strong></span>
            </div>

            <div className="filters">
                <h5>Color</h5>
                <ul className="mb-0">
                    <li><Checkbox {...label} color="success"/>Red(56)</li>
                    <li><Checkbox {...label} color="success"/>Green(23)</li>
                    <li><Checkbox {...label} color="success"/>Yellow(50)</li>
                    <li><Checkbox {...label} color="success"/>Black(5)</li>
                    <li><Checkbox {...label} color="success"/>Blue(67)</li>
                    <li><Checkbox {...label} color="success"/>Orange(32)</li>
                    <li><Checkbox {...label} color="success"/>Pink(56)</li>
                    <li><Checkbox {...label} color="success"/>White(52)</li>

                </ul>
            </div>
            <div className="filters mt-0">
                <h5>Item Condition</h5>
                <ul className="mb-0">
                    <li><Checkbox {...label} color="success"/>New (1506)</li>
                    <li><Checkbox {...label} color="success"/>Refurbished (27)</li>
                    <li><Checkbox {...label} color="success"/>Used (45)</li>
                    <li><Checkbox {...label} color="success"/>New (1506)</li>
                    <li><Checkbox {...label} color="success"/>Refurbished (27)</li>
                    <li><Checkbox {...label} color="success"/>Used (45)</li>
                </ul>
            </div>

            <div className="d-flex">
            <Button className="btn"> <FilterAltOutlinedIcon /> Filter</Button>
            </div>

          </div>

         <br/>
        
            {/* <img src={SidebarBanner} className="w-75 mt-0"/> */}
        </div>
      </>
    );
}

export default Sidebar;