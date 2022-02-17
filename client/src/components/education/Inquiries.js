import React, {useState} from 'react'
import NavBar from '../NavBar';
import Score             from '../CreditScoreCounter/Score'

function Inquiries(props){

    const [currentScore, setCurrentScore] = useState(680)

    const incScore =()=>{

        if(currentScore < 730) {
    
            setCurrentScore((Number(currentScore)+10));
    
        }
      };
    
      const decScore = ()=>{
    
         if(currentScore > 630) {
    
            setCurrentScore((currentScore - 10));
    
         }
    
      }

    return (
        <div className="inquiries">    

            <div className="ed-component-navbar"><NavBar/></div>

                    <h1 className='lesson-title'>Inquiries</h1>
                    <p className='lesson'>
                    Inquiries occur when folks open new credit accounts. In addition to new accounts, The amount of 
                    hard inquiries lenders make when someone applies for credit, makes up 10% of their FICO® Score. 
                    An accumulation of many accounts or inquiries can be a red flag that indicates increased 
                    risk and such can hurt credit scores as a result.
                    </p>
                
            {props.passedPromptsArray.map 
                ((aPrompt)=>{
                        console.log("aPrompt:", aPrompt)
                        return (
                                
                            <div className='prompt-section'>

                                    <Score
                                    currentCreditScore={currentScore}
                                    />

                                    <h4>{aPrompt.description}</h4>
                                
                                    {aPrompt.choices.map (
                                            (choiceObj)=>{
                                            console.log("mapped choices maybe?", choiceObj)
                                                return (
                                                    <div className='age-of-credit-prompt'>
                                                        
                                                        
                                                        
                                                        <p>{choiceObj.description}</p>

                                                    {choiceObj.choice_type ? 
                                                    <button onClick={incScore}>My Choice ^</button> : 
                                                    <button onClick={decScore}>My Choice ^</button>                                          
                                                    }

                                                    </div>
                                                )
                                            }
                                        )
                                        
                                    }

                                    <Score
                                    currentCreditScore={currentScore}
                                    />
                                    
                            </div>
                        )
                    }
                )
            }
                
        </div>
    )

}

export default Inquiries;