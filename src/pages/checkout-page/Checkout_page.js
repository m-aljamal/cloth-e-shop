import React,{useContext} from "react";
import './Checkout_page.scss'
import {ItemContext} from '../../context/cart_contex'
import Checkout_item from '../../components/checkout-item/Checkout_item'
function Checkout_page() {
    const state = useContext(ItemContext)
    // get the total amount that should be paid
    let totlat = state.map(item => item.price * item.quantity).reduce((acc, cure) => acc + cure, 0) 
   
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quanitity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      
      {
        state.map(item => <Checkout_item key={item.id} item={item}/>)
    }

<div className='total'>
       <span>TOTAL: ${totlat}</span>
   </div>

    </div>
    
  
  );
}
export default Checkout_page;
