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
        <div>
        <Container className="auth-container" className="stylenav">
                {showLogin ? <Signup updateToken={props.updateToken} setId={props.setId}/> : <Login updateToken={props.updateToken} setId={props.setId}/>}

                
          </Container> 
            <h5 className="membertext">Already a member? <button className="login" onClick={handleToggle}>Login</button></h5>
        </div>     
    );
};

export default Auth;