import React,{useContext} from 'react';
import './Collection_overview.scss'
import {DataContext} from '../../context/cart_contex'
import Preview_component from '../preview-collection/preview_component'
function Collection_overview() {
    const DataItems = useContext(DataContext)

    return (
        <div className='collections-overview'>
          { DataItems.map(item =>
     <Preview_component
      key={item.id} 
      title={item.title}
      items={item.items}
      />)}
        </div>
    );

    }
export default Collection_overview