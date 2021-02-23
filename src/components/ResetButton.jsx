export const ResetButton = ({ setState }) => {
  return (
    <button className="btn__reset" onClick={() => setState([])}>
      Reset
    </button>
  );
};
