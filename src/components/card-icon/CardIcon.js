import React, { useContext , memo} from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cardIcon.scss";
import { CartContext } from "../../context/cart_contex";
import {ItemContext} from '../../context/cart_contex'

function CardIcon() {

  const { dispatch } = useContext(CartContext);
  const state = useContext(ItemContext)
  // taking the total numbers of selecting items and display it in icon 
  let itemCount = state.reduce((accumalate, cartItem) => accumalate + cartItem.quantity, 0)
  return (
    <div
      className="cart-icon"
      onClick={() => dispatch({ type: "TOGGLE_BUTTON" })}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default memo (CardIcon);
