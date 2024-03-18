import React from 'react'
import {Route,Routes} from 'react-router-dom'
import SignupChoose from './componets/signup_choose'
import Signup from './componets/signup'
import SignupDetail from './componets/signup_detial'
import Home from './componets/home'
const Nav:React.FC = () => {

    return (
        <Routes>
            <Route  path="/" element= {<Home/>} />
            <Route  path="/signup" element= {<Signup/>} />
            <Route path="/signupChoose" element= {<SignupChoose/>} />
            <Route path="/signupDetail" element= {<SignupDetail/>} />
        </Routes>

    )

}

export default Nav;