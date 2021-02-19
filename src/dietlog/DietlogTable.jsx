import React from 'react';
import {Table, Button} from 'reactstrap';

const DietLogTable = (props) => {

    // const deleteDietLog = (dietlog) => {
    //     fetch()
    // }

    const dietLogMapper = () => {
        return props.dietlogs.map((dietlog, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{dietlog.id}</th>
                    <td>{dietlog.food_item}</td>
                    <td>{dietlog.calories}</td>
                    <td>{dietlog.date_eaten}</td>
                    <td>{dietlog.where_eaten}</td>
                    <td>{dietlog.feelings}</td>
                    <td>{dietlog.image}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateDietLog(dietlog); props.updateOn()}}>Update</Button>
                        {/* <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button> */}
                    </td>

                </tr>
            )
        })
    }
    return (
        <>
        <h3> Diet Log History </h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>Food Item</th>
                    <th>Calories</th>
                    <th>Date Eaten</th>
                    <th>Where Eaten</th>
                    <th>Feelings</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {dietLogMapper()}
            </tbody>
        </Table>

        </>
    )
}

export default DietLogTable;