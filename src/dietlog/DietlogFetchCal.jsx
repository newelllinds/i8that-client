import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';



const DietlogFetchCal = (props) => {
    const [food_item, setFood_Item] = useState('');
    const [calories, setCalories] = useState('');

     function fetchResults() {
        const baseURL = "https://api.calorieninjas.com/v1/nutrition?query=banana";

        fetch(baseURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'X-Api-Key': 'OGbRdDzK7Q3ExG31DLq2XA==3hvplXQdsgB9lXei'
            })
        })
            .then((res) => res.json())
            .then((json) => {
                setFood_Item(json.items[0])
                console.log(json)
            })
     }
    
    
    return (
    <div className="calc">
            <Container>
                <Row>
                    <Col>
            <h5>Calculate Calories Here:</h5>
            <Form className="input">
                <Input placeholder="default"/>
            </Form>
            
            <button  onClick={fetchResults}>Fetch Calories</button>
            {setFood_Item}
            <p>
                Calories eaten: {food_item.calories}
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        
        );
}

 
export default DietlogFetchCal;