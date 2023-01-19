import "./App.css";
import Form from "./components/form/form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/signup/signup";
import Register from "./components/Register/Register";
import Home from "./components/Home/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/signin",
      element: <Form />,

    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path:"/home",
      element:<Home/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
