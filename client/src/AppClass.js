import React        from 'react';
import { observer } from 'mobx-react';
import UserStore    from './stores/UserStore';
import LoginForm from './components/signin/LoginForm';
import SubmitButton from './components/signin/SubmitButton';
import Homepage from './components/Homepage';
import './App.css';
import logo         from './gimmecreditlogo.png'
// import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';




class App extends React.Component {


  async componentDidMount() {

    try {

      let res = await fetch('/me', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });

      let result = await res.json();

      if (result && result.success) {
          UserStore.loading =false;
          UserStore.isLoggedIn =true;
          UserStore.username =result.username;
      }

      else {
          UserStore.loading = false;
          UserStore.isLoggedIn = false;
      }

    }

      catch(e) {

          UserStore.loading = false;
          UserStore.isLoggedIn = false;

    }
  }

  async doLogout() {

    try {

      let res = await fetch('/logout', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });

      let result = await res.json();

      if (result && result.success) {
        
          UserStore.isLoggedIn = false;
          UserStore.username = '';
        
      } 

    }

    catch(e) {

          console.log(e)

    }
  }

  render() {

    if (UserStore.loading) {
      return (
        <div className="app">
            <div className='container'>
              Loading, please wait...
            </div>
        </div>
      );
    }

    else {

      if(UserStore.isLoggedIn) {
        return (
          // <BrowserRouter>
            <div className='container'>
                <div>
                  Welcome {UserStore.username}

                  <SubmitButton
                    text={'Log Out'}
                    disabled={false}
                    onClick={ () => this.doLogout() }
                  />
                </div>
            </div>
          // </BrowserRouter>
        );
      }

      {
        return (
          // <BrowserRouter>
            <div className="app">
                <div className='container'>
                {/* <SubmitButton
                    text={'Log Out'}
                    disabled={false}
                    onClick={ () => this.doLogout() }
                  /> */}

                    <div>
                      <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                      </header>
                    </div>

                  <br></br>
                  <br></br>
                  
                  
                  <div
                  
                  onClick={ 
                    
                    () => {
                
                      console.log("does this work?")

                    }
                  }

                  >
                    <LoginForm />

                    {/* <Routes>
                      <Route  path='/home' element={<Homepage />}/>
                      <Route  path='/' element={}/>                    
                    </Routes> */}
                  </div>
                  
                </div>
            </div>
          // </BrowserRouter>
          
        );
      }

    }

    // return (
    //   <div className="app">
    //      <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //      </header>
    //   </div>
    // );
  }

}

export default observer(App);