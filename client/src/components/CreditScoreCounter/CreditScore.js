import React from "react";
import {useState} from "react"

function CreditScore(){

    let [num, setNum]= useState(680);
  let incNum =()=>{
    if(num<730)
    {
    setNum(Number(num)+10);
    }
  };
  let decNum = () => {
     if(num>630)
     {
      setNum(num - 10);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <div className="col-xl-1">
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}


export default CreditScore;


// Write code in a CreditScore.js component that allows score changes.