import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    // const doLogOut = () => {
    //     fetch("/logout", {
    //       method: 'DELETE'
    //     })
    //     console.log('successful log out')
    //     setUser(null)
    //   }

    return(
        <div className="navbar">
            <header>
                <nav>
                    
                        <h5 className='navLink'>
                            <NavLink to='/'>Sign In</NavLink>
                        </h5>

                        <h5 className='navLink'>
                            <NavLink to='/home'>Home</NavLink>
                        </h5>    
                        
                        <h5 className='navLink'>
                            <NavLink to='/learn'>Learn</NavLink>
                            </h5>
                        {/* <h5 className='navLink'>
                            <NavLink>Stories</NavLink>
                        </h5> */}

                        <br />
                        {/* <button 
                            className="logout" 
                            onClick={doLogOut}>
                            Logout
                        </button> */}
                    
                </nav>

              <br/><br/><br/> <br/><br/><br/><br/>

            </header>
        </div>
    );
}

export default NavBar;