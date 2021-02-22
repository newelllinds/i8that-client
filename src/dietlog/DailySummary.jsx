// import React from 'react';
// import { Table, Button, Container, Row, Col, Alert } from 'reactstrap';

// const DailySummary = (props) => {
//         fetch(`http://localhost:3000/dietlog/...`, {
//             method: 'DELETE',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }).then(() => props.fetchDietlogs())
        
//     }

//     const dailySummaryMapper = () => {
//         return props.dietlogs.map((dietlog, index) => {
//             return (
//                 <tr key={index}>
//                     <th scope="row">{dietlog.id}</th>
//                     <td>{dietlog.food_item}</td>
//                     <td>{dietlog.calories}</td>
//                     <td>{dietlog.date_eaten}</td>
//                     <td>{dietlog.where_eaten}</td>
//                     <td>{dietlog.feelings}</td>
//                     <td>{dietlog.image}</td>
//                     <td>
//                         <Button color="secondary" onClick={() => { props.editUpdateDietlog(dietlog); props.updateOn() }}>Update Calorie Goal</Button>
//                         {/* <Button color="danger" onClick={() => {deleteDietlog(dietlog)}}>Delete</Button> */}
//                     </td>

                    
//                 </tr>
//             )
//         })
//     }

//     return (
//         <div className="table">
//             <Container>
//                 <Row>
//                     <Col>
                    
//             <h3>Your Dietlog</h3>
//             <hr />
//             <Table striped hover>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Calories Remaining</th>
//                         <th>Calorie Goal</th>
//                         <th>Calories Consumed</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {dietlogMapper()}
//                 </tbody>
//                         </Table>
//                     </Col>
//                 </Row>
//             </Container>
//             </div>
//     )
// }

// export default DailySummary;