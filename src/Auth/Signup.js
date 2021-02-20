import React, {useState} from 'react';
import {Form, FormGroup, Container, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/create", {
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    function usernameOnChange(event){
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    function passwordOnChange(event){
        setPassword(event.target.value);
    }

    return(
        <Container className="auth-container">
        <h3>Signup</h3>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
         <input
         type="text"
         placeholder="username"
         value= {username}
         onChange={(e) => usernameOnChange(e)}/>
        </FormGroup>
        <FormGroup>
         <input
         type="text"
         placeholder="password"
         value= {password}
         onChange={(e) => passwordOnChange(e)}/>
         </FormGroup>
         <Button type="submit">Signup</Button>
         </Form>
        </Container>
    )
}

export default Signup;