import React,{useState} from "react";
import './App.css';

function App() {
  const [horizontal,setHori] = useState(10);
  const [vertical,setVertical] = useState(10);
  const [blur,setBlur] = useState(10);
  const [color,setColor] = useState("black");
  return (
    <div className="App">
      <h1>BOX SHADOW GENERATOR</h1>
      <div className="main">
        <div className="main__range">
          <input type="range" value={horizontal} min="-200" max="200" onChange={(e)=>setHori(e.target.value)}/>
          <input type="range" value={vertical} min="-200" max="200" onChange={(e)=>setVertical(e.target.value)}/>
          <input type="range" value={blur} min="-200" max="200" onChange={(e)=>setBlur(e.target.value)}/>
          <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
        </div>
          <div className="main__background">
            <div className="main__boxshadow" style={{boxShadow:`${horizontal}px ${vertical}px ${blur}px ${color}`}}>
              <p> box - shadow : {horizontal}px {vertical}px {blur}px {color}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
