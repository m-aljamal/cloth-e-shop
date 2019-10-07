import React from "react";
import "./Cart_dropdown.scss";
import Button from "../custom-btton/Button";
function Cart_dropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
export default Cart_dropdown;
