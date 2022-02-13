import React        from 'react';
import Routing from './components/Routing';
import './App.css';
import logo         from './gimmecreditlogo.png';
import NavBar from './components/NavBar';
import CreditScore from './components/CreditScore';


function App() {
  return (
    <div className="app">
        <div className='container'>

          <div className='logo-container'>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>

          <CreditScore/>
          <NavBar/>
          <Routing/>

          <br></br>
          <br></br>
        
        </div>

    </div>
  );
}
 

export default App;




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