import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SigninPage, { action as signinAction } from "./pages/SigninPage";
import SignupPage, { action as signupAction } from "./pages/SignupPage";
import Dashboard from "./components/dashboard/Dashboard";

// import SignupPage, { action as signupAction } from "../pages/SignupPage";

const router = createBrowserRouter([
  { path: "/", element: <SigninPage />, action: signinAction },
  { path: "/signup", element: <SignupPage />, action: signupAction },
  {path : '/dashboard', element: <Dashboard/>}
]);
export default function App() {
  return <RouterProvider router={router} />;
}
