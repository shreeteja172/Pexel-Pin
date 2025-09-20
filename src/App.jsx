import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Body, Contact, About, NotFound } from "./components/index";
import { Analytics } from "@vercel/analytics/react";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
      <Analytics />
    </>
  );
};

export default App;
