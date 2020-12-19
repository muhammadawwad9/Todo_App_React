import React from "react";
import "./Todo.css";
const Todo = ({ todo, setTodos }) => {
  const deleteHandler = () => {
    setTodos((prev) => prev.filter((elem) => elem.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos((prev) => {
      return prev.map((elem) => {
        if (elem.id === todo.id) {
          return {
            ...elem,
            completed: !elem.completed,
          };
        }
        return elem;
      });
    });
  };
  return (
    <div className="d-flex justify-content-center w-50 mx-auto mt-3 ">
      <li
        className={`list-group-item w-50 ${todo.completed ? "completed" : ""}`}
      >
        {todo.text}
      </li>
      <button className="btn btn-danger" onClick={deleteHandler}>
        Delete
      </button>
      <button className="btn btn-success" onClick={completeHandler}>
        Complete
      </button>
    </div>
  );
};

export default Todo;
