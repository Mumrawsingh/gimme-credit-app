import React from 'react'
import Routing      from './components/Routing';
import './App.css';
import logo         from './gimmecreditlogo.png';
// import NavBar       from './components/NavBar';

// comment in <Navbar/> in App.js to show Navbar site-wide. Comment out in all other components.



function App() {

  return (
    <div className="app">
        <div className='container'>

          <div className='logo-container'>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>

          {/* <NavBar/> */}
          <Routing/>

          <br></br>
        
        </div>

    </div>
  );
}
 

export default App;




// skeleton component.

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

// skeleton component 2.

// function (){

//   return (
//       <div className="">    
//           <h1></h1>
//       </div>
//   )

// }

// export default ;

//app logo code.

   // return (
    //   <div className="app">
    //      <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //      </header>
    //   </div>
    // );

    //idk what the following code was.

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