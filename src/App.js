import "./App.css";
import Form from "./components/form/form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/signup/signup";
import Register from "./components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/register",
      element: <Register/>,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
