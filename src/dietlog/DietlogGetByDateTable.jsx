import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap';

const DietlogGetByDateTable = (props) => {
    return (

        
        <Card>
            <CardImg top width="100%" src={props.resultsByDate.image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{props.resultsByDate.where_eaten}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.resultsByDate.food_item}</CardSubtitle>
                <CardText>
                    Calories: {props.resultsByDate.calories}
                    Feelings: {props.resultsByDate.feelings}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
};
 
export default DietlogGetByDateTable;