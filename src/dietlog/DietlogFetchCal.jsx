import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import DietlogCreate from "./DietlogCreate"



const DietlogFetchCal = (props) => {
    const [food_item, setFood_Item] = useState('');
    const [calories, setCalories] = useState('');

    const fetchResults = (e) => {
        e.preventDefault();
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
                setCalories(Math.round(json.items[0].calories))
                console.log(json.items[0].name)
                console.log(json.items[0].calories)
                console.log(json)
            })
    }
    
   
   
        
    return (
        <div className="tablecreate" id="foodlog">
            <div className="innertcreate">
                <Form onSubmit={fetchResults} >
                    <Row form>
                        <Col md={6}>
                    <FormGroup>
                       <Label htmlFor="food_item" > 
                            <h6>Food Item (required): </h6>
                            </Label>
                                <Input type="text" name="search"
                                    required="required"
                                    value={food_item} onChange={(e) => setFood_Item(e.target.value)} />
                        <button className="submit" className="fetchcalbtn">Fetch Calories</button>
                    </FormGroup>
                    </Col>
                    
                    <Col md={6}>
                    <FormGroup>
                        <Label htmlFor="calories" >
                        <h6>Calories:</h6></Label>
                    <Input name="calories" value={calories} onChange={(e) => setCalories(e.target.value)}/>
                        </FormGroup>
                        </Col>
                    </Row>
                    
                </Form>
                <DietlogCreate calories={calories} food_item={food_item} token={props.token} fetchDietlogs={props.fetchDietlogs}/>
            </div>
            
            </div>
   
        
        );
}

 
export default DietlogFetchCal;