import "./styles.css";
import { useState } from "react";

import { TodoStatus, TaskInput, ShowTasks, ResetButton } from "./components";

const TodoApp = () => {
  const [state, setState] = useState([]);

  return (
    <div className="todo">
      <header className="todo__header">Todo app</header>

      <TodoStatus state={state} />

      <TaskInput setState={setState} />

      <ShowTasks state={state} setState={setState} />

      {state.length > 2 ? <ResetButton setState={setState} /> : null}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}
