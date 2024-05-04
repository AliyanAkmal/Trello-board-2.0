import { useCallback, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [number, setNumber] = useState(false);
  const [range, setRange] = useState(8);
  const [chracter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "asdfghjkllqwertyuiopzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM";
    if (number) str += "1234567899";
    if (chracter) str += "!@#$%^&*((((((()_+~=`/?><";

    for (let i = 1; i < range; i++) {
      const whole = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(whole);
    }
    setPassword(pass);
  }, [number, chracter, setPassword, range]);
  useEffect(() => {
    passGen();
  }, [number, chracter, passGen, range]);
  return (
    <>
      <div style={style.wholecont}>
        <h1>Password Generator</h1>
        <input type="text" style={style.input} value={password} />
        <div style={style.btmContainer}>
          <label htmlFor="">Range: {range}</label>
          <input
            type="range"
            onChange={(e) => setRange(e.target.value)}
            min={8}
            max={20}
          />

          <input
            type="checkbox"
            id="num"
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="num">Number</label>

          <input
            type="checkbox"
            id="char"
            onChange={() => setCharacter((prev) => !prev)}
          />
          <label htmlFor="char">Chracters</label>
        </div>
      </div>
    </>
  );
}

export default App;
const style = {
  wholecont: {
    background: "#21295c",
    width: "50vw",
    padding: "2rem",
    color: "#9eb3c2",
    borderRadius: "10px",
  },
  input: {
    padding: "10px",
    width: "80%",
    margin: "5px",
  },
  btmContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
};
