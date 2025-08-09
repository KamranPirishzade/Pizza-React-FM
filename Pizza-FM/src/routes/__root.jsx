import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "../ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      experimental_prefetchInRender: true,
    },
  },
});

export const Route = createRootRoute({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cartHook = useState([]);
    return (
      <>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <CartContext.Provider value={cartHook}>
              <Header />
              <Outlet />
              <PizzaOfTheDay />
            </CartContext.Provider>
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ErrorBoundary>
      </>
    );
  },
});
