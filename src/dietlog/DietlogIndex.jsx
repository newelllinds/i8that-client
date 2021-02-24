import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DietlogCreate from './DietlogCreate'
import DietlogTable from './DietlogTable'
import DietLogEdit from './DietLogEdit'
import DietlogFetchCal from './DietlogFetchCal'
import DailySummary from './DailySummary'



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


    return (
        <Container>
            <Row>                
                <DietlogFetchCal fetchDietlogs={fetchDietlogs} token={props.token} />
                
                
                
                <DietlogTable dietlogs={dietlogs} editUpdateDietlog={editUpdateDietlog} updateOn={updateOn} fetchDietlogs={fetchDietlogs} token={props.token} />
                {updateActive ? <DietLogEdit dietlogToUpdate={dietlogToUpdate} updateOff={updateOff} token={props.token} fetchDietlogs={fetchDietlogs}/> : <></>}
                
                <DailySummary token={props.token}/>



                
             
            </Row>
        </Container>
    )
}

export default DietlogIndex;
