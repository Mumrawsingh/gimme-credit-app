import React from "react";
import logo from "../dancingscore.gif";



function Homepage() {
    return (

      <div className="homepage">

        <h2 className="welcome">Welcome!</h2>
        <p className="rules">You have been assigned a mock credit score of 680.
          <br></br><br></br>
          As you explore the educational material found by clicking the Learn link,
          you will be prompted with two scenarios per section. select one 
          scenario before moving on to the next section.
          Your mock credit score will change as you make choices.
          <br></br><br></br>
          Hopefully this experience
          teaches not only informtion about credit, but the power of decision making. 
          Happy Learning!
          <br></br><br></br>
          Disclaimer: Your Gimme Credit score is only a demonstrative tool of the
          Gimme Credit experience. It is not equivalent to your FICO score
          and therefore will not affect your FICO score. 


        </p>

        <img src={logo} className="score-gif" alt="gif" />
        
      </div>
      
    );
  }

  export default Homepage;


   {/* <p>
                A one of a kind credit education experience... I think.
        </p>
            created by 
            <br></br>
              <a
                  className=""
                  href="https://mumrawsingh.github.io/Personal-Website-of-Matt/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Matthew S. Umrawsingh
              </a>
        <p>
            huge ego alert^
        </p> */}