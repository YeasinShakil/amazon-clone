import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../StateProvider';
import './checkoutProduct.css';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';


const CheckoutProduct = ({ id, image, title, price, ratings }) => {
    const [{ user }, dispatch] = useStateValue();
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc) => {
            setBasket(doc.data().basket)
        })
    }, [user?.email])

    const docRef = doc(db, 'user', `${user?.email}`);
    const removeFromBasket = async (passedId) => {
        try {
            const result = basket.filter((item) => item.id !== passedId);
            await updateDoc(docRef, {
                basket: result
            });
        } catch (error) {
            console.log(error)
        }
    }

    

    return (
        <div className='checkoutProduct'>
            <img src={image} alt="" className="checkoutProduct_image " />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_ratings">
                    {Array(ratings)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={() => removeFromBasket(id)}>Remove form Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;