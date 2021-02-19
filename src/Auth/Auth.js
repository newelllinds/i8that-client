import React, { useState }  from 'react';
import Login from './Login'
import Signup from './Signup'

const Auth = (props) => {
    const [showLogin, setShowLogin] = useState(true);
    function handleToggle(){
    setShowLogin(!showLogin);
    }
    return (
        <div>
                {showLogin ? <Login/> : <Signup/> }
                <button onClick = {handleToggle}>Signup or Login</button>
                </div>    
    );
};

export default Auth;