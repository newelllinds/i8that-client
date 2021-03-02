import React, { useState, useEffect } from 'react';
import './App.css';
import DietlogIndex from './dietlog/DietlogIndex'
import Auth from './Auth/Auth';
import Sitebar from './home/Navbar';
import Login from './Auth/Login';
import Footer from './home/Footer';
import Header from './home/Header';
import {
  BrowserRouter as Router,
} from 'react-router-dom';




function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('')

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

  const getUsername = (username) => {
    setUsername(username);
  }

  /// trying to pass id 
  const getId = (id) => {
    setUserId(id);
  }

    //     .then((json) => {
    //       // setUserID(user.id)
    //       console.log(json.user.id)
    //     })
    // }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <DietlogIndex token={sessionToken} userId={userId} username={username}/> : <Auth updateToken={updateToken} getId={getId} getUsername={getUsername}/>)
  }
  
  
  return (
    <div className="container">
      
      <Header />
      <Router>
        <Sitebar clearToken={clearToken} />
      </Router>
      {protectedViews()}
      <Footer />
    
    </div>

    

  );
}
export default App;
