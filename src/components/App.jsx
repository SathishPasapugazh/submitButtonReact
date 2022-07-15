import React, {useState} from "react";

function App() {
const [state, setState] = useState(false);

  function hoverIn(){
     setState("black"); 
    }

function hoverOut(){
  setState("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      <input type="text" placeholder="What's your name?" />
      <button style = {{backgroundColor:state === "black"?"black":"white"}} onMouseOver={hoverIn} onMouseOut={hoverOut} onClick={hoverIn}>Submit</button>
    </div>
  );
}

export default App;


//console.log("black");
//console.log("white");
//console.log(hoverOut);
//console.log(state);
//function Checking(){
//if (state=0){
//setState(hoverIn);
//}
//}
//console.log(hoverOut);
//console.log(hoverIn);
//console.log(sathish);
//var sathish = {backgroundColor:state};