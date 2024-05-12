import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayouts() {
  return (
    <div className="root-layout">
      <header>
        <h1>Welcome</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="careers">Careers</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
