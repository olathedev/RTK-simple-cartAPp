import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'
import { increase, removeItem, total } from '../features/cart/cartSLice'


export const CartItem = ({ id, title, price, image, amount }) => {
    const dispatch = useDispatch()

    // dispatch(total())
    return (
        <article className='cart-item'>
            <img src={image} alt="" srcset="" />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={() => dispatch(removeItem({ id }))}>remove</button>

            </div>

            <div>
                <button className="amount-btn" onClick={() => {
                    dispatch(increase({ id, type: 'INCREASE' }))
                }
                }>
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button className="amount-btn" onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id))
                    }
                    dispatch(increase({ id, type: 'DECREASE' }))
                }
                }>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}
