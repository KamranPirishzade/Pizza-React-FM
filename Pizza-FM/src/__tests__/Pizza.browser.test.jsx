import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text properly renders on image", async () => {
  const name = "My pizza";
  const description = "It is highly recommended";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza title={name} image={src} description={description}></Pizza>
  );

  const img = await screen.getByRole("img");
  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("alt", name);
  await expect.element(img).toHaveAttribute("src", src);
});
