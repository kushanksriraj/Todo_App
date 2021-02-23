import { DeleteButton } from "./DeleteButton";

export const Tasks = ({ item, isDone, id, setState }) => {
  return (
    <div className="todo__list__item__div">
      <li
        className="todo__list__item"
        style={{ textDecoration: isDone ? "line-through" : "none" }}
        onClick={() =>
          setState((prev) => [
            ...prev.map((obj) => {
              if (obj.id === id) {
                obj.isDone = !isDone;
              }
              return obj;
            })
          ])
        }
      >
        {/* This gives warning: changing from uncontrolled to controlled */}
        {/* better to use refs here */}
        <input type="checkbox" checked={isDone ? "checked" : null} />

        {item}
      </li>
      <DeleteButton id={id} setState={setState} />
    </div>
  );
};
