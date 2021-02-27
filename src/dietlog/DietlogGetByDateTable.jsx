import React from 'react';
import {Button, Table, Container, Row, Col} from 'reactstrap';

const DietlogGetByDateTable = (props) => {

    const deleteDietlog = (dietlog) => {
        fetch(`http://localhost:3000/dietlog/delete/${dietlog.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchDietlogsByDate())
        
    }
    const dietlogMapper = () => {
        return props.resultsByDate.map((dietlog, index) => {
            return (
                <tr key={index}>
                    <th className="id" scope="row">{dietlog.id}</th>
                    <td>{dietlog.food_item}</td>
                    <td>{dietlog.calories}</td>
                    <td>{dietlog.date_eaten}</td>
                    <td>{dietlog.where_eaten}</td>
                    <td>{dietlog.feelings}</td>
                    <td><img src={dietlog.image} style={{ width: '100px' }} /></td>
                    <td>
                        {/* <Button
                            className="updatebtn1"
                            onClick={() => { props.editUpdateDietlog(dietlog); props.updateOn() }}>Update</Button> */}
                             <Button className="deletebtn1" onClick={() => {deleteDietlog(dietlog)}}>Delete</Button>
                    </td>

                    
                </tr>
            )
        })
    }

    return (
        <div className="outerdietlog">
            <div className="jumbotron2" style={{ backgroundColor: 'orange'}}>
            <h3 className="yourheader">Your Dietlogs for {props.date_eaten}</h3></div>
            <Container className="table1">
                <Row>
                    <Col>
                    
            
            <Table striped hover>
                <thead className="tableheaderlines">
                    <tr>
                        <th>#</th>
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
 
export default DietlogGetByDateTable;