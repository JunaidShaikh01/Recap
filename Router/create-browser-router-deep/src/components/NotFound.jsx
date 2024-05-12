import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Hello page not fond !</h1>
      <h2>Error 404!</h2>
      <p>
        You can go back to <NavLink to="/">Home Page</NavLink>
      </p>
    </div>
  );
}
