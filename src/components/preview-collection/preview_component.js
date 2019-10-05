import React from 'react';

const Preview_component = ({title, items}) => {
   
    return (
        <div className='collection-previes'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <div className='preview'>
            {
                // useing filter to get only 4 items from the list
                items.filter((item, index) => index < 4 ).map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
          </div>

        </div>
    );
    }

export default Preview_component;