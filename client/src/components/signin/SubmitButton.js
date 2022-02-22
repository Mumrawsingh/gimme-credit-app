import React from 'react';
import { NavLink } from "react-router-dom";


function SubmitButton(){

    
    
    return (
        <div className="submitButton">
            
            <button 
            className='btn'> <NavLink to='/home'>Log in</NavLink></button>
         
            <br></br><br></br>
               

        </div>

        
    );
}

export default SubmitButton;



// The following function, toggles the navbar in and out of the page. used for testing the submit button.

// import React, {useState} from 'react';
// import NavBar            from '../NavBar';

// function SubmitButton(props){

    
//     const [showJoobly, setShowJoobly] = useState(false)
//         console.log("state of show", showJoobly)

//     return (
//         <div className="submitButton">
            
//             <button
//                 className='btn'
               
//                 onClick={ 
                    
//                     () => {
//                         console.log("Joobly")
//                         setShowJoobly(!showJoobly)
//                     } 
//                 }  
//             >
//                 {props.text}
//             </button>
         
//             <br></br><br></br>
//                 {!showJoobly ? <NavBar/> : null}

            

//         </div>

        
//     );
// }

///////////////////////////////







// OBJECTIVE //

// Click on line 15 to render h1 to the DOM

// const clicked = props.clicked;
//     if (clicked) {
//         return <h1>joobly</h1>
//     }

//BEFORE CHANGE

// return (
//     <div className="submitButton">
//         <button
//             className='btn'
//             // disabled={this.props.disabled}
//             onClick={ () => {console.log("woobly")} }  
//         >
//             {props.text}
//         </button>
//         <h1 onClick={()=> setShow()}>joobly</h1>
//     </div>
// );

// setShowJoobly(true)

// second attempt 

// <button
//                 className='btn'
//                 // disabled={this.props.disabled}
//                 // onClick={ 
                    
//                 //     () => {
//                 //         console.log("You Clicked")
//                 //     } 
//                 // }  
//             >
//                 {props.text}
//             </button>
         
            
//             <h1 
            
//                 onClick={
//                     () => {
//                         setShowJoobly(!showJoobly)
//                     }
//                 }
                
//             >joobly</h1>