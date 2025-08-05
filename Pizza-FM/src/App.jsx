import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
