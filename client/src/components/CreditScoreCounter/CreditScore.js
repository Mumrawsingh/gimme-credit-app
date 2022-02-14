import React from "react";
import {useState} from "react"

function CreditScore(){

    let [num, setNum]= useState(680);
    console.log("Number movement", num)
  let incNum =()=>{

    if(num < 730) {

    setNum((Number(num)+10));

    }
  };
  let decNum = () => {

     if(num > 630) {

      setNum((num - 10));

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
                <button class="btn-btn-outline-primary" type="button" onClick={decNum}>Choice1</button>
                    <div class="input-group-prepend">
                        <input type="text" class="form-control" value={num} onChange={handleChange}/>
                    </div>
                <button class="btn-btn-outline-primary" type="button" onClick={incNum}>Choice2</button>
            </div>
        </div>
    </div>
   </>
  );
}


export default CreditScore;

// Ok so I know how to create a counter with inc and dec buttons. However Idk how to translate this to 
// prompt or choices. 

// I'm thinking that I need to create a div in each credit factor that contains a prompt message and inside 
// that div, make  two divs that represent choices.CreditScore

// but then idk what to do after that. Do I keep the <Input> tag in here and reuse the inc/dec buttons in the 
// credit factor .js files? if so, how do I connect all this?


// Write code in a CreditScore.js component that allows score changes.