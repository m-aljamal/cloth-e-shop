import React,{useState}  from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CardIcon from "../card-icon/CardIcon";
import "./Header-style.scss";
import { auth } from "../../firebase/firebase.utils";
import Cart_dropdown from "../cart-dropdown/Cart_dropdown";
function Header({ currentUser }) {
  const [isClicked, setIsClicked] = useState(false)

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
        <div onClick={() => setIsClicked(!isClicked)}>
          <CardIcon />
        </div>
      </div>
       {isClicked && <Cart_dropdown /> } 
    </div>
  );
}

export default Header;
