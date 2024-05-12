import React from "react";
import MainApp from "./components/MainApp";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}
