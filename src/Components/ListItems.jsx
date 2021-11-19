import React from "react";
import CategoryItem from "./CategoryItem";

function ListItems() {
  return (
    <>
      <CategoryItem
        label="Grocery"
        imageSrc="https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg"
      />
      <CategoryItem
        label="Electronics"
        imageSrc="https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg"
      />
      <CategoryItem
        label="Medical"
        imageSrc="https://d3e44x6tjqv3e6.cloudfront.net/sites/default/files/2019-08/Medical%20Aid%20Abroad.jpg"
      />
    </>
  );
}

export default ListItems;
