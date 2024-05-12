import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Welcome</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
