import React from "react";

function Score({currentScore}){
console.log(currentScore)
    return(

        <h4 className="score-card">Your Gimme Credit score is: 
        
            <h2 className="score-display">{ currentScore}</h2>
        
        </h4>
    );
}

export default Score;