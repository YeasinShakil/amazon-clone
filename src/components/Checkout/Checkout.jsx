import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Checkout = () => {
    const [{ user }, dispatch] = useStateValue();
    const [basket, setBasket] = useState([]);

    useEffect(()=>{
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc)=> {
            setBasket(doc.data().basket)
        })
    }, [user?.email])
    // console.log(basket)


    const banner_ad = 'https://connect-assets.prosple.com/cdn/ff/zNryDlf-uf0qIh0kt7iOyMHP2B0NW30YDNDCOXMU-NM/1578558097/public/2020-01/Banner-Amazon-893x321-2020.jpg';
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src={banner_ad} alt="" className="checkout_ad" />
                <div className="">
                    <strong>Hello, {user?.email}</strong>
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