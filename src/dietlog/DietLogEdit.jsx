import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Alert } from 'reactstrap';

const DietLogEdit = (props) => {
    const [editFoodItem, setEditFoodItem] = useState(props.dietlogToUpdate.food_item);
    const [editCalories, setEditCalories] = useState(props.dietlogToUpdate.calories);
    const [editDateEaten, setEditDateEaten] = useState(props.dietlogToUpdate.date_eaten);
    const [editWhereEaten, setEditWhereEaten] = useState(props.dietlogToUpdate.where_eaten);
    const [editFeelings, setEditFeelings] = useState(props.dietlogToUpdate.feelings);
    const [editImage, setEditImage] = useState(props.dietlogToUpdate.image);

    // const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false)

    const uploadNewImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'i8that-image')
        setLoading(true)
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/dnesqlk9j/image/upload',
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
        setEditImage(file.secure_url)
        console.log(file.secure_url)
        setLoading(false)
        }

    const dietLogUpdate = (event, dietlog) => {
        event.preventDefault();
        console.log(editFoodItem, editCalories, editDateEaten, editWhereEaten, editFeelings, editImage, props.dietlogToUpdate.id);
        fetch(`http://localhost:3000/dietlog/update/${props.dietlogToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({dietlog: {food_item: editFoodItem, calories: editCalories, date_eaten: editDateEaten, where_eaten: editWhereEaten, feelings: editFeelings, image: editImage}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchDietlogs();
            props.updateOff();
            console.log(props.dietlogToUpdate.calories);
        })
    }


    return(
        <Modal isOpen={true}>
            <ModalHeader closeButton>Log a Meal</ModalHeader>
            <ModalBody>
                <Form onSubmit={dietLogUpdate}>
                    <FormGroup>
                        <Label htmlFor="food_item">Edit Food Item:</Label>
                        <Input name="food_item" value={editFoodItem} onChange={(e) => setEditFoodItem(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="calories">Edit Calories:</Label>
                        <Input name="calories  " value={editCalories} onChange={(e) => setEditCalories(e.target.value)}/>
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
                        <Input type="file" name="file" onChange={uploadNewImage}/>
                        {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={editImage} style={{ width: '100px' }} />
      )}
                    </FormGroup>
                    <Button className="ModalEditButton" type="close">Close Without Editing</Button>
                    <Button className="ModalEditButton" type="submit">Update the Diet Log!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default DietLogEdit;