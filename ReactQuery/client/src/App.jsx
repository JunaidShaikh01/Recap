import { useQuery } from "@tanstack/react-query";
import Form from "./components/Form";

function App() {
  const { data, status, isFetching, error } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/todo");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  console.log("Data", data);

  if (isFetching) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div>
      <Form />
      <p>Status : {status}</p>
      {data &&
        data.data &&
        data.data.map((todo) => (
          <li key={todo.id}>
            {todo.title} , {todo.id}
          </li>
        ))}
    </div>
  );
}

export default App;
