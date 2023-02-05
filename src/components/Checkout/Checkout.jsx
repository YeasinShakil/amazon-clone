import React from 'react';
import { useStateValue } from '../../StateProvider';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();


    const banner_ad = 'https://connect-assets.prosple.com/cdn/ff/zNryDlf-uf0qIh0kt7iOyMHP2B0NW30YDNDCOXMU-NM/1578558097/public/2020-01/Banner-Amazon-893x321-2020.jpg';
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src={banner_ad} alt="" className="checkout_ad" />
                <div className="">
                    <p>Hello, {user?.email}</p>
                    <h2 className="checkout_title">Your shopping busket</h2>
                    {
                        basket.map(item => (

                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.product_img}
                                price={item.price}
                                ratings={item.ratings}></CheckoutProduct>
                        ))
                    }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>

            </div>
        </div>
    );
};

export default Checkout;