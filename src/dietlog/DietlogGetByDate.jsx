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
  import DatePicker from 'react-datepicker';

const DietlogGetByDate = (props) => {
    const [date_eaten, setDate_Eaten] = useState("");
    const [resultsByDate, setResultsByDate] = useState([])
    // let date_eaten = UserPickDate
    console.log(props.userId)
    //need to pass user id as props into endpoint

    // const UserPickDate = () => {
    // const [startDate, setStartDate] = useState(new Date());
    // return (
    //     <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
    // )
    // }


    function fetchDietlogsByDate(d)  {
        // let date_eaten = '02-23-2021'
        fetch(`http://localhost:3000/dietlog/${d}/${props.userId}`, {
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

    // function displayTable(){
    //     <DietlogTable dietlogs={resultsByDate} 
    // }

    function displayCards(){
        return resultsByDate.length > 0 ? resultsByDate.map((resultsByDate) =>
        <DietlogGetByDateTable resultsByDate={resultsByDate} />) : null;
    }

    return(
        <div className="table">
            <Form>
            <Container>
                <Row>
                    <Col>
                    
            <h3>This is Get By Date</h3>
            <Input
                type="date"
                name="date_eaten"
                required="required"
                value={date_eaten}
                onChange={(e) => setDate_Eaten(e.target.value)
                }
              />
            <Button onClick={()=>fetchDietlogsByDate(date_eaten)}>Get Logs By Date</Button>
            {/* {displayTable()} */}
            {displayCards()}
                    </Col>
                </Row>
            </Container>
            </Form>
        </div>
    )
}

export default DietlogGetByDate;