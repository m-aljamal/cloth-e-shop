import React, { useState } from "react";
import "./directory_style.scss";
import MenuItem from "../menu-item/menu-item_component";
import sections from "./directory.data.js";
const Directory = () => {
  // git the data from directory data file and pass it to the state
  const [sectionsData] = useState(sections);

  // loop throw the data and create a menuItem for each object
  const menuItems = sectionsData.map(section => (
    <MenuItem
      key={section.id}
      size={section.size}
      id={section.id}
      title={section.title}
      image={section.imageUrl}
      link={section.linkUrl}
    />
  ));
  return <div className="directory-menu">
      
  {menuItems}
  </div>;
};

export default Directory;
