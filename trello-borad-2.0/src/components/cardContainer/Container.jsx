import { useState } from "react";
import Button from "../button/Button";
import Input from "../inputCard/Input";
import CardRender from "../CardRender/CardRender";

const Container = ({
  list,
  setList,
  handleNext,
  handlePrevious,
  handleDelete,
}) => {
  const [input, setInput] = useState();
  ////////////////
  const [inputValue, setInputValue] = useState("");
  // const [inputGet, setInputGet] = useState(inputValue);
  /////////////////////////////////
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  /////////////////
  const handleAddBtn = () => {
    setList((prev) => [...prev, inputValue]);
    setInput(false);
  };
  /////////////////////////////////

  const handleClick = () => {
    setInput(true);
  };
  return (
    <div style={NewStyle.center}>
      <h1>Display Container</h1>
      <div>
        {list.map((data, index) => {
          return (
            <CardRender
              key={index}
              inputValue={data}
              index={index}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              list={list}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>

      <div>
        {input && input ? (
          <Input
            setInput={setInput}
            handleAddBtn={handleAddBtn}
            handleChange={handleChange}
          />
        ) : (
          <Button btnName="Create" onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default Container;

////////////////////////////////////
const NewStyle = {
  center: {
    texAlign: "center",
    border: "1px solid black",
    width: "30vw",
    padding: "2rem",
    backgroundColor: "whiteSmoke",
  },
};
