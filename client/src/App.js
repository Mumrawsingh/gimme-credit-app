import React from 'react'
import {useState, useEffect}  from 'react'
import Routing      from './components/Routing';
import './App.css';
import logo         from './gimmecreditlogo.png';
import NavBar       from './components/NavBar';
import Score        from './components/CreditScoreCounter/Score';



function App() {


  const [num, setNum] = useState(680)


  return (
    <div className="app">
        <div className='container'>

          <div className='logo-container'>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>

          <Score
            currentScore={num}
          />
          <NavBar/>
          <Routing/>

          <br></br>
        
        </div>

    </div>
  );
}
 

export default App;




// skeleton component

// import React from 'react';

// function () {

//     return(

//         <div className=''>
//             <div className=''>

//             </div>

//             <div className=''>

//             </div>
//         </div>

//     );

// }

// export default ;



// function (){

//   return (
//       <div className="">    
//           <h1></h1>
//       </div>
//   )

// }

// export default ;


   // return (
    //   <div className="app">
    //      <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //      </header>
    //   </div>
    // );

    // <div       
    // // onClick={ 
      
    // //   () => {
  
    // //     console.log("does this work?")

    // //   }
    // // }

    // >
    //   {/* <LoginForm /> */}
    // </div>

    {/* <SubmitButton
          text={'Log Out'}
          disabled={false}
          onClick={ () => this.doLogout() }
        /> */}






        
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