import React from "react";
import "./App.css";

let Todo = ({ index, todo, Switcher, Delete }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => Switcher(index)}>done</button>
        <button onClick={() => Delete(index)}>remove</button>
      </div>
    </div>
  );
};
export default Todo;
