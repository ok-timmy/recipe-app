import axios from "axios";
import React, { useEffect, useState } from "react";
import Meal from "./Meal";

function Meals() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const APIURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=b";

  useEffect(() => {
    const fetchMeals = async () => {
      const foods = await axios.get(APIURL);
      const data = foods.data.meals;
      setMeals(data);
      setIsLoading(false)
    };
    fetchMeals();
  }, [APIURL]);
  if(isLoading && !meals) { return (<p className="py-4 display-5">Loading...</p>)} else return (
    <div className="mt-3 mx-sm-auto">
      <div className="container mx-auto">
        <div className="row">
          {meals.map((meal) => {
            return (
              <div key={meal.idMeal} className="col-sm mb-3">
                <Meal meal={meal} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Meals;
