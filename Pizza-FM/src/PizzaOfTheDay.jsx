/* eslint-disable react-hooks/rules-of-hooks */
import useCurrency from "./useCurrency";
import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">
            From: {useCurrency(pizzaOfTheDay.sizes.S)}
          </p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
