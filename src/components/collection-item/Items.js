import React,{useContext} from "react";
import "./Items-style.scss";
import Button from '../custom-btton/Button'
import {AddItemContext} from '../../context/cart_contex'
function Items({ item }) {
  const  dispatchItem = useContext(AddItemContext);
  const {name, price, imageUrl} = item
  return (
    <div className="Items">
      <div className="Items-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
        <div className="Items-footer">
            <span className='Items-name'>{name}</span>
            <span className='Items-price'>{price}</span>
        </div>
      <Button onClick={() => dispatchItem({type: 'ADD_ITEM', item: item })} > Add to cart </Button>
    </div>
  );
}

export default Items;
