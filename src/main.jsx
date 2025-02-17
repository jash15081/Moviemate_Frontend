
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// const rootElement = document.getElementById("root");

// if (!rootElement) {
//     console.error("Root element not found!");
// } else {
//     // ReactDOM.createRoot(rootElement).render(<h1>Hello, MovieMate!</h1>);
//     ReactDOM.createRoot(rootElement).render(
//                 <React>
//                     <App />
//                     {/* <h1>Welcome to MovieMate!</h1> */}
//                 </React>
//             );
// }


import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

