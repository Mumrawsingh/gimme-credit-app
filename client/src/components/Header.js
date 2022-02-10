import React  from "react";
import NavBar from "./NavBar";
// import logo   from './gimmecreditlogo.png';

function Header(){

    return(

        <header className="header">

            <img src={logo} className="App-logo" alt="logo" />

            <NavBar/>

        </header>

    );
}

export default Header;