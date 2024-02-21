import React, { useContext } from "react";
// import { useNavigate  } from "react-router-dom";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  // const navigate  = useNavigate ();

  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  // const handlePayment = () => {
  //   fetch("http://localhost:4000/pay", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userId: getUserId(), // Implement this function to get the user ID
  //       cartItems: cartItems,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response from the pay API
  //       console.log(data);
  //       // Redirect to payment page or handle as needed
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       // Handle errors if any
  //     });
  // };
  // const handleCheckout = () => {
  //   handlePayment();

  //   // Redirect to payment page after successful response
  //   navigate.push("/payment"); // Change "/payment" to your payment page route
  // };
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr></hr>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  className="carticon-product-icon"
                  src={e.image}
                  alt={e.image}
                ></img>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="remove_icon"
                ></img>
              </div>
              <hr></hr>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Fee</p>
            </div>
            <hr></hr>
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>
            If you have a promo code,<br></br> Enter it here
          </p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter promo code"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
