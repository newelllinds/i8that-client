import React, {useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    FormText,
    Table,
  } from "reactstrap";

const DietlogGetByDate = (props) => {
    const [resultsByDate, setResultsByDate] = useState([])
    let id = 2;
    let date_eaten = '2021-02-23'

    function fetchDietlogsByDate()  {
        fetch(`http://localhost:3000/dietlog/${date_eaten}/${props.userId}`, {
            headers: new Headers ({
                'Authorization': props.token
            })
        })
            .then((response) => response.json())
            .then((json) => {
                setResultsByDate(json);
                console.log(json);
                // props.fetchDietlogs()
            });
    }

    return(
        <div className="table">
            <Container>
                <Row>
                    <Col>
                    
            <h3>This is Get By Date</h3>
            <Button onClick={fetchDietlogsByDate}>Get Today's Logs</Button>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DietlogGetByDate;