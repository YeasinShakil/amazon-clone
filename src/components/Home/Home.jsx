import React from 'react';
import './home.css';
import homeBanner from '../assets/home banner 1.jpg';
import Product from '../products/Product';
import the_lean_startup from '../assets/the-lean-startup.jpg';
import watch1 from '../assets/watch1.jpg';
import watch2 from '../assets/watch2.jpg';
import laptop from '../assets/laptop.jpg';
import oil1 from '../assets/oil 1.jpg';
import cooking from '../assets/cooking.jpg';
import gift from '../assets/gift.jpg';
import remover from '../assets/remover.jpg';


const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img src={homeBanner} alt="" className="home_image" />
            </div>

            <div className="home_row">
                <Product title='The Lean Sturtup' price={19.99} ratings={5} product_img={the_lean_startup} id={1} key={1}></Product>

                <Product title='Scented Candles Gift Set, 8% Essential Oil, 4 Pack Aromatherapy Candle, Stress Relief Gifts for Women,120H Burning, Candles for Home Scented, Ideal for Birthday, Christmas, Thanksgiving, Mothers Day' price={88} ratings={3} product_img={gift}id={2} key={2}></Product>


            </div>
            <div className="home_row">
                <Product id={3} title='Lee Beauty Professional Callus Remover Extra Strength Gel for Feet, at Home Pedicure Results, 8 Oz' price={12} ratings={4} product_img={remover} key={3}></Product>
                
                <Product id={4} title='Organic Castor Oil (4oz), USDA Certified, 100% Pure, Cold Pressed, Hexane Free by Kate Blanc. Stimulate Growth for Eyelashes, Eyebrows, Hair. Skin Moisturizer & Oil Cleanse with Starter Kit' price={9.99} ratings={4} product_img={oil1} key={4}></Product>
                <Product id={5} title='Hamilton Beach Breakfast Sandwich Maker with Egg Cooker Ring, Customize Ingredients, Perfect for English Muffins, Croissants, Mini Waffles, Single, Silver' price={29} ratings={5} product_img={cooking} key={5}></Product>
                {/* product */}
                {/* product */}

            </div>
            <div className="home_row">
                <Product id={6} title='Acer Nitro 5 AN515-57-79TD Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050 Ti Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 512GB NVMe SSD | Killer Wi-Fi 6 | Backlit Keyboard' price={802} ratings={4} product_img={laptop}key={6}></Product>
                

            </div>
            <div className="home_row">
                <Product id={7} title='Fitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate, 40+ Exercise Modes, Sleep Tracking and more, Black/Graphite, One Size (S & L Bands Included)' price={209} ratings={4} product_img={watch1} key={7}></Product>
                <Product id={8} title='Withings ScanWatch - Hybrid Smartwatch & Activity Tracker with Connected GPS, Heart Rate Monitor, Sleep Monitor, Smart Notifications, Water Resistant with 30-Day Battery Life, Android & iOS' price={474} ratings={5} product_img={watch2} key={8}></Product>
                {/* product */}

            </div>

        </div>
    );
};

export default Home;