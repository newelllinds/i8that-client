import React, { useState }  from 'react';
import {Container} from 'reactstrap';
import Login from './Login'
import Signup from './Signup'

const Auth = (props) => {
    const [showLogin, setShowLogin] = useState(true);
    function handleToggle(){
    setShowLogin(!showLogin);
    }
    
    return (
        
        <Container className="auth-container" className="stylenav">

                {showLogin ? <Signup updateToken={props.updateToken} getId={props.getId} getUsername={props.getUsername}/> : <Login updateToken={props.updateToken} getId={props.getId} getUsername={props.getUsername } />
                }

    <div className="buttontoggle">
        {showLogin ? <button className="login" onClick={handleToggle}>Login</button> : <button className="login" onClick={handleToggle}>Signup</button>}
    </div>

     </Container>      
            
    );
};

export default Auth;
