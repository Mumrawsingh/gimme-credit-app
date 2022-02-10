import React, {useState} from 'react';
import NavBar from '../NavBar';

function SubmitButton(props){

    
    const [showJoobly, setShowJoobly] = useState(false)
        console.log("state of show", showJoobly)

    return (
        <div className="submitButton">
            
            <button
                className='btn'
               
                onClick={ 
                    
                    () => {
                        console.log("Joobly")
                        setShowJoobly(!showJoobly)
                    } 
                }  
            >
                {props.text}
            </button>
         
            <br></br><br></br>
                {!showJoobly ? <NavBar/> : null}

            

        </div>

        
    );
}

export default SubmitButton;

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