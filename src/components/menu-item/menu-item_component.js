import React from 'react'
import './menu-item_styles.scss'
const MenuItem = ({id, title, image, size}) =>{
    
       
return(
                    // add larger class if the component has a large in data 
    <div className={` menu-item ${(size === 'large') && 'large'}`}>
        <div className='background-image' style={{backgroundImage: `url(${image}) `}}/>
          <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
)
}
export default MenuItem;