import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from './CartItem';
import { clearCart } from '../features/cart/cartSLice';
import { openModal } from '../features/modal/modalSlice';

export const CartContainer = () => {

    const dispatch = useDispatch()

    const {amount, cartItems, total} = useSelector(store => store.cart)
    console.log(amount);

    if(amount < 1) {
        return (

            <section className="cart">
            
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>Your cart is currently empty</h4>
                </header>
        
            </section>
          )
    }

    return (
        <section className="cart">
            <header>
        <h2>your bag</h2>
      </header>
        <div>
            {cartItems.map((item, index) => (
                <CartItem key={index} {...item} />
            ))}
        </div>
            <footer>
        <hr />

                <div className="cart-total">
                    <h4>
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                        
                    </h4>

                    <button className="clear-btn" onClick={() => dispatch(openModal())}>Clear cart</button>
                </div>
            </footer>
        </section>
    )
  
}
