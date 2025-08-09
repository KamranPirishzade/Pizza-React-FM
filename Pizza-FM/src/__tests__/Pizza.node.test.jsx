import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("Alt text renders properly on Pizza component image", async () => {
  const name = "My fav pizza";
  const src = "https://picsum.photos/200";
  const screen = render(<Pizza title={name} image={src} description="Super" />);
  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
test("IF there is no image then pizza should have placeholder image", async () => {
  const screen = render(
    <Pizza title="My fav pizza" description="One of the best" />
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});



