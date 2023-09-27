import React, {useState} from "react";
import axios from 'axios';

export const MyComponent = () => {
    const [data, setData] = useState(null);

    const fetchDataFromApi = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php/images/media/meals/llcbn01574260722.jpg/preview')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };

    return (
        <div>
            <h1>Feeling hungry</h1>
            <p>Get random meal by clicking below</p>
            <button className="meal" onClick={fetchDataFromApi}>fetch data</button>
            {data && (
                <div>
                    

                    <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
            )}
        </div>
    );
};

export default MyComponent;