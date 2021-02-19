import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DietlogFetchCal from './DietlogFetchCal'
import DietlogTable from './DietlogTable'


const DietlogIndex = (props) => {
    const [dietlogs, setDietlogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [dietlogToUpdate, setDietlogToUpdate] = useState({});

    const fetchDietlogs = () => {
        fetch('http://localhost:3000/dietlog', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjEzNzA3NDYzLCJleHAiOjE2MTM3OTM4NjN9.GD1pZtHdKv7w4YKTl_ZSvK75GL-diE-Mz10eVtqRAGY'
            })
        }).then((res) => res.json())
            .then((dietlogData) => {
            setDietlogs(dietlogData)
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
               
            
            </Row>
        </Container>
    )
}

export default DietlogIndex;
