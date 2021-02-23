import { v4 } from "uuid";

export const TaskInput = ({ setState }) => {
  const setInput = (event) => {
    event.preventDefault();
    const task = event.target[0].value;
    if (task) {
      setState((prev) => {
        const obj = {
          id: v4(),
          item: task,
          isDone: false
        };
        return [...prev, obj];
      });
      event.target[0].value = '';
    }
  };

  return (
    <form className="todo__form" onSubmit={setInput}>
      <input
        className="todo__form__input"
        placeholder="Enter task to add to list"
        type="text"
      />
      <button className="btn__add">Add</button>
    </form>
  );
};
