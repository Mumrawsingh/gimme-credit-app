import React       from 'react';
import { NavLink } from "react-router-dom";
// import LearnNav from './LearnNav';
// import CreditScore from '../CreditScoreCounter/CreditScore';

function Learn() {

    return(

        <div className='learn-container'>

            {/* <CreditScore/> */}

            <div className='learn'>

                <nav className='learn-nav'>

                    <div className='learnlink1'>
                        <NavLink to='/learn/ageofcredit'>
                            Age of credit
                        </NavLink>
                    </div>
                
                    <br></br>

                    <div className='learnlink2'>
                        <NavLink to='/learn/inquiries'>
                            Inquiries
                        </NavLink>  
                    </div>
                    
                    <br></br>

                    <div className='learnlink3'>
                        <NavLink to='/learn/creditmix'>
                            Credit mix
                        </NavLink>    
                    </div>

                    <br></br>
                    
                    <div className='learnlink4'>
                        <NavLink to='/learn/creditusage'>
                            Credit Usage
                        </NavLink>     
                    </div>
                
                    <br></br>
                
                    <div className='learnlink5'>
                        <NavLink to='/learn/paymenthistory'>
                            Payment History
                        </NavLink>     
                    </div>
                
                </nav>

            
            </div>

        </div>        

    )


}

export default Learn;




// attempt to add LearnNav

// import React from 'react';
// import LearnNav from './LearnNav';

// function Learn() {

//     return(
        
//             <LearnNav />
        
//     );


// }

// export default Learn;