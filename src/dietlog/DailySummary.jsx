import React, {useState} from 'react';
import { Table, Button, Container, Row, Col, Alert } from 'reactstrap';

const DailySummary = (props) => {
    const [totalCalories, setTotalCalories] = useState(0);
    var total = 0
    var today = new Date().toLocaleDateString();
    // var today = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"})
    today = new Date(today).toISOString().slice(0,10);
    console.log(today)
    let dateSelected = today
    let id = 3
        fetch(`http://localhost:3000/dietlog/${dateSelected}/${id}`, {
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
        <div className="table">
            <Container>
                <Row>
                    <Col>
                    
            <h3>Calories Consumed Today</h3>
            {totalCalories}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DailySummary;