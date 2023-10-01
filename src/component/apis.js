import React, {useState} from "react";
import '../App.css'

export const MyComponent = () => {
    const [meal, setMeal] = useState(null);

    const fetchRandomMeal = async () =>
       {
        try{
            const response = await fetch('https://themealdb.com/api/json/v1/1/random.php');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMeal(data.meals[0]);
        } catch (error) {
            console.error("fetch failed: ", error);
        }
       };
    return (
        <div>
            <h1>Feeling hungry</h1>
            <p>Get random meal by clicking below</p>
            <button className="meal" onClick={fetchRandomMeal}>Get meals</button>
            {meal ? (
                <div>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p><b>Category: </b>{meal.strCategory}</p>
                    <p><b>Area: </b>{meal.strArea}</p>
                    <p><b>Ingredients:</b></p>
                    <ul>
                    <li>{meal.strIngredient1}</li>
                    <li>{meal.strIngredient2}</li>
                    <li>{meal.strIngredient3}</li>
                    <li>{meal.strIngredient4}</li>
                    <li>{meal.strIngredient5}</li>
                    <li>{meal.strIngredient6}</li>
                    <li>{meal.strIngredient7}</li>
                    <li>{meal.strIngredient8}</li>
                    <li>{meal.strIngredient9}</li>
                    <li>{meal.strIngredient10}</li>
                    </ul>
                    <p>{meal.strDrinkAlternate}</p>
                    <p>{meal.strIngredients}</p>
                    <p>{meal.strInstructions}</p>
                    
                    </div>
            ) : (
                <p></p>
            )}
            </div>
    );
            };
     
export default MyComponent;