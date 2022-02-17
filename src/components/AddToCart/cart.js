import React, { useState, useEffect, useContext } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";

import { db } from '../../firebase/firebase';
import { AuthContext } from '../../authcontext/authcontext'
import './cart.css'


function Cart() {

  const [myCart, setMyCart] = useState([])
  let total = 0

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
      db.collection('users').doc(currentUser.uid).collection('cart').onSnapshot(snapshot => (
        setMyCart(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        )
    ))
  }, [currentUser.uid])

  for (const key in myCart) {
    total = total + Number(myCart[key].data.price)
  }
  



  const removeFromCart = (id) => {
      db.collection('users').doc(currentUser.uid).collection('cart').doc(id)  
        .delete() 
        .then(() => {
          alert('removed from cart')
        }) 
  }

  return (
    <div className='cart'>
      <div className='cart-container'>
         <div className='cart-header'>
             <h2>Shopping Cart</h2>
         </div>
         <div className='cart-body'>
              <div className='cart-items'>
               <h2>Items Selected:</h2>
               <div className='cartItem'>
                  {myCart.map((cart) => (
                    <div key={cart.id} className='item_details'>
                      <h3>{cart.data.name}</h3>
                      <h6>₹ {cart.data.price}</h6>
                      <IoIosRemoveCircle onClick={() => {removeFromCart(cart.id)}} className='removeCart'/>
                    </div>
                  ))}
               </div>
              </div>
            <div className='cart-price'>
              <div className='cart-total'>
                <div className='price-field'>
                  <h2>Subtotal:</h2>
                  <p>₹{total}</p>
                </div>
                <div className='div-line'>
                </div>
                <div className='price-field'>
                  <h2>Delivery charges:</h2>
                  <p>₹35</p>
                </div>
                <div className='div-line'>
                </div>
                <div className='price-field big_price'>
                  <h2>Total:</h2>
                  <p>₹{total + 35}</p>
              </div>
              </div>
              <button className='checkout_btn'>
                Checkout
              </button>
            </div>
         </div>
      </div>

    </div>
  )
}

export default Cart