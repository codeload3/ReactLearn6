import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

// the style property in a JSX file accepts a JS object and not a string
// and that object must be enclosed in {}
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
