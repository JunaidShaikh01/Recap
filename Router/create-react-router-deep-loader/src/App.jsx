import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Career, { careersLoader } from "./components/Career";
import RootLayouts from "./layouts/RootLayouts";
import HelpLayouts from "./layouts/HelpLayouts";
import CareerLayout from "./layouts/CareerLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayouts />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="careers" element={<CareerLayout />}>
          <Route 
          index 
          element={<Career />}
         loader={careersLoader } />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
