import { Tasks } from "./Tasks";

export const ShowTasks = ({ state, setState }) => {
  return (
    <ul className="todo__list">
      {state.map((task) => {
        return (
          <Tasks
            key={task.id}
            item={task.item}
            isDone={task.isDone}
            id={task.id}
            setState={setState}
          />
        );
      })}
    </ul>
  );
};
