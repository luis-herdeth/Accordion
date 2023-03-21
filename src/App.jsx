import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import dataAccordion from "./services/api";
import arrowLeft from "./assets/arrow-left.svg";
import arrowDown from "./assets/arrow-down.svg";

function App() {
  const [data, setData] = useState(dataAccordion);
  // const [showText, setShowText] = useState(-1);
  const [showText, setShowText] = useState(-1);

  const handleClick = (index) => {
    setShowText(index);
  };
  return (
    <>
      <div className="App">
        <h1>Vite + React</h1>
        <Button clase="primary" text={"Primary"} />
        <span></span>
        <Button clase="success" text={"Sucess"} />
        <span></span>
        <Button clase="danger" text={"Danger"} />
      </div>

      {/* API DATA */}

      {data.map((list, index) => (
        <div key={list.id} onClick={() => handleClick(index)}>
          <div className="labelArrow">
            <h3>{list.label}</h3>
            {/* {showText ===index? 'arrowLeft':'arrowTop' } */}
            {showText === index ? (
              <img src={arrowDown} alt="arrowDown" />
              ) : (
              <img src={arrowLeft} alt="arrowLeft" />
            )}
          </div>
          {index === showText ? <p className="pepe">{list.content}</p> : ""}
        </div>
      ))}
    </>
  );
}

export default App;
