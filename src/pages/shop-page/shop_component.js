import React,{useState} from 'react';
import SHOP_DATA  from './shop.data.js'
import Preview_component from '../../components/preview-collection/preview_component'

const ShopPage = () => {
const [collections, setCollections] = useState(SHOP_DATA)
const previewCollecion = collections.map(item =>
     <Preview_component
      key={item.id} 
      title={item.title}
      items={item.items}
      />)
    return (
        <div className='shop-page'>
            <h1>Collections</h1>
            {previewCollecion}
        </div>
    );

    }
export default ShopPage;