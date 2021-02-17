import './App.css';
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
}

export default App;
