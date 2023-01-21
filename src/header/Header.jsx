import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import logo from '../assets/pngwing.com.png';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" className="header_logo" />
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header_searchIcon'></SearchIcon>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div className="header_optionBusket">
                    <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                    <span className='header_optionLineTwo header_basketCount'>0</span>
                </div>
            </div>
        </div>
    );
};

export default Header;