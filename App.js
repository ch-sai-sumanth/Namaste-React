import React from "react";
import ReactDOM from "react-dom/client";

// const parent=React.createElement("div",{id:"parent"}, 
// [React.createElement("h1",{id:"child"},"I am h1"),React.createElement("h2",{id:"child"},"I am h2")]);

// const heading=React.createElement("h1",{id:"heading"},"Hello World From React!");

const jsxElement= (<h1 id="heading">Namaste React from JSX</h1>);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxElement);

console.log(jsxElement);