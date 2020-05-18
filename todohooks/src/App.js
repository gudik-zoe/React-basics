import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./App.css";

let App = () => {
  let [todos, setTodos] = useState([
    { text: "learn about React", isCompleted: false },
    { text: "meet someone", isCompleted: false },
    { text: "relax", isCompleted: false }
  ]);

  let addTodo = text => {
    let newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  let Switcher = index => {
    let newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  let Delete = index => {
    let newTodos = todos.splice(index, 1);
    newTodos = [...todos];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todoList">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            Switcher={Switcher}
            Delete={Delete}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
