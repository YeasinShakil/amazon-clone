import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';
import './payment.css';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { Link } from 'react-router-dom';

import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Payment = () => {
    const [{user}, dispatch] = useStateValue();

    const [basket, setBasket] = useState([]);

    useEffect(()=>{
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc)=> {
            setBasket(doc.data().basket)
        })
    }, [user?.email])


    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>Checkout (<Link to='/checkout'>{basket?.length
                }</Link> items)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>09, Dak bangla</p>
                        <p>Sonagazi, Feni</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment_item">
                       {
                        basket.map(item=> (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.product_img}
                            price={item.price}
                            ratings={item.ratings}
                            ></CheckoutProduct>
                        ))
                       }
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_address">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;