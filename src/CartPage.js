import React, { useState } from "react";
import Checkout from "./CheckoutPage";

const CartPage = ({ cartItems, handleRemoveCartItem }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const cartItemsList = cartItems.map((item) => (
    <div key={item.name}>
      <h3>{item.name}</h3>
      <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
    </div>
  ));

  const handleRemoveItem = (itemName) => {
    handleRemoveCartItem(itemName);
    setShowCheckout(false); // hide checkout page when remove button is clicked
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? cartItemsList : <p>No items in cart</p>}
      {cartItems.length > 0 && (
        <button onClick={() => setShowCheckout(true)}>Checkout</button>
      )}
      {showCheckout && <Checkout />}
    </div>
  );
};

export default CartPage;
