import React from 'react';
import { useStateValue } from '../../StateProvider';
import './product.css';

const Product = ({ id, title, product_img, price, ratings }) => {
    const [{state}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                product_img: product_img,
                price: price,
                ratings: ratings,
            }
        })
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