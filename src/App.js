import React, { useState, useEffect } from 'react';
import './App.css';
import bgimage from './images/headerimage.jpg'
import { Jumbotron } from 'reactstrap';
import logo from './images/i8logo-01.jpg'
import DietlogIndex from './dietlog/DietlogIndex'
import Auth from './Auth/Auth';
import Sitebar from './home/Navbar';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  /// trying to pass id 

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      setUserId(localStorage.getItem('userId'));
    }
  }, [])

  const setId = (id) => {
    localStorage.setItem('userId', id)
    setUserId(id);
  }

  const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <DietlogIndex token={sessionToken} userId={userId}/> : <Auth updateToken={updateToken} setId={setId}/>)
  }
  
  
  return (
    <div className="container">
      <Jumbotron className="jumbotron" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
      </Jumbotron>
      <div className="bar"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <img className="logo" src={logo} alt="logo" />
        
      </div>
      <hr />
      <h4 className="text-center">Welcome to I8That premier food log!</h4>
      
      <hr />

      <Sitebar clearToken={clearToken}/>
      
      {protectedViews()}

<div className="footer">I8That Copyright &copy;2021</div>
    </div>

  );
}
export default App;
