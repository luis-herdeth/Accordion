import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import dataAccordion from "./services/api";
import arrowLeft from "./assets/arrow-left.svg";
import arrowDown from "./assets/arrow-down.svg";

function App() {
  const [data, setData] = useState(dataAccordion);
  const [showText, setShowText] = useState();

  const handleClick = (index) => {
    setShowText((currentIndex)=>{
      if(currentIndex === index){
        return -1
      }else{
        return index
      }
    })    
  };

  return (
    <>
      <div className="App">
        <h1>Vite + React</h1>
        <Button clase="primary optionClass" text={"Primary"} />
        <span></span>
        <Button clase="success" text={"Sucess"} />
        <span></span>
        <Button clase="danger" text={"Danger"} />
      </div>

      {/* API DATA */}

      {data.map((list, index) => (
        <div key={list.id} onClick={() => handleClick(index)}>
          <div>

            <h3>{list.label}</h3>
            {showText === index ? (
              <>
                <img className="dInline" src={arrowDown} alt="arrowDown" />
                <p className="pepe">{list.content}</p>
              </>
            ) : (
              <img src={arrowLeft} alt="arrowLeft" />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
