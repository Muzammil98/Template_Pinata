import React from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Landing />
    </React.Fragment>
  );
}

export default App;
