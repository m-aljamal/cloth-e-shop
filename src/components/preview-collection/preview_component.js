import React from 'react';
import Items from '../collection-item/Items'
import './preview_style.scss'
const Preview_component = ({title, items}) => {
   
    return (
        <div className='collection-preview'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <div className='preview'>
            {
                // useing filter to get only 4 items from the list
                items.filter((item, index) => index < 4 ).map(item => (
                    <Items key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.imageUrl}/>
                ))
            }
          </div>

        </div>
    );
    }

export default Preview_component;