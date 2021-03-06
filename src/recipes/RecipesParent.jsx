import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const RecipesParent = () => {
  const [meal, setMeal] = useState("");

  function fetchResults() {
    const baseURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(baseURL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setMeal(json.meals[0]);
        console.log(json.meals[0]);
      });
  }

  useEffect(() => {
    {
      fetchResults();
    }
  }, []);

  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
    strSource,
  } = meal;

  return (
      <>
          
      <Card className="randomrecipe-card">
        <CardTitle className="cardtitle-recipe" tag="h6">
          <strong>{strMeal}</strong>
        </CardTitle>
        <CardImg top width="100%" src={strMealThumb} alt={strMeal} />
        <CardBody>
          <CardText>
            <ul className="meal-info">
              <li>
                Category:
                <strong>{strCategory}</strong>
              </li>
              <li>
                Cuisine:
                <strong>{strArea}</strong>
              </li>
            </ul>
          </CardText>
          <Button
            className="recipebtn"
            type="button"
                      href={strSource}
                      target="_blank"
           >
            Click to view recipe
          </Button>
        </CardBody>
      </Card>

      
    </>
  );
};

export default RecipesParent;
