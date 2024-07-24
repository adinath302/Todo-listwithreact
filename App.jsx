import { useState } from "react";
import "./App.css";
import Todo_input from "./Component/Todo_input";
import Todoitems from "./Component/Todoitems";

function App() {
  const [Todos, setTodo] = useState([]);

  const getTodo = (todoitem) => {
    const newTodo = [todoitem, ...Todos];
    setTodo(newTodo);
  };

  return (
    <>
      <Todo_input getTodo={getTodo} />
      <Todoitems Todos={Todos} />
    </>
  );
}

export default App;
