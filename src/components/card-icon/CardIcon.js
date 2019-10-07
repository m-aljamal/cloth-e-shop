import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cardIcon.scss";
import { CartContext } from "../../context/cart_contex";
function CardIcon() {
  const { dispatch } = useContext(CartContext);

  return (
    <div
      className="cart-icon"
      onClick={() => dispatch({ type: "TOGGLE_BUTTON" })}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CardIcon;
