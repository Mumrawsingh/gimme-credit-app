import React from "react";

function Score({currentScore}){
console.log(currentScore)
    return(

        <h2>{`Your Gimme Credit score is: ${ currentScore}`}</h2>
    );
}

export default Score;