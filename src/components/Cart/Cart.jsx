import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart, emptyCart, chosedProduct, deleteProduct } = props

    return (
        <div className='cart'>
            <h1>This is your Cart</h1>
            {cart.map(item => <CartItem
                cart={item}
                key={item.id}
                deleteProduct={deleteProduct}
            ></CartItem>)}

            <button onClick={() => chosedProduct()} className='btn'>Choose one <FontAwesomeIcon icon={faBoxArchive}></FontAwesomeIcon></button>

            <button onClick={() => emptyCart()} className='btn' >Empty your Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cart; 