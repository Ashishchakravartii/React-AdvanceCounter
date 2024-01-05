import React from "react";
import { useState } from "react";

const App = () => {
  const [Counter, setCounter] = useState(0);

  const addHandler = () => {
    setCounter(Counter + 1);
  };

  const subHandler = () => {
    setCounter(Counter - 1);
  };
  const mulHandler = () => {
    setCounter(Counter * 2);
  };
  const divHandler = () => {
    setCounter(Counter / 2);
  };
  const restartHandler = () => {
    setCounter(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <h1>
        Hey, This is your Advance
        <span style={{ color: "#FF004D" }}>COUNTER!!!</span>
      </h1>
      <h1 style={{ color: "yellowgreen" }}>Value : {Counter}</h1>
      <div>
        <button onClick={addHandler} style={{ backgroundColor: "white" }}>
          +Add
        </button>
        <button
          onClick={subHandler}
          style={{ backgroundColor: "white", marginLeft: "2vmax" }}
        >
          -Sub
        </button>
        <button
          onClick={mulHandler}
          style={{ backgroundColor: "white", marginLeft: "2vmax" }}
        >
          *Multiply by 2
        </button>
        <button
          onClick={divHandler}
          style={{ backgroundColor: "white", marginLeft: "2vmax" }}
        >
          *Divide by 2
        </button>
        <button
          onClick={restartHandler}
          style={{ backgroundColor: "white", marginLeft: "2vmax" }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default App;
