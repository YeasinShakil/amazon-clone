import React from 'react';
import './product.css';

const Product = ({ title, product_img, price, ratings }) => {
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
                            <p>🌟</p>
                        ))}
                </div>
            </div>
            <img src={product_img} className='product_img' alt="" />
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;