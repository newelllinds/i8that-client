import React, {useState} from 'react';
import {
    Input,
  } from "reactstrap";
  import DietlogGetByDateFetch from './DietlogGetByDateFetch'

const DietlogGetByDate = (props) => {
    const [date_eaten, setDate_Eaten] = useState("");

    const handleUserDateInput = (e) => {
        const userDateInput = e.target.value;
        setDate_Eaten(userDateInput);
    }

    return (
        <div className="dietlogdate">
        <div className="table" id="getdietlogtable">
            <h3 className="alignheader">Get Your Dietlogs By Date</h3>
            <Input
                type="date"
                name="date_eaten"
                required="required"
                value={date_eaten}
                onChange={handleUserDateInput}
              />
              <DietlogGetByDateFetch date_eaten={date_eaten} userId={props.userId} token={props.token} editUpdateDietLog={props.editUpdateDietLog} updateOn={props.updateOn}/>
            </div>
        </div>
    )
}

export default DietlogGetByDate;