import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("Check cart snapshot when nothing given to component", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});


//Can be used for api correct api integration with back 
test("test request data type", () => {
  expect({
    id: "calabrese",
    name: "The Calabrese Pizza",
    category: "Supreme",
    description:
      "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
    image: "/public/pizzas/calabrese.webp",
    sizes: { S: 12.25, M: 16.25, L: 20.25 },
  }).toMatchSnapshot();
});
