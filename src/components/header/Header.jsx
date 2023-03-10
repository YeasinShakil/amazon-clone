import React, { useEffect, useState } from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import logo from '../assets/pngwing.com.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Header = () => {

    const [{ user }, dispatch] = useStateValue();
    
    const [basket, setBasket] = useState([]);

    useEffect(()=>{
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc)=> {
            setBasket(doc.data().basket)
        })
    }, [user?.email])

    const handleAuthentication = () => {
        if(user) {
            signOut(auth);
        }
    }
    return (
        <div className='header'>
            <Link to='/'>

                <img src={logo} alt="" className="header_logo" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header_searchIcon'></SearchIcon>
            </div>
            <div className="header_nav" >
                <Link to={!user && '/login'}>
                    <div className="header_option" onClick={handleAuthentication}>
                        <span className="header_optionLineOne">{!user? 'Hello' : user?.email}</span>
                        <span className="header_optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to='checkout'>

                    <div className="header_optionBusket">
                        <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;