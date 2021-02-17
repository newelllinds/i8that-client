import React, { useState} from 'react';


const DietlogCreate = (props) => {
    const [food_item, setFood_Item] = useState('');
    const [calories, setCalories] = useState('');
    const [date_eaten, setDate_Eaten] = useState('');
    const [where_eaten, setWhere_Eaten] = useState('');
    const [feelings, setFeelings] = useState('');
    const [image, setImage] = useState('');

    function fetchResults() {
        const baseURL = "https://trackapi.nutritionix.com/v2/search/instant";

        fetch(baseURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'user-key': '94886d7f2d1c4dbd6b0a2fd1ad803157'
            })
        })
            .then((res) => res.json())
            .then((json) => {
                setFood_Item(json)
                console.log(json)
            })
    }

        // useEffect(() => {
        //     {fetchResults()}
        //   }, []);



    return (
        <div>
            //input field
            <button onClick={fetchResults}>Fetch Calories</button>
            
                
                
        </div>
    );
}

 
export default DietlogCreate;