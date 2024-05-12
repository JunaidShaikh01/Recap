import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atoms";

export default function App() {
  return (
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValue(todoAtomFamily(id));
  return (
    <>
      {todo.title},{todo.description}
      <br></br>
    </>
  );
}
