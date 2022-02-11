import { Routes, Route } from "react-router-dom";
import Learn from "./education/Learn";
import Homepage from "./Homepage";
import LoginForm from "./signin/LoginForm";

function Routing() {

    return(

        <div>
            <Routes>

                <Route path='/' element={<LoginForm />} />
                
                <Route path='/home' element={<Homepage />} />
                
                <Route path='/learn' element={< Learn/>} />
                <Route path='/stories' element={< Stories/>} />
                
                {/* <Route path='/' element={< />} /> */}
                
                {/* <Route path='/woobly' element={<h1>woobly</h1>} /> */}

            </Routes>
        </div>

    );

}

export default Routing;