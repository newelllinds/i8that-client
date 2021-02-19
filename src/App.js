import React from 'react';
import './App.css';
import bgimage from './images/headerimage.jpg'
import { Jumbotron } from 'reactstrap';
import logo from './images/i8logo-01.jpg'
import DietlogIndex from './dietlog/DietlogIndex'

/****
 * import './App.css';
import DietLogEdit from './dietlog/DietLogEdit'
import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import DietLogTable from './dietlog/DietLogTable';

const [dietLogs, setDietLogs] = useState
const [updateActive, setUpdateActive] = useState(false);
const [dietLogToUpdate, setDietLogToUpdate] = useState({});

function App() {


const editUpdateDietlog = (dietlog) => {
  setDietLogToUpdate(dietlog);
  console.log(dietlog);
}

const updateOn = () => {
  setUpdateActive(true);
}

const updateOff = () => {
  setUpdateActive(false);
}

return (
  <div>
    <DietLogTable dietlogs={dietlogs} editUpdateDietlog={editUpdateDietlog} updateOn={updateOn} fetchDietLogs={fetchDietLogs} token={props.token}/>
  </div>
);
 */



function App() {
  
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
      
      <DietlogIndex />
      
    </div>

  );
}

export default App;
