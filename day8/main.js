import React from "react";
import ReactDOM from "react-dom/client";

// console.log(React);
const domRoot=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(domRoot);

const App=()=>{
    console.log("Varun!")
    return(
        <div>
            <h1>Hello From Hyderabad!</h1>
        </div>
    )
}

reactRoot.render(<App />);