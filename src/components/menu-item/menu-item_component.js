import React from "react";
import { withRouter } from "react-router-dom"
import "./menu-item_styles.scss";
const MenuItem = ({  title, image, size, history, link, match }) => {
    
  return (
    // add larger class if the component has a large in data
    <div onClick={() => history.push(`${match.url}${link}`)} className={` menu-item ${size === "large" && "large"}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image}) ` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter( MenuItem);
