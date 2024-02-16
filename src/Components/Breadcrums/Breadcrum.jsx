import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrow_icon"></img>
      SHOP <img src={arrow_icon} alt="arrow_icon"></img>
      {product.category}
      <img src={arrow_icon} alt="arrow_icon"></img>
      {product.name}
    </div>
  );
};

export default Breadcrum;
