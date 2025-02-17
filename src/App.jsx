// const App = () => 
// {
//     return (
//         <div>
//             <h1>Welcome to MovieMate</h1>
//             <p>This is a React app powered by Vite!</p>
//         </div>
//     );
// }

// export default App;

import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import React from "react";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default App

