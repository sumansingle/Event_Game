import "./styles.css";

import React, { useState } from "react";
import LoginPage from "./LoginPage";
//import GameList from "./GameList";
//import games from "./GameItem";
//import Cart from "./CartPage";
//import Checkout from "./Checkout";

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(userData) {
    setUser(userData);
  }

  function handleSignup(userData) {
    setUser(userData);
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>welcome </h1>
          <LoginPage />
        </div>
      )}
    </div>
  );
}

export default App;
