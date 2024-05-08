import { useState } from "react";
import Container from "../../components/cardContainer/Container";

const Home = () => {
  const [listOne, setListOne] = useState([]);
  const [listTwo, setListTwo] = useState([]);
  const [listThree, setListThree] = useState([]);
  /////////////////handle Next////////////
  const handleNext = (RenderIndex, inputValue, list) => {
    const filterOne = list.filter((inputValue, index) => index !== RenderIndex);
    if (list === listOne) {
      setListTwo((prev) => [...prev, inputValue]);
      setListOne(filterOne);
    } else if (list === listTwo) {
      setListThree((prev) => [...prev, inputValue]);
      setListTwo(filterOne);
    }
    console.log(RenderIndex, inputValue, list);
  };
  ///////////////handle Previous////////////////////////
  const handlePrevious = (RenderIndex, inputValue, list) => {
    const filterTwo = list.filter((inputValue, index) => index !== RenderIndex);
    if (list === listThree) {
      setListTwo((prev) => [...prev, inputValue]);
      setListThree(filterTwo);
    } else if (list === listTwo) {
      setListTwo(filterTwo);
      setListOne((prev) => [...prev, inputValue]);
    }
  };
  ////////////////handle Delete///////////////////////////
  const handleDelete = (RenderIndex, inputValue, list) => {
    const deleteFilter = list.filter(
      (inputValue, index) => index !== RenderIndex
    );
    if (list === listOne) {
      setListOne(deleteFilter);
    } else if (list === listTwo) {
      setListTwo(deleteFilter);
    } else if (list === listThree) {
      setListThree(deleteFilter);
    }
    console.log(deleteFilter);
  };
  return (
    <div style={style.flexContent}>
      <Container
        list={listOne}
        setList={setListOne}
        handleNext={handleNext}
        handleDelete={handleDelete}
      />
      <Container
        list={listTwo}
        setList={setListTwo}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleDelete={handleDelete}
      />
      <Container
        list={listThree}
        setList={setListThree}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;

////////////////////
const style = {
  flexContent: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 20px",
    height: "100vh",
  },
};
