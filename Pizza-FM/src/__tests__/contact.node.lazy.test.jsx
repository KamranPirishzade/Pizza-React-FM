import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";
import createFetchMock from "vitest-fetch-mock";

const queryClient = new QueryClient();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("Contact data is submitted properly", async () => {
  fetchMocker.mockResponse(JSON.stringify({ status: "ok" }));
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>
  );

  const name = screen.getByPlaceholderText("Name");
  const email = screen.getByPlaceholderText("Email");
  const message = screen.getByPlaceholderText("Your message");

  const testData = {
    name: "Kamran",
    email: "kamranpirishzade@gmail.com",
    message: "Hello there",
  };
  name.value = testData.name;
  email.value = testData.email;
  message.value = testData.message;

  const btn = screen.getByRole("button");
  btn.click();

  const h3 = await screen.findByRole("heading", { level: 3 });
  expect(h3.textContent).contain("Submitted");
  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toContain("/api/contact");
  expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testData),
  });
});
