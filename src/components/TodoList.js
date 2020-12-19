import React from "react";
//components
import Todo from "./Todo";
const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="list-unstyled">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} setTodos={setTodos} />;
      })}
    </ul>
  );
};

export default TodoList;
