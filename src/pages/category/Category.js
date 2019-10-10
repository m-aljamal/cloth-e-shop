import React, { useContext } from "react";
import "./Category.scss";
import { dataWithObjectType } from "../../context/cart_contex";
import Items from "../../components/collection-item/Items";

function CategoryPage({ match }) {
  const objectData = useContext(dataWithObjectType);
  const newData = objectData[match.params.categoryId];
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
