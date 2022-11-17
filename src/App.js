import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import SinglePage from "./pages/singlePage/SinglePage";
import NewPage from "./pages/NewPage/NewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <List />,
  },
  {
    path: "/users/:userId",
    element: <SinglePage />,
  },
  {
    path: "/users/new",
    element: <NewPage />,
  },
  {
    path: "/products",
    element: <List />,
  },
  {
    path: "/products/:productId",
    element: <SinglePage />,
  },
  {
    path: "/products/new",
    element: <NewPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
