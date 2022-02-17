import React, {useState} from 'react'
import NavBar from '../NavBar';
import Score             from '../CreditScoreCounter/Score'

function CreditMix(props){


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
        <div className="credit-mix">    

            <div className="ed-component-navbar"><NavBar/></div>

                    <h1 className='lesson-title'>Credit Mix</h1>
                    <p className='lesson'>
                    Credit mix accounts for 10% of a FICO® Score. Credit Mix is having a variety of
                    credit types, including a auto loans, credit cards, student loans, mortgage and/or 
                    other kinds of credit products. Credit scoring models consider the types of accounts 
                    and how many of each a person has as an indication of how well a person can manage a 
                    wide range of credit products. A diversified portfolio of credit accounts is common 
                    with folks that have good credit scores. 
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

export default CreditMix;