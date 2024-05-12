import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayouts() {
  return (
    <div>
      <h1>Help section</h1>
      <NavLink to="faq">Faq</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
