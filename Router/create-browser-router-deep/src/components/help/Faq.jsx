import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Faq() {
  return (
    <div>
      <h1>Faq</h1>
      <NavLink to="mostrecentquestion">Most recent asked question</NavLink>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
