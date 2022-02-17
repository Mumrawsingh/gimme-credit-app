import { Button } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import Score from '../CreditScoreCounter/Score'
// import Prompt from "./Prompt";





function AgeOfCredit(props){


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

    // console.log("props passed to Age of Credit:", props)
    console.log("props passed to Age of Credit 2:", props.passedPromptsArray)
    // console.log("choice boolean", props.passedPromptsArray[1].value)
  


    return (
        <div className="age-of-credit">  

            <h1 className='aoc-lesson-title'>Age Of Credit</h1>
            <br></br>
            <p className='age-of-credit-lesson'>
            When Fico scores look at your credit age, they consider three things:
            <br></br><br></br>
            1.How long your credit accounts have been open including the ages of your oldest account, 
              newest account and an average age of all your accounts.
            <br></br>
            2.How long specific credit accounts have been open.
            <br></br>
            3.How long it has been since the account has been used.
            <br></br><br></br>
            If your accounts are young, There are still ways to improve your age of credit.
            If there is someone whom you have a good relationship with that has a long established 
            account, you can ask them to add you as an authorized user.
            Please be advised that they should verify that this account must be in good standing before 
            adding you, as an inconsistent payment history could hurt the FICO score of anyone associated, 
            with the account, regardless of who the owner is.
            </p>


            {props.passedPromptsArray.map 
        ( (aPrompt)=>{
            console.log("aPrompt:", aPrompt)
            return (
                    
                    <div className='prompt-section'>

                        <Score
                        currentCreditScore={currentScore}
                        />

                    <h4>{aPrompt.description}</h4>
                    
                        {aPrompt.choices.map (
                                (mappedChoices)=>{
                                console.log("mapped choices maybe?", mappedChoices)
                                    return (
                                        <div className='age-of-credit-prompt'>
                                            
                                            <button onClick={incScore}>good</button>
                                            
                                            <p>{mappedChoices.description}</p>

                                            <button onClick={decScore}>bad</button>

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

export default AgeOfCredit;


{/* <h1>Age Of Credit</h1>
<br></br>
<p className='age-of-credit-lesson'>
When Fico scores look at your credit age, they consider three things:
<br></br>
1.How long your credit accounts have been open including the ages of your oldest account, 
  newest account and an average age of all your accounts.
<br></br>
2.How long specific credit accounts have been open.
<br></br>
3.How long it has been since the account has been used.
<br></br>
If your accounts are young, There are still ways to improve your age of credit.
If there is someone whom you have a good relationship with that has a long established 
account, you can ask them to add you as an authorized user.
Please be advised that they should verify that this account must be in good standing before 
adding you, as an inconsistent payment history could hurt the FICO score of anyone associated, 
with the account, regardless of who the owner is.
</p> */}

// const handleChange = (e)=>{
//     setNum(e.target.value);
//    }
