import CssBaseline from "@mui/material/CssBaseLine";
import "./App.css";
import TodoList from "./TodoList.component";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList/>
    </>
  );
}

export default App;
