import React from 'react';
import { Table, Button, Container, Row, Col } from 'reactstrap';

const DietlogTable = (props) => {

    const deleteDietlog = (dietlog) => {
        fetch(`http://localhost:3000/log/${dietlog.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchDietlogs())
    }

    const dietlogMapper = () => {
        return props.dietlogs.map((dietlog, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{dietlog.id}</th>
                    <td>{dietlog.food_item}</td>
                    <td>{dietlog.calories}</td>
                    <td>{dietlog.date_eaten}</td>
                    <td>{dietlog.where_eaten}</td>
                    <td>{dietlog.feelings}</td>
                    <td>{dietlog.image}</td>
                    
                    <Button color="warning" onClick={() => { props.editUpdateDietlog(dietlog); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => {deleteDietlog(dietlog)}}>Delete</Button>

                    
                </tr>
            )
        })
    }

    return (
        <div className="table">
            <Container>
                <Row>
                    <Col>
                    
            <h3>Your Dietlog</h3>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>Foods</th>
                        <th>Calories</th>
                        <th>Date Eaten</th>
                        <th>When Eaten</th>
                        <th>Feelings</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {dietlogMapper()}
                </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            </div>
    )
}

export default DietlogTable;