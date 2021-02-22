import React, { useState } from "react";
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
} from "reactstrap";

const DietlogCreate = (props) => {
  const [food_item, setFood_Item] = useState("");
  const [calories, setCalories] = useState("");
  const [date_eaten, setDate_Eaten] = useState("");
  const [where_eaten, setWhere_Eaten] = useState("");
  const [feelings, setFeelings] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/dietlog/create", {
      method: "POST",
      body: JSON.stringify({
        dietlog: {
          food_item: props.food_item,
          calories: props.calories,
          date_eaten: date_eaten,
          where_eaten: where_eaten,
          feelings: feelings,
          image: image,
        },
      }),
      headers: new Headers({
<<<<<<< HEAD
        "Content-Type": "application/json",
        Authorization: props.token,
      })
=======
        'Content-Type': 'application/json',
        'Authorization': props.token,
      }),
>>>>>>> c661f303290403338b4f64f700ffcade7bb662c2
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setFood_Item("");
        setCalories("");
        setDate_Eaten("");
        setWhere_Eaten("");
        setFeelings("");
        setImage("");
        props.fetchDietlogs();
      })
      .catch((err) => console.log(err));
  };
    
    
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={6}>
                      <FormGroup>
                          <Label htmlFor="date_eaten">
              <h6>Date Eaten</h6></Label>
              <Input
                type="date"
                name="date_eaten"
                value={date_eaten}
                onChange={(e) => setDate_Eaten(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label htmlFor="where_eaten">
                <h6>When Eaten</h6>
              </Label>
              <Input
                type="select"
                name="where_eaten"
                value={where_eaten}
                onChange={(e) => setWhere_Eaten(e.target.value)}
              >
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
              <Label htmlFor="feelings">
                <h6>Feelings</h6>
              </Label>
              <Input
                name="feelings"
                value={feelings}
                onChange={(e) => setFeelings(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label htmlFor="image">
                <h6>Image</h6>
              </Label>
              <Input
                type="file"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <FormText color="muted">Submit image of your food.</FormText>
            </FormGroup>
          </Col>
        </Row>
        <Button className="btncolor" type="submit">
          Click to Submit
        </Button>
      </Form>
    </>
  );
};

export default DietlogCreate;
