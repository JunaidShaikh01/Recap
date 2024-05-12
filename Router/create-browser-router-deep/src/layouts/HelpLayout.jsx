import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet vel iusto
        soluta porro, corporis autem provident ipsam! Exercitationem, ullam
        tempore nihil maiores maxime quod, neque nostrum ipsam rerum placeat
        accusamus.
      </p>
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
