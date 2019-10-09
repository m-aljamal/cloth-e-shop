import React from "react";
import { Route } from "react-router-dom";
import Collection_overview from "../../components/collerction-overview/Collection_overview";

const ShopPage = ({ match }) => {
  
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={Collection_overview} />
    </div>
  );
};
export default ShopPage;
