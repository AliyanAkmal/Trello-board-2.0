import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [range, setRange] = useState(8);
  const [character, setCharacter] = useState(false);

  const passGen = useCallback(() => {
    let pass = "";
    let string = "asdfghjklqwertyuiopzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM";
    if (number) string += "123456789";
    if (character) string += "~!@#$%^&*()_+=-><?/";
    for (let i = 0; i < range; i++) {
      const wholePass = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(wholePass);
    }
    return pass;
  }, [number, range, character, setPassword]);
  useEffect(() => {
    setPassword(passGen());
  }, [number, range, character, passGen]);
  const refe = useRef(null);

  const handleClick = useCallback(() => {
    refe.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            value={password}
            readOnly
            ref={refe}
            style={{ width: "80%", padding: "10px 15px" }}
          />
          <button onClick={handleClick}>Copy</button>
        </div>

        <label htmlFor="range">range: {range}</label>
        <input
          type="range"
          id="range"
          value={range}
          min={8}
          max={25}
          onChange={(e) => setRange(e.target.value)}
        />
        <input
          type="checkbox"
          id="number"
          onChange={() => setNumber((prev) => !prev)}
        />
        <label htmlFor="number">number</label>
        <input
          type="checkbox"
          id="characters"
          onChange={() => setCharacter((prev) => !prev)}
        />
        <label htmlFor="characters">characters</label>
      </div>
    </>
  );
}

export default App;
