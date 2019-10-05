import React from "react";
import "./Items-style.scss";
function Items({ id, name, price, imageUrl }) {
  return (
    <div className="Items">
      <div className="Items-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
        <div className="Items-footer">
            <span className='Items-name'>{name}</span>
            <span className='Items-price'>{price}</span>
        </div>
      
    </div>
  );
}

export default Items;
