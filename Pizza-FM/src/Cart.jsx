import useCurrency from "./useCurrency";

const Cart = ({ cart, checkout }) => {
  let total = cart.reduce((initial, item) => {
    return initial + item.pizza.sizes[item.size];
  }, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span>-
            <span className="type">{item.pizza.name}</span>-
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total:{useCurrency(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
