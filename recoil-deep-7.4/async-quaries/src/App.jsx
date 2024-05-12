import React from "react";
import MianApp from "./components/MianApp";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <MianApp />
    </RecoilRoot>
  );
}
