import React, { useContext } from "react";
import "./Category.scss";
import { DataContext } from "../../context/cart_contex";
import Items from "../../components/collection-item/Items";

function CategoryPage({ match }) {
  const DataItems = useContext(DataContext);
  const collection_id_map = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
  };
  const newData = DataItems.find(
    collection => collection.id === collection_id_map[match.params.categoryId]
  );
  const { title, items } = newData;

  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <Items key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
