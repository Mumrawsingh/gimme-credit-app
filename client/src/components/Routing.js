import { Routes, Route } from "react-router-dom";
import Learn             from "./education/Learn";
import Homepage          from "./Homepage";
import LoginForm         from "./signin/LoginForm";
import Stories           from "./stories/Stories";

import AgeOfCredit       from "./education/AgeOfCredit";
import Inquiries         from "./education/Inquiries"
import CreditMix         from "./education/CreditMix"
import CreditUsage       from "./education/CreditUsage"
import PaymentHistory    from "./education/PaymentHistory"

function Routing() {

    return(

        <div>
            <Routes>
                
                
                <Route path='/learn/ageofcredit' element={<AgeOfCredit />} />
                <Route path='/learn/inquiries' element={<Inquiries />} />
                <Route path='/learn/creditmix' element={<CreditMix />} />
                <Route path='/learn/creditusage' element={< CreditUsage/>} />
                <Route path='/learn/paymenthistory' element={< PaymentHistory/>} />

                <Route path='/learn' element={< Learn/>} />
                <Route path='/stories' element={< Stories/>} />
                <Route path='/home' element={<Homepage />} />
                <Route path='/' element={<LoginForm />} />

                {/* <Route path='/' element={< />} /> */}
                
                {/* <Route path='/woobly' element={<h1>woobly</h1>} /> */}

                

            </Routes>
        </div>

    );

}

export default Routing;