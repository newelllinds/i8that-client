import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import DietlogCreate from "./DietlogCreate"



const DietlogFetchCal = (props) => {
    const [food_item, setFood_Item] = useState('');
    const [calories, setCalories] = useState('');

     const fetchResults = () => {
        const baseURL = `https://api.calorieninjas.com/v1/nutrition?query=${food_item}`;

        fetch(baseURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'X-Api-Key': 'OGbRdDzK7Q3ExG31DLq2XA==3hvplXQdsgB9lXei'
            })
        })
            .then((res) => res.json())
            .then((json) => {
                setFood_Item(json.items[0].name)
                setCalories(json.items[0].calories)
                console.log(json)
            })
     }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResults();
    }

    
    return (
        <div className="tablecreate">
            <div className="innertcreate">
                <Form onSubmit={(e) => handleSubmit(e)} >
                    <Row form>
                        <Col md={6}>
                    <FormGroup>
                       <Label htmlFor="food_item" > 
                            <h6>Food Item (required): </h6>
                            </Label>
                        <Input type="text" name="search" onChange={(e) => setFood_Item(e.target.value)} required />
                        <button className="submit">Fetch Calories</button>
                    </FormGroup>
                    </Col>
                    
                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor="calories" >
                        <h6>Calories</h6></Label>
                    <Input disabled name="calories" value={calories} onChange={(e) => setCalories(e.target.value)}/>
                        </FormGroup>
                        </Col>
                    </Row>
                    <DietlogCreate passedCalories={calories} passedFood_Item={food_item} />
                </Form>
                
            </div>
            
            </div>
   
        
        );
}

 
export default DietlogFetchCal;