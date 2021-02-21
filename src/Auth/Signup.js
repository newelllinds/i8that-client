import React{useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';


const Signup = (props) => {
    const [username, setUsername] 
    = useState ('');
    const [password, setPassword]
    =useState('');
const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/Signup", {
        method: 'POST',
        body: JSON.stringify({user: {username: username,
        passwordhash: password}}), headers: new Headers({ 'Content-Type': 'application/json'
    })
    }).then((response) => response.json ()
    ).then ((data) => {props.updateToken(data.sessionToken)
    })
}
function usernameOnChange (event) {
    console.log(event.target.value);
    setUsername(event.target.value);
}
function passwordOnChange (event){
    setPassword(event.target.value);
}

return(
    <div>
        <h3>Signup</h3>
        <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => usernameOnChange(e)}/>

        <input 
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => passwordOnChange(e)}/>
        <Button
        type="submit">Signup</Button>    
    </div>
)
}

export default Signup;