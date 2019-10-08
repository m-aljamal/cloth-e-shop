import React, { useContext } from "react";
import "./Checkout_item.scss";
import { AddItemContext } from "../../context/cart_contex";

function Checkout_item({ item  }) {
  const dispatchItem = useContext(AddItemContext);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} />
      </div>
      
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatchItem({type: 'DECREMENT_ITEM', item: item})} >&#10094; </div>
        <span className='value'>{item.quantity}</span>
        <div className="arrow" onClick={() => dispatchItem({type: 'INCREASE_ITEM', id: item.id})}>&#10095; </div>
      </span>
      <span className="price">{item.price}</span>
      <div
        className="remove-button"
        onClick={() => dispatchItem({ type: "REMOVE_ITEM", id: item.id })}
      >
        &#10005;
      </div>
    </div>
  );
}
export default Checkout_item;
