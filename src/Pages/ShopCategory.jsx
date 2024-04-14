import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "./../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("Category:", props.category); // Log the category
  
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = all_product.filter(
    (item) => item.category === props.category &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt={props.banner}
      ></img>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of{" "}
          {all_product.length} products
        </p>

        {/* search bar */}
        <div className="shopcategory-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon"></img>
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
