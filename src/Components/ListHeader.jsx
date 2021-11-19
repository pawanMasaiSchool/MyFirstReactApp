import React from "react";
import styling from "./ListHeader.module.css";
function ListHeader({ title }) {
  return <h4 className={styling.header}>{title}</h4>;
}

export default ListHeader;
