import React, {useState} from 'react'
import NavBar from '../NavBar';
import Score             from '../CreditScoreCounter/Score'

function CreditUsage(props){


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

      const aPrompt = props.passedPromptsArray[3]
            console.log("aPrompt Result :",aPrompt)

    return (
        <div className="credit-usage">    

            <div className="ed-component-navbar"><NavBar/></div>

            <h1 className='lesson-title'>Credit Usage</h1>
            <p className='lesson'>
            Credit usage is calculated by looking at the "credit utilization ratio". It's
            a percentage that is found by dividing the total amount of credit currently being
            used by the total credit limit of all your accounts. Credit utilization looks 
            at how much available credit is being put to use and it is often used to suggest 
            how reliable a person is with non-cash funds. Using more than 30% of available credit is a 
            negative to creditors. Credit utilization accounts for 30% of your FICO® Score. It's the next 
            most important factor in a credit score after payment history. 
            </p>

            {/* {props.passedPromptsArray.map 
                ((aPrompt)=>{
                        console.log("aPrompt:", aPrompt)
                        return ( */}
                                
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
            {/*         )
                    }
                )
             } */}

        </div>
    )

}

export default CreditUsage;