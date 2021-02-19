import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DietlogCreate from './DietlogCreate'
import DietlogTable from './DietlogTable'


const DietlogIndex = (props) => {
    const [dietlogs, setDietlogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [dietlogToUpdate, setDietlogToUpdate] = useState({});

    const fetchDietlogs = () => {
        fetch('http://localhost:3000/dietlog/mylogs', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEzNjg2MjM1LCJleHAiOjE2MTM3NzI2MzV9.xVoS6-0HVtqHx_tOYg8aX7mZX-4YkGhDvxlmlDu89ww'
                // 'Authorization': props.token
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

    useEffect(() => {
        fetchDietlogs();
    },[])


    return (
        <Container>
            <Row>
                <DietlogCreate fetchDietlogs={fetchDietlogs} token={props.token}/>
            
                <DietlogTable dietlogs={dietlogs} editUpdateDietlog={editUpdateDietlog} updateOn={updateOn} fetchDietlogs={fetchDietlogs} token={props.token} />
            
            </Row>
        </Container>
    )
}

export default DietlogIndex;
