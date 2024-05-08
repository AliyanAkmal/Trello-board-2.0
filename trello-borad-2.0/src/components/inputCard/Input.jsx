import Button from "../button/Button";

const Input = ({ setInput, handleChange, handleAddBtn, inputValue }) => {
  const handleClick = () => {
    setInput(false);
  };
  return (
    <div style={input.conWhole}>
      <button style={input.contX} onClick={handleClick}>
        X
      </button>
      <input type="text" style={input.styInput} onChange={handleChange} />
      <div>
        <Button btnName="Add" onClick={handleAddBtn} />
      </div>
    </div>
  );
};

export default Input;
const input = {
  conWhole: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    boxShadow: "1px 1px 10px black",
    padding: "10px 16px",
    borderRadius: "5px",
  },
  contX: {
    // width: "10px",
    background: "aliceBlue",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    cursor: "pointer",
    padding: "2px 5px",
  },
  styInput: {
    padding: "10px 14px",
    fontWeight: "bold",
    fontSize: "18px",
    outline: "none",
    borderRadius: "5px",
  },
};
