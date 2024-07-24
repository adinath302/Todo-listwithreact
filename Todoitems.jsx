import React from "react";

function Todoitems({Todos}) {
  return (
    <ul>
      {Todos.map((Todo, i) => (
        <li className="list" key={i}>{Todo}</li>
      ))}
    </ul>
  );
}

export default Todoitems;
