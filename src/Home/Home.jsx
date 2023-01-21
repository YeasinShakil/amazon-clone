import React from 'react';
import './home.css';
import homeBanner from '../assets/home banner 1.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
             <img src={homeBanner} alt="" className="home_image" />
            </div>
            
        </div>
    );
};

export default Home;