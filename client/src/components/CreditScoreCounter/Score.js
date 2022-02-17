import React from "react";

function Score({currentCreditScore}){
console.log(currentCreditScore)
    return(

        <h4 className="score-card">Your Gimme Credit score is: 
        
            <h2 className="score-display">{currentCreditScore}</h2>
        
        </h4>
    );
}

export default Score;