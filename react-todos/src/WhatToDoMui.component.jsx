import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function WhatTodoMui({ addToTask }) { 
  const [text, setText] = useState("");

  const handleInputChange = (evt) => {
    return setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // This prevents the default form submission behavior
    addToTask(text); // Here you can perform any actions you need when the form is submitted
    // setTodoText("");
  };

  return (
    <ListItem>
      <TextField
        onSubmit={handleSubmit}
        value={text}
        onChange={handleInputChange}
        id="filled-basic"
        label="What To-Do ✔️"
        variant="filled"
      />
    </ListItem>
  );
}
