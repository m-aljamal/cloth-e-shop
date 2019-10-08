import React from 'react';
import './Checkout_item.scss'

function Checkout_item({item: {name, imageUrl, price, quantity}}) {

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    );

    }
export default Checkout_item