import React from "react";

let Todo = props => {
  return (
    <div className={props.class}>
      {props.todo}
      <button onClick={props.remove}>del</button>
      <button onClick={props.done}>{props.btnName}</button>
    </div>
  );
};

export default Todo;
