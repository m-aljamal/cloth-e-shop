import React,{memo} from 'react';
import './cart_item.scss'
const  Cart_item = ({item}) => {
    const {name, price, imageUrl, quantity} = item
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} * ${price}</span>

            </div>
        </div>
    );

    }
export default memo (Cart_item)