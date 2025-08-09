import { useState, useEffect, useContext } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { CartContext } from "../contexts";
import Cart from "../Cart";
import Pizza from "../Pizza";
import useCurrency from "../useCurrency";

export const Route = createLazyFileRoute("/order")({
  component: Order,
});

function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("bbq_ckn");
  const [pizzaSize, setPizzaSize] = useState("S");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    price = useCurrency(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  async function checkout() {
    setLoading(true);
    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    setCart([]);
    setLoading(false);
  }

  function addToCart() {
    setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);
  return (
    <div className="order-page">
      <div className="order">
        <h2>Create order</h2>
        <form action={addToCart}>
          <div>
            <div>
              <label htmlFor="pizza-type"></label>
              <select
                name="pizza-type"
                value={pizzaType}
                onChange={(e) => {
                  setPizzaType(e.target.value);
                }}
              >
                {pizzaTypes.map((pizza) => (
                  <option value={pizza.id} key={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    type="radio"
                    name="pizza-size"
                    id="pizza-s"
                    value="S"
                    checked={pizzaSize === "S"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="pizza-size"
                    id="pizza-m"
                    value="M"
                    checked={pizzaSize === "M"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="pizza-size"
                    id="pizza-l"
                    value="L"
                    checked={pizzaSize === "L"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          {!loading ? (
            <>
              <div className="order-pizza">
                <Pizza
                  title={selectedPizza.name}
                  description={selectedPizza.description}
                  image={selectedPizza.image}
                />
                <p>{price}</p>
              </div>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </form>
      </div>

      {!loading ? <Cart cart={cart} checkout={checkout} /> : "Loading..."}
    </div>
  );
}
