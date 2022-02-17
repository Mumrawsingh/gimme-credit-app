import React       from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    

    return(
        <div className="navbar">
            {/* <header className="nav-header"> */}
                <nav>
                    
                        {/* <h5 className='navLink'>
                            <NavLink to='/'>Sign In</NavLink>
                        </h5> */}

                        <h5 className='navLink'>
                            <NavLink to='/home'>Home</NavLink>
                        </h5>    
                        
                        <h5 className='navLink'>
                            <NavLink to='/learn'>Learn</NavLink>
                            </h5>

                        <h5 className='navLink'>
                            <NavLink to='/stories'>Stories</NavLink>
                        </h5>

                        <br />
                    
                </nav>

              <br/><br/><br/> <br/><br/><br/><br/>

            {/* </header> */}
        </div>
    );
}

export default NavBar;









  {/* <button 
        className="logout" 
        onClick={doLogOut}>
        Logout
      </button> 
*/}