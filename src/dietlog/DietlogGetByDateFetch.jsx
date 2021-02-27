import React, {useState} from 'react';
import {Button} from 'reactstrap';
import DietlogGetByDateTable from './DietlogGetByDateTable';

const DietlogGetByDateFetch = (props) => {
    const [resultsByDate, setResultsByDate] = useState([])
    console.log(props.userId);
    console.log(props.date_eaten);

    function fetchDietlogsByDate()  {
        fetch(`http://localhost:3000/dietlog/${props.date_eaten}/${props.userId}`, {
            headers: new Headers ({
                'Authorization': props.token
            })
        })
            .then((response) => response.json())
            .then((json) => {
                setResultsByDate(json);
                console.log(json);
            });
    }

    return(
        <div className="table">
                        <Button onClick={()=>fetchDietlogsByDate(props.date_eaten)}>Get Logs By Date</Button>
            <DietlogGetByDateTable resultsByDate={resultsByDate} editUpdateDietLog={props.editUpdateDietLog} date_eaten={props.date_eaten} fetchDietlogsByDate={fetchDietlogsByDate} token={props.token}/>
        </div>
    )
}

export default DietlogGetByDateFetch;