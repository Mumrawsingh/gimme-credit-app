import React        from 'react';
import Routing      from './components/Routing';
import './App.css';
import logo         from './gimmecreditlogo.png';
import NavBar       from './components/NavBar';
import Score        from './components/CreditScoreCounter/Score';
import {useState}   from 'react'


function App() {

    const [num, setNum] = useState(720)


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