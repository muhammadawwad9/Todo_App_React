import React, { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
import "./Form.css";

const Form = ({ setInput, input, setTodos, todos, setFilter }) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef(null);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false, id: uuid() }]);
      setInput("");
    } else {
      alert("Enter a todo ");
    }
    inputRef.current.focus();
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  //auto focus on the add field
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form class="d-flex">
      <input
        type="text"
        className="form-control"
        onChange={handleInputChange}
        value={input}
        ref={inputRef}
      />

      <div className=" div-2 mx-1 d-flex">
        <button className="btn btn-primary mx-1" onClick={submitTodoHandler}>
          Add todo
        </button>
        <select className="custom-select-lg" onChange={changeFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
