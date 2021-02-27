import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DietlogCreate from './DietlogCreate'
import DietlogTable from './DietlogTable'
import DietLogEdit from './DietLogEdit'
import DietlogFetchCal from './DietlogFetchCal'
import DailySummary from './DailySummary'
import DietlogGetByDate from './DietlogGetByDate';
import DietlogGetByDateFetch from './DietlogGetByDateFetch';



const DietlogIndex = (props) => {
    const [dietlogs, setDietlogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [dietlogToUpdate, setDietlogToUpdate] = useState({});
    

    const fetchDietlogs = () => {
        fetch('http://localhost:3000/dietlog/mylogs', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token

            })
        }).then((res) => res.json())
            .then((logData) => {
            setDietlogs(logData)
        })
    }

    const editUpdateDietlog = (dietlog) => {
        setDietlogToUpdate(dietlog);
        console.log(dietlog);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }


    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchDietlogs();
    },[])

console.log(props.userId)
    return (
        <Container>
            <Row>                
                <DietlogFetchCal fetchDietlogs={fetchDietlogs} token={props.token} />
                
                <DailySummary token={props.token} userId={props.userId}/>

                <DietlogGetByDate token={props.token} userId={props.userId}/>
                
                <DietlogTable dietlogs={dietlogs} editUpdateDietlog={editUpdateDietlog} updateOn={updateOn} fetchDietlogs={fetchDietlogs} token={props.token} />
                {updateActive ? <DietLogEdit dietlogToUpdate={dietlogToUpdate} updateOff={updateOff} token={props.token} fetchDietlogs={fetchDietlogs}/> : <></>}



                
             
            </Row>
        </Container>
    )
}

export default DietlogIndex;
