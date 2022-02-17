import React       from 'react';
import NavBar from '../NavBar';
import { NavLink } from "react-router-dom";
// import LearnNav from './LearnNav';
// import CreditScore from '../CreditScoreCounter/CreditScore';

function Learn(props) {
    
     // console.log("props :", props)
    // console.log("Passed props :", props.passedPromptsArray)

    return(
            
    <div className='learn-container'>
        <div className='learnNavbar'><NavBar/></div>

        {/* {props.passedPromptsArray.map 
            ( (aPrompt)=>{
                console.log("aPrompt:", aPrompt)
                return (
                        
                        <div>
                        <h3>{aPrompt.description}</h3>
                        
                            {aPrompt.choices.map (
                                (mappedChoices)=>{
                                console.log("mapped choices maybe?", mappedChoices)
                                    return (
                                        <div>
                                            <h4>{mappedChoices.description}</h4>
                                        </div>
                                    )
                                }
                            )
                            
                        }

                           
                       </div>
                    )
                }
            )
        } */}

        

        <p className='learn-instruct'>
            Please select a credit score factor from the menu to the left.
            <br></br><br></br>
            Each credit score factor link provides you a lesson and a prompt with two choices
            When you have finished reading, please select one of the two choices
            that appear after the lesson. 
            <br></br><br></br>
            Select the choice that YOU feel represents
            the best financial decision and look at how your mock credit score changes.


        </p>
            {/* <CreditScore/> */}

            <div className='learn'>

                <nav className='learn-nav'>

                    <div className='learnlink1'>
                        <NavLink to='/learn/ageofcredit'>
                            Age of credit
                        </NavLink>
                    </div>
                
                    <br></br>

                    <div className='learnlink2'>
                        <NavLink to='/learn/inquiries'>
                            Inquiries
                        </NavLink>  
                    </div>
                    
                    <br></br>

                    <div className='learnlink3'>
                        <NavLink to='/learn/creditmix'>
                            Credit mix
                        </NavLink>    
                    </div>

                    <br></br>
                    
                    <div className='learnlink4'>
                        <NavLink to='/learn/creditusage'>
                            Credit Usage
                        </NavLink>     
                    </div>
                
                    <br></br>
                
                    <div className='learnlink5'>
                        <NavLink to='/learn/paymenthistory'>
                            Payment History
                        </NavLink>     
                    </div>
                
                </nav>

            
            </div>

        </div>        

    )


}

export default Learn;




// attempt to add LearnNav

// import React from 'react';
// import LearnNav from './LearnNav';

// function Learn() {

//     return(
        
//             <LearnNav />
        
//     );

// }

// export default Learn;

// import React, {useState, useEffect} from 'react'
// import Prompt from "./Prompt";

// function AgeOfCredit(){

//     const [PromptsArray, setPrompts] = useState([])

//     useEffect( 
        
//             ()=>{

//                 fetch("/prompts", {
//                     mode: 'cors',
//                     headers: {'Access-Control-Allow-Origin':'*'}
//                 })
//                 .then( response => response.json() )
//                 console.log("State of prompt fetch:")
//                 .then(
//                 (fetchedPromptsArray)=>{
//                 setPrompts([...fetchedPromptsArray])
//                 console.log("State of prompt fetch:", fetchedPromptsArray)
                
//                     }
//                 )
//             }
//     ,[])

//     return (
//         <div className="age-of-credit">  

//             <h1>Age Of Credit</h1>

//             {PromptsArray.map 
//                 ( (aPrompt)=>{

//                         return (
                            
//                             <div>
//                                 <Prompt
//                                 key={aPrompt.id}
//                                 aPrompt={aPrompt}
//                                 />
//                             </div>
//                         )
//                     }
//                 )
//             }

//         </div>
//     )
  
// }