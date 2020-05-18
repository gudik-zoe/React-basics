import React, { useState } from "react";

let TodoForm = ({ addTodo }) => {
  let [value, setValue] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <button onClick={handleSubmit}> add </button>
    </div>
  );
};
export default TodoForm;
