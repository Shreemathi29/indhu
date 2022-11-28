import React from "react"
import GroceryCard from "./GroceryCard"
import "./style.css"

const GroceryDeals = ({ proItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Grocery</h1>
          </div>
          <GroceryCard productItems={proItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default GroceryDeals