import Button from "../button/Button";

const CardRender = ({
  inputValue,
  index,
  handleNext,
  list,
  handlePrevious,
  handleDelete,
}) => {
  /////////////////
  const handleClickNext = () => {
    handleNext(index, inputValue, list);
  };
  ///////////////////
  const handleClickPrevious = () => {
    handlePrevious(index, inputValue, list);
  };
  ///////////////////
  const handleClickDelete = () => {
    handleDelete(index, inputValue, list);
  };
  return (
    <div style={render.renderWhole}>
      <input
        type="text"
        style={render.inputStyle}
        value={inputValue}
        readOnly
      />
      <div style={render.btnDiv}>
        <Button btnName="Previous" onClick={handleClickPrevious} />
        <Button btnName="Delete" onClick={handleClickDelete} />
        <Button btnName="Edit" />
        <Button btnName="next" onClick={handleClickNext} />
      </div>
    </div>
  );
};

export default CardRender;

////////////////////////////
const render = {
  btnDiv: {
    display: "flex",
    gap: "1rem",

    paddingTop: "1rem",
  },
  renderWhole: {
    border: "1px solid black",
    padding: "2rem",
    // margin: "1.2rem",
  },
  inputStyle: {
    outline: "none",
    border: "none",
    background: "whiteSmoke",
    fontSize: "28px",
    width: "100%",
  },
};
