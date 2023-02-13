import React from 'react';
import { useStateValue } from '../../StateProvider';
import './product.css';
import { updateDoc, doc, arrayUnion } from "firebase/firestore"; 
import { db } from '../../firebase';

const Product = ({ id, title, product_img, price, ratings }) => {
    const [{user}, dispatch] = useStateValue();

    const addToBasket = async () => {
       


            // Firebese firestore
            try {
                const docRef = doc(db, 'user', `${user?.email}`);
                await updateDoc(docRef, {
                    basket: arrayUnion(
                        {
                            id: id,
                            title: title,
                            product_img: product_img,
                            price: price,
                            ratings: ratings,
                        }
                      )   
                });
                // console.log("Document written with ID: ", user);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
    }
   
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(ratings)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={product_img} className='product_img' alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
};

export default Product;