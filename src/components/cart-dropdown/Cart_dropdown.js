import React,{useContext} from "react";
import "./Cart_dropdown.scss";
import Button from "../custom-btton/Button";
import Cart_item from '../cart_item/cart_item'
import {ItemContext} from '../../context/cart_contex'

function Cart_dropdown() {
  const  state = useContext(ItemContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          state.map(cartItem => <Cart_item key={cartItem.id} item={cartItem}/>)
        }
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
export default Cart_dropdown;
