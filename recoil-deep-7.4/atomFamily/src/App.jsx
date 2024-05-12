import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      {/* <updateTodos /> */}
      <UpdateComponent id={3} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  );
}

// function updateTodos() {
//   const update = useSetRecoilState(todosAtomFamily(3));

//   useEffect(() => {
//     setTimeout(() => {
//       update({
//         id: "3",
//         title: "newTodo",
//         description: "New Todo added succesfully",
//       });
//     }, 3000);
//   }, []);
// }

function UpdateComponent({ id }) {
  const updateTodo = useSetRecoilState(todosAtomFamily(
    id));
  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: { id },
        title: "new todo",
        description: "New todo added",
      });
    }, 5000);
  }, []);
  return <div></div>;
}
function Todo({ id }) {
  // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
