import React from "react";
import styling from "./CategoryItem.module.css";

function CategoryItem(prop) {
  const { label, imageSrc } = prop;

  return (
    <div>
      <div>
        <img src={imageSrc} alt={label} className={styling.images} />
      </div>
      <h3 className={styling.header3}>{label}</h3>
      <hr />
    </div>
  );
}

export default CategoryItem;
