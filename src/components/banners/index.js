import React from  'react' ;
import Banner1 from '../../assets/images/shop-1.png';
import Banner2 from '../../assets/images/shop-2.png';
import Banner3 from '../../assets/images/shop-3.png';
import './style.css';
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const Banners = ()=>{
    return(
        <>
            <div className='bannerSection'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col position-relative'>
                                <div className='box'>
                                    <img src={Banner1} className='w-100 transition'/>
                                     <h3>Everyday Fresh & <br/> Clean with Our <br/> Products</h3>
                                     <Button>Shop Now <EastIcon className='arrowp'/> </Button>
                                </div>
                        </div>
                        <div className='col position-relative'>
                                <div className='box'>
                                    <img src={Banner2} className='w-100 transition'/>
                                    <h3> Make your Breakfast <br/> Healthy and Easy </h3>
                                    <Button>Shop Now <EastIcon className='arrowp'/> </Button>
                                </div>
                        </div>
                        <div className='col position-relative'>
                                <div className='box'>
                                    <img src={Banner3} className='w-100 transition'/>
                                    <h3> The Best Organic <br/> Product Online</h3>
                                    <Button>Shop Now <EastIcon className='arrowp'/> </Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banners;