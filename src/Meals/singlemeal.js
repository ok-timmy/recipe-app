import axios from "axios";
import React, { useEffect, useState } from "react";

function Singlemeal() {
  const [singleMeal, setSingleMeal] = useState([]);

  console.log(singleMeal);
  const path = window.location.pathname;
  const mainPath = path.substring(1);
  console.log(mainPath);

  useEffect(() => {
    const APIURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mainPath}`;
    const fetchSingleMeal = async () => {
      const meal = await axios.get(APIURL);
      const mealdata = meal.data.meals;
      console.log(mealdata);
      setSingleMeal(mealdata[0]);
    };
    fetchSingleMeal();
  }, []);

  return (
    <div>
      <img
        src={singleMeal.strMealThumb}
        className="img-fluid px-2 pt-3"
        alt="Responsive"
      />
      <div className="p-2">
        <h1 className="display-1">{singleMeal.strMeal}</h1>
        <blockquote class="blockquote">
          <h5 className="display-5">
            Instructions on How to Prepare {singleMeal.strMeal}
          </h5>
          <p className="mb-0">{singleMeal.strInstructions}</p>
        </blockquote>
      </div>
      <h5 className="display-5 p-2"> Ingredients </h5>
      <ol>
        {singleMeal.strIngredient1 && <li>{singleMeal.strIngredient1}</li>}
        {singleMeal.strIngredient2 && <li>{singleMeal.strIngredient2}</li>}
        {singleMeal.strIngredient3 && <li>{singleMeal.strIngredient3}</li>}
        {singleMeal.strIngredient4 && <li>{singleMeal.strIngredient4}</li>}
        {singleMeal.strIngredient5 && <li>{singleMeal.strIngredient5}</li>}
        {singleMeal.strIngredient6 && <li>{singleMeal.strIngredient6}</li>}
        {singleMeal.strIngredient7 && <li>{singleMeal.strIngredient7}</li>}
        {singleMeal.strIngredient8 && <li>{singleMeal.strIngredient8}</li>}
        {singleMeal.strIngredient9 && <li>{singleMeal.strIngredient9}</li>}
        {singleMeal.strIngredient10 && <li>{singleMeal.strIngredient10}</li>}
        {singleMeal.strIngredient11 && <li>{singleMeal.strIngredient11}</li>}
        {singleMeal.strIngredient12 && <li>{singleMeal.strIngredient12}</li>}
        {singleMeal.strIngredient13 && <li>{singleMeal.strIngredient13}</li>}
        {singleMeal.strIngredient14 && <li>{singleMeal.strIngredient14}</li>}
        {singleMeal.strIngredient15 && <li>{singleMeal.strIngredient15}</li>}
      </ol>
    </div>
  );
}

export default Singlemeal;
