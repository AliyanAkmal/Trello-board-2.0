const Button = ({ btnName, onClick }) => {
  return (
    <button
      style={{
        padding: "8px 12px",
        border: "none",
        fontWeight: "bold",
        background: "mediumSeaGreen",
        borderRadius: "5px",
        color: "white",
      }}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
