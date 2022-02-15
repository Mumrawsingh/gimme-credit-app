import React, {useState, useEffect} from 'react'
import Prompt from "./Prompt";

function AgeOfCredit(){

    const [PromptsArray, setPrompts] = useState([])

    useEffect( 
        
            ()=>{

                fetch("/prompts", {
                    mode: 'cors',
                    headers: {'Access-Control-Allow-Origin':'*'}
                })
                .then( response => response.json() )
                console.log("State of prompt fetch:")
                .then(
                (fetchedPromptsArray)=>{
                setPrompts([...fetchedPromptsArray])
                console.log("State of prompt fetch:", fetchedPromptsArray)
                
                    }
                )
            }
    ,[])

    return (
        <div className="age-of-credit">  

            <h1>Age Of Credit</h1>

            {PromptsArray.map 
                ( (aPrompt)=>{

                        return (
                            
                            <div>
                                <Prompt
                                key={aPrompt.id}
                                aPrompt={aPrompt}
                                />
                            </div>
                        )
                    }
                )
            }

        </div>
    )
  
}

export default AgeOfCredit;