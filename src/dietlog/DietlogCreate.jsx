import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, FormText} from 'reactstrap';



const DietlogCreate = (props) => {
    const [food_item, setFood_Item] = useState('');
    const [calories, setCalories] = useState('');
    const [date_eaten, setDate_Eaten] = useState('');
    const [where_eaten, setWhere_Eaten] = useState('');
    const [feelings, setFeelings] = useState('');
    const [image, setImage] = useState('');
    
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
                setFood_Item(json.items[0])
                console.log(json)
            })
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResults();
        fetch('http://localhost:3000/dietlog/', {
            method: 'POST',
            body: JSON.stringify({ dietlog: { food_item: food_item, calories: calories, date_eaten: date_eaten, where_eaten: where_eaten, feelings: feelings, image: image } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            
            .then((logData) => {
                console.log(logData);
                setFood_Item('');
                setCalories('');
                setDate_Eaten('')
                setWhere_Eaten('')
                setFeelings('')
                setImage('')
                props.fetchDietlogs();
        }).catch((err) => console.log(err))
    }

 


        // useEffect(() => {
        //     {fetchResults()}
        //   }, []);



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
                    <Input name="calories" value={food_item.calories} onChange={(e) => setCalories(e.target.value)}/>
                        </FormGroup>
                        </Col>
                    </Row>

                <Row form>
                    <Col md="6">
                         <FormGroup>
        <Label htmlFor="date_eaten" ><h6>Date Eaten</h6></Label>
        <Input
          type="date"
          name="date_eaten"
          id="exampleDate"
          placeholder="date placeholder"
          value={date_eaten} onChange={(e) => setDate_Eaten(e.target.value)}
        />
      </FormGroup>
                
                    </Col>
                    <Col md="6">
                    <FormGroup>
                    <Label htmlFor="where_eaten" ><h6>When Eaten</h6></Label>
                    <Input type="select" name="where_eaten" value={where_eaten} onChange={(e) => setWhere_Eaten(e.target.value)}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                        </Input>
                    </FormGroup>
                    </Col>
                </Row>
                
                <Row form>
                <Col md="6">
                <FormGroup>
                        <Label htmlFor="feelings" >
                            <h6>Feelings</h6>
                            </Label>
                    <Input name="feelings" value={feelings} onChange={(e) => setFeelings(e.target.value)}/>
                    </FormGroup>
                    </Col>
                <Col md="6">
                    <FormGroup>
        <Label htmlFor="image"><h6>Image</h6></Label>
        <Input type="file" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
        <FormText color="muted">
          Submit image of your food.
        </FormText>
      </FormGroup>
                
                    </Col>
                </Row>
            </Form>    
            <Button className="btncolor" type="submit">Click to Submit</Button>
            
                
             </div>
         </div>       
            
    );
}

 
export default DietlogCreate;