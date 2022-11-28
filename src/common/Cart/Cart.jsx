import React from "react"
import "./style.css"
//import { Link } from "react-router-dom"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>
            
          <div className='cart-total product-5'>
            <h2>Cart Summary</h2>
            <div className='imm d_inline'>
              <h4>BILL NO: 543512</h4><br>
              </br>
              <h4> Date:  26/11/2022</h4><br>
              </br>
              <h4>Total Price : ${totalPrice}.00</h4>
              
              <h4 style={{fontSize:"25px", color:"red"}}>
                ThankYou for Choosing VENUS!!! Visit Again....
              </h4>
              <a href="http://localhost:3001/" style={{backgroundColor:"white",
        fontSize:"25px"}}>Checkout</a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart

/*<Link to="http://localhost:3001/">
          <button style={{backgroundColor:"white",
        fontSize:"25px"}}> Checkout</button>
        </Link>*/
