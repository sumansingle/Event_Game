import React, { useState } from "react";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import "./styles.css";

const GameList = () => {
  const [games, setGames] = useState([
    { name: "Hi Stricker", price: 10 },
    { name: "Puch Challange", price: 20 },
    { name: "Bow & Arrow", price: 30 },
    { name: "Catch Fish", price: 40 }
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (game) => {
    setCart((prevCart) => [...prevCart, game]);
  };

  const handleRemoveCartItem = (gameName) => {
    const updatedCart = cart.filter((item) => item.name !== gameName);
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>Game List</h2>
      <ul className="cart-page">
        {games.map((game) => (
          <li key={game.name}>
            {game.name} - {game.price} Rs
            <button onClick={() => handleAddToCart(game)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <CartPage cartItems={cart} handleRemoveCartItem={handleRemoveCartItem} />
    </div>
  );
};

export default GameList;
