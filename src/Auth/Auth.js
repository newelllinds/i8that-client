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
        <Container className="auth-container">
                {showLogin ? <Login updateToken={props.updateToken} /> : <Signup updateToken={props.updateToken} />}

                <button onClick = {handleToggle}>Signup or Login</button>
          </Container>       
    );
};

export default Auth;