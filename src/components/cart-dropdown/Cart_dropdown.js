import React, { useContext } from "react";
import "./Cart_dropdown.scss";
import Button from "../custom-btton/Button";
import Cart_item from "../cart_item/cart_item";
import { ItemContext } from "../../context/cart_contex";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../context/cart_contex";
function Cart_dropdown({ history }) {
  const state = useContext(ItemContext);
  const { dispatch } = useContext(CartContext);
  console.log(dispatch);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {/* adding items into drowpdown and if no items display message  */}
        {state.length ? (
          state.map(cartItem => <Cart_item key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <Button
        onClick={() => {
          return history.push("/checkout"), dispatch({ type: "TOGGLE_BUTTON" });
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
}
export default withRouter(Cart_dropdown);
