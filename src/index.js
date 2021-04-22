import React from "react";
import ReactDOM from "react-dom";

const name = "Adrian";
const lName = "Chapa";
const luckyNumber = 3;

ReactDOM.render(
  <div>
    <h1>Hello {`${name} ${lName}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
