import React from "react";
import { Outlet } from "react-router-dom";

export default function CareerLayout() {
  return (
    <div>
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        molestiae.
      </p>

      <Outlet />
    </div>
  );
}
