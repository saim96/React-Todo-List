import CssBaseline from "@mui/material/CssBaseLine";
import "./App.css";

import TodoListMui from "./TodoListMui.component";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoListMui/>
    </>
  );
}

export default App;
