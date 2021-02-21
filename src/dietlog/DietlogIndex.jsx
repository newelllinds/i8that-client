import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DietlogFetchCal from './DietlogFetchCal'



const DietlogIndex = (props) => {
    const [dietlogs, setDietlogs] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [dietlogToUpdate, setDietlogToUpdate] = useState({});
    

    const fetchDietlogs = () => {
        console.log(token)
        fetch('http://localhost:3000/dietlog/mylogs', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token

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
        fetchWorkouts();
    },[])


    return (
        <Container>
            <Row>
                <DietlogFetchCal fetchDietlogs={fetchDietlogs} token={props.token}/>

                
                
             
            </Row>
        </Container>
    )
}

export default DietlogIndex;
