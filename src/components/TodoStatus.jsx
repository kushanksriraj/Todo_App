export const TodoStatus = ({ state }) => {
  return (
    <div className="todo__status">
      <div>
        Total tasks: <span>{state.length}</span>
      </div>
      <div>
        Finished tasks:
        <span> {state.filter((obj) => obj.isDone).length} </span>
      </div>
      <div>
        Tasks remaining:
        <span>{state.filter((obj) => !obj.isDone).length}</span>
      </div>
    </div>
  );
};
