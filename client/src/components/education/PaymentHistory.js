import React, {useState} from 'react'
import NavBar from '../NavBar';
import Score             from '../CreditScoreCounter/Score'

function PaymentHistory(props){


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
        <div className="payment-history">    

            <div className="ed-component-navbar"><NavBar/></div>

            <h1 className='lesson-title'>Payment History</h1>
            <p className='lesson'>
            Payment history is the most important ingredient in credit scoring, and even one missed payment can have a
            negative impact on your score. Lenders want to be sure that you will pay back your debt, and on time, when 
            they are considering you for new credit. Payment history accounts for 35% of your FICO® Score.
            {/* Re-write this^6 */}
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
                                                    <button onClick={incScore}>good</button> : 
                                                    <button onClick={decScore}>bad</button>                                          
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

export default PaymentHistory;