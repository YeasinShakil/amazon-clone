import React, { useEffect, useState } from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
// import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Subtotal = () => {
    const navigat = useNavigate();
    const [{user}, dispatch] = useStateValue();
    const [basket, setBasket] = useState([]);

    useEffect(()=>{
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc)=> {
            setBasket(doc.data().basket)
        })
    }, [user?.email])

    const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText= {(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order containes a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={(e)=> navigat
            ('/payment')}>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;