import { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import { addtoDb } from '../Fakedb/Fakedb';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCarts] = useState([])
    useEffect(() => {
        fetch('Fakedb/Fakedb.json')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])

    const addproduct = (newBooks) => {
        if (cart.length === 4) {
            alert("You can't add more item")
            return
        }
        const newCart = [...cart, newBooks]
        addtoDb(newBooks.id)
        setCarts(newCart)
    }
    const emptyCart = () => {
        let newCart = [...cart]
        newCart = []
        setCarts(newCart)
    }
    const chosedProduct = () => {
        let randomNumber;
        let selectedProductCart = [];
        if (cart.length > 0) {
            cart.forEach(item => {
                let cartslength = cart.length
                randomNumber = Math.floor(0 + Math.random() * cartslength)
            });
        }
        selectedProductCart.push(cart[randomNumber]);
        setCarts(selectedProductCart)
    }
    const deleteProduct = (id) => {
        const rest = cart.filter(product => product.id !== id)
        let newCart = [...rest]
        setCarts(newCart)
    }


    return (
        <div className='container'>
            <div className='books'>
                {
                    books.map(book => <Book key={book.id} books={book} addproduct={addproduct}></Book>)
                }
            </div>
            <Cart cart={cart} chosedProduct={chosedProduct} emptyCart={emptyCart} deleteProduct={deleteProduct} ></Cart>
        </div>
    );
};

export default Books; 