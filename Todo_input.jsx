import React from "react";

function Todo_input({ getTodo }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoitem = event.target[0].value;
    getTodo(todoitem);
    event.target[0].value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Todo</h1>
      <input type="text" placeholder="Add Todo" />
      <button type="submit">Add</button>
    </form>
  );
}

export default Todo_input;
