import React from "react";
import "./App.css";

// components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo></InputTodo>
        <ListTodos></ListTodos>
      </div>
    </>
  );
}

export default App;
