import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import SigninPage, { action as signinAction } from "./pages/SigninPage";
import SignupPage, { action as signupAction } from "./pages/Signuppage";
import Dashboard from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <SigninPage />, Component: signinAction },
  { path: "/signup", element: <SignupPage />, Component: signupAction },
  { path: "/dashboard", element: <Dashboard /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
