import React from "react";
import ReactDOM from "react-dom/client";

// const parent=React.createElement("div",{id:"parent"}, 
// [React.createElement("h1",{id:"child"},"I am h1"),React.createElement("h2",{id:"child"},"I am h2")]);

// const heading=React.createElement("h1",{id:"heading"},"Hello World From React!");

const Title=()=>(<h1>Namaste React from Title functional component</h1>);

const Head=()=>(
    <>
    {/* component composition: using a component in other component */}
    <Title/>   
    <h2>Namsaste React from Head Component</h2>
    </>
);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Head/>);

