import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './CartItem.css'


const CartItem = (props) => {
    const { cart, deleteProduct } = props;
    const { picture, name, id } = props.cart;
    return (
        <div className='cart-item'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <button onClick={() => deleteProduct(id)} className='cartBtn' >
                <FontAwesomeIcon icon={faDeleteLeft} />
            </button>
        </div>
    );
};

export default CartItem; 