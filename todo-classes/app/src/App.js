import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";
// import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
import Todo from "./todos";

class App extends Component {
  state = {
    todos: [
      { text: "first task", isCompleted: false, id: 1 },
      { text: "second task", isCompleted: false, id: 2 },
      { text: "third task ", isCompleted: false, id: 3 }
    ],
    show: false,
    button: true,
    input: "",
    count: 0,
    result: "",
    text: "",
    remaining: true
  };
  show = () => {
    this.setState({ show: !this.state.show });
  };

  listener = event => {
    let text = event.target.value;
    this.setState({ input: text });
  };

  add = e => {
    let todos = [...this.state.todos];
    let newTodo = {
      text: this.state.input,
      isCompleted: false,
      id: this.count++
    };
    // if (newTodo.text === String || newTodo.text === Number) {
    //   newTodo.text = this.state.input;
    if (newTodo.text === "" || newTodo.text === " ") {
      newTodo.text = "you should write something though";
    } else {
      newTodo.text = this.state.input;
    }
    todos.push(newTodo);
    this.setState({ todos: todos, input: "" });
  };

  remove = index => {
    let todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };
  done = id => {
    let todos = [...this.state.todos];
    todos[id].isCompleted = !this.state.todos[id].isCompleted;
    this.setState({ todos: todos });
  };

  checker = () => {
    let remaining;
    let notDoneTodos = " ";
    let DoneTodos = "";
    let notDone = "";
    let newResult = [];
    let todos = [...this.state.todos];
    for (let i in todos) {
      let baught = this.state.todos[i].isCompleted;

      if (baught === false) {
        notDoneTodos += "\n" + this.state.todos[i].text;
      }

      if (notDoneTodos === " ") {
        remaining = true;
        notDone = "you are all set";
      } else if (notDoneTodos !== ".") {
        remaining = false;
        notDone = "Attention! you still have ";
      }

      this.setState({
        result: notDoneTodos,
        text: notDone,
        remaining: remaining
      });
    }
  };

  render() {
    let classes = [];
    if (this.state.todos.length <= 3) {
      classes.push("lessthan3");
    } else if (this.state.todos.length > 3) {
      classes.push("more");
    } else if (this.state.todos.length > 5) {
      classes.push("four");
    }

    return (
      <div className="ra2isi">
        <button
          className={this.show ? "btnhide" : "btnshow"}
          onClick={this.show}
        >
          {this.state.show ? "show" : "hide"}
        </button>

        <h2 className={classes.join("")}> Todo List </h2>
        <h3>Items to buy # {this.state.todos.length}</h3>

        <div className={this.state.show ? "hide" : "show"}>
          {this.state.todos.map((todo, id) => (
            <Todo
              todo={todo.text}
              class={this.state.todos[id].isCompleted ? "todoDone" : "todo"}
              done={() => this.done(id)}
              remove={() => this.remove(id)}
              key={id}
              btnName={this.state.todos[id].isCompleted ? "undone" : "done"}
            />
          ))}
          {/* <form onSubmit={this.add}> */}
          <input
            placeholder="add a todo"
            className="input"
            onChange={event => this.listener(event)}
            value={this.state.input}
            type="text"
          />
          {/* </form> */}
          <button className="add" onClick={this.add}>
            add
          </button>
          <button className="check" onClick={this.checker}>
            check
          </button>
          <div className={this.state.remaining ? "text" : "textwarning"}>
            {this.state.text}
            <div className="unchecked">{this.state.result}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
