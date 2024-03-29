import React, { useContext, memo } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CardIcon from "../card-icon/CardIcon";
import "./Header-style.scss";
import { auth } from "../../firebase/firebase.utils";
import Cart_dropdown from "../cart-dropdown/Cart_dropdown";
import { UserContext } from "../../context/user_context";
import { CartContext } from "../../context/cart_contex";

function Header() {
  const { isClicked } = useContext(CartContext);
  const currentUser = useContext(UserContext);

  return (
    <div className="Header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          // signOut is pruvided from auth lipraray
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CardIcon />
      </div>
      {isClicked && <Cart_dropdown />}
    </div>
  );
}

export default memo (Header);
