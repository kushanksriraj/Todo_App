export const DeleteButton = ({ id, setState }) => {
  return (
    <button
      className="btn__delete"
      onClick={() =>
        setState((prev) => [...prev.filter((obj) => obj.id !== id)])
      }
    >
      Delete
    </button>
  );
};
