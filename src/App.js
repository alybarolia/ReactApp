import React from "react";
import Entry from "./Setup";
import Tournament from "./Tournament";

function App() {
  const start = () => {
    console.log("hello"); //change logic to print another module with score board
  };

  return (
    <div>
      <h1>Build Your Tournament Here!</h1>
      <p></p>
      <Tournament />
      <p></p>
      <button onClick={start}>Start Tournament</button>
    </div>
  );
}

export default App;
