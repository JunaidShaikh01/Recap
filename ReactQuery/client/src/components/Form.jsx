import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const createTodo = (text) => {
  return fetch("http://localhost:8000/todo/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: text }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export default function Form() {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const todoMutation = useMutation(createTodo, {
    OnSuccess: () => {
      console.log("Success");
      queryClient.invalidateQueries(["todo"]);
    },

    onError: (error) => {
      console.log("Error", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    todoMutation.mutate(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
