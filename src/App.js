import React, { useState, useEffect } from "react";
import "./App.css";
//components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //States
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run one
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);

  //functions
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="text-center">Todo List</h1>
      </header>
      <div class="container mt-5">
        <Form
          setInput={setInput}
          input={input}
          setTodos={setTodos}
          todos={todos}
          setFilter={setFilter}
        />
        <TodoList todos={filteredTodos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
