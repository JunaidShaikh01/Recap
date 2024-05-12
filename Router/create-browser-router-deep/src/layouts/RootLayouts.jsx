import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function RootLayouts() {
  return (
    <div className="root-outlook">
      <header>
        <nav>
          <h1>Welcome</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
