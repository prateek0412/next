"use client";

import TodoList from "./toDoList/toDoList";
import AddTodo from "./addToDo/addToDo";
import { useState } from "react";
import type { Todo } from "../../../common/type/types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      userId: 1,
      title: "Wave hello! 👋",
      completed: false,
      id: 1,
    },
    {
      userId: 1,
      title: "Get Coffee ☕☕☕",
      completed: false,
      id: 2,
    },
    {
      userId: 1,
      title: "Go to Work ⚒",
      completed: false,
      id: 3,
    },
    {
      userId: 1,
      title: "Write Code 💻",
      completed: false,
      id: 4,
    },
  ]);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "solid",
          width: "500px",
        }}
      >
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
