import React from "react";
import ReactDOM from "react-dom";

import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
var images = new Array();
for (const animal in animals){
  images.push(<img key={animal} className='animal' alt ={animal} 
  src={animals[animal].image} aria-label={animal} role='button'/>)
}
const background = (<img className="background" src="/images/ocean.jpg" alt="ocean"/>);
const animalFacts = (<h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>);

const mainDiv = (
  <div>
    {animalFacts }
    {background}
    <div className='animals'>{images}</div>
  </div>
);
ReactDOM.render(mainDiv, document.getElementById("root"));

