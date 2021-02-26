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
  import DietlogGetByDateTable from './DietlogGetByDateTable'

const DietlogGetByDate = (props) => {
    const [resultsByDate, setResultsByDate] = useState([])
    let date_eaten = '2021-02-23'
    console.log(props.getId)
    //need to pass user id as props into endpoint

    function fetchDietlogsByDate()  {
        fetch(`http://localhost:3000/dietlog/${date_eaten}/${props.getId}`, {
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

    function displayCards(){
        return resultsByDate.length > 0 ? resultsByDate.map((resultsByDate) =>
        <DietlogGetByDateTable resultsByDate={resultsByDate} />) : null;
    }

    return(
        <div className="table">
            <Container>
                <Row>
                    <Col>
                    
            <h3>This is Get By Date</h3>
            <Button onClick={fetchDietlogsByDate}>Get Logs By Date</Button>
            {displayCards()}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DietlogGetByDate;