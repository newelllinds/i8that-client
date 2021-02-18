import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "restrap";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/register", {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: new Headers ({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then (data) => {
        props.updateToken(data.sessionToken)
    })
}
    console.log(username, password);

  return (
    <div>
      <h1>Sign-Up</h1>
      <Form onSubmit={handleSubmit}></Form>
    </div>
    // <div>
    //   <h1>Sign-Up</h1>
    //   <Form>
    //     <FormGroup>
    //       <Label htmlFor="username">Username</Label>
    //       <Input name="username" value={username} />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label htmlFor="password">Password</Label>
    //       <Input
    //         onChange={(e) => setPassword(e.target.value)}
    //         name="password"
    //         value={password}
    //       />
    //     </FormGroup>
    //     <Button type="submit">Sign-Up</Button>
    //   </Form>
    // </div>
  );
};
