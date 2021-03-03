import React, {useState} from 'react';
import { Table, Button, Container, Row, Col, Alert } from 'reactstrap';

const DailySummary = (props) => {
    const [totalCalories, setTotalCalories] = useState(0);
    var total = 0
    var today = new Date().toLocaleDateString();
    today = new Date(today).toISOString().slice(0,10);
    console.log(props.userId);

    let dateSelected = today
        fetch(`http://localhost:3000/dietlog/${dateSelected}/${props.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })

        })
        .then((res) => res.json())
        .then((json) => {
            Object.entries(json).forEach(entry => {
                total += entry[1].calories
            })
            setTotalCalories(total)
        })     


    return (
        <Container className="dailysummaryparent">
            <Row className="dailysummaryouter border">
                <Col xs="6">
                <h5>Hi <strong className="userName"><i>{props.username}</i></strong>!  </h5>    
                </Col>
                
                <Col xs="6" className="text-md-right"><h5>Total Calories Consumed Today: {totalCalories}</h5></Col>

            </Row>
            <Row className="dailysent1">
        <i><h6>Fill out your daily I8That log below for today's date to update your total calories consumed.</h6></i>
                 </Row>
            
                    
        </Container>
    )
}

export default DailySummary;