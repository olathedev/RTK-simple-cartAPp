import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './components/Nav'
import { CartContainer } from './components/cartContainer'
import { total } from './features/cart/cartSLice'
import { Modal } from './components/Modal'

function App() {
  
  const {cartItems} = useSelector((state) => state.cart)
  const {isOpen} = useSelector((state) => state.modal)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(total())
  }, [cartItems])

  return (
    <>

    {isOpen && (
      <Modal />

    )}
    <Nav />
    <CartContainer />
    </>
  )
}

export default App
