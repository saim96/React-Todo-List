import { useState } from "react";
import List from "@mui/material/List";
import WhatTodoMui from "./WhatToDoMui.component";
import TodoItemMui from "./TodoItemMui.component";

const initialTodos = [
  { id: 1, text: "Walk the dog", completed: false },
  { id: 2, text: "Put the Trash out", completed: false },
  { id: 3, text: "Call Home", completed: false },
  { id: 4, text: "Prayer", completed: true },
  { id: 5, text: "Set Alarms", completed: false },
];

//relevant changing to be made in this component
export default function TodoListMui() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => { //id is which one to remove
    setTodos((prevTodos) => {
      //prevTodo is basically Todos
      return prevTodos.filter((t) => t.id != id); //it will filter over one t aka todo at a time.
      // return a filtered version of the previous to-dos that contains all the other to-dos except for the one that has the ID that was passed in here.
    });
  };
const addTask = (todo) => {
  setTodos ((currTodos) => {
    return [...currTodos, {...todo}]
  })
}

  return (
    <>
    <WhatTodoMui addToTask={addTask}/>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          // "(" is used while implicit return
          <TodoItemMui key={todo.id} todo={todo} remove={removeTodo} /> //rendering through loop
          
        ))}
      </List>
      
    </>
  );
}
