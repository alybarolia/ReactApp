import React from 'react'; 
import { directive } from '@babel/types';
import Entry from "./Entry";

function App(){

  const start = () =>{
    console.log("hello"); //change logic to print another module with score board
  };



  return(
    <div>

      <h1>Build Your Tournament Here!</h1>
      <p></p>
      <Entry />
      <p></p>
      <button onClick = {start}>Start Tournament</button>
    </div>
  );
}

export default App;