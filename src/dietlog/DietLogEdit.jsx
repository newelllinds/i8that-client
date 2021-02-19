import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const DietLogEdit = (props) => {
    const [editFoodItem, setEditFoodItem] = useState(props.dietlogToUpdate.food_item); //coming from DietLogIndex
    const [editCalories, setEditCalories] = useState(props.dietlogToUpdate.calories);
    const [editDateEaten, setEditDateEaten] = useState(props.dietlogToUpdate.date_eaten);
    const [editWhereEaten, setEditWhereEaten] = useState(props.dietlogToUpdate.where_eaten);
    const [editFeelings, setEditFeelings] = useState(props.dietlogToUpdate.feelings);
    const [editImage, setEditImage] = useState(props.dietlogToUpdate.image);

    const dietLogUpdate = (event, dietlog) => {
        event.preventDefault();
        console.log(editFoodItem, editCalories, editDateEaten, editWhereEaten, editFeelings, editImage, props.dietlogToUpdate.id);
        // fetch(`http://localhost:3000/dietlog/${props.dietLogToUpdate.id}`, {
        fetch('http://localhost:3000/dietlog/update/7', {
            method: 'PUT',
            body: JSON.stringify({food_item: editFoodItem, calories: editCalories, date_eaten: editDateEaten, where_eaten: editWhereEaten, feelings: editFeelings, image: editImage}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEzNzAyMjMxLCJleHAiOjE2MTM3ODg2MzF9.jJkx2M09xwEPiGMfOqQZeBeFjoy0sl5N0uHptEUaXFY'
            })
        }).then((res) => {
            props.fetchDietlogs();
            props.updateOff();
            console.log(props.dietlogToUpdate.calories);
        })
    }

    return(
        // <>
        // This is Diet Log Edit
        // </>
        
        <Modal isOpen={true}>
            <ModalHeader>Log a Meal</ModalHeader>
            <ModalBody>
                <Form onSubmit={dietLogUpdate}>
                    <FormGroup>
                        <Label htmlFor="food_item">Edit Food Item:</Label>
                        <Input name="food_item" value={editFoodItem} onChange={(e) => setEditFoodItem(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="calories">Edit Calories:</Label>
                        <Input name="calories" value={editCalories} onChange={(e) => setEditCalories(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date_eaten">Edit Date Eaten:</Label>
                        <Input name="date_eaten" value={editDateEaten} onChange={(e) => setEditDateEaten(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="where_eaten">Edit When Eaten:</Label>
                        <Input type="select" name="where_eaten" value={editWhereEaten} onChange={(e) => setEditWhereEaten(e.target.value)}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="feelings">Edit Feelings:</Label>
                        <Input name="feelings" value={editFeelings} onChange={(e) => setEditFeelings(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Edit Image:</Label>
                        <Input name="image" value={editImage} onChange={(e) => setEditImage(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update the Diet Log!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default DietLogEdit;