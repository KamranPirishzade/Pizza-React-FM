import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";
import { useState } from "react";

const App = () => {
  const cartHook = useState([]);
  return (
    <CartContext.Provider value={cartHook}>
      <Header />
      <Order />
      <PizzaOfTheDay />
    </CartContext.Provider>
  );
};

export default App;
