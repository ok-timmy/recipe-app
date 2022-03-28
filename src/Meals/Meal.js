import React from "react";
import { Link } from "react-router-dom";

function Meal({ meal }) {

  
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={meal.strMealThumb} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{meal.strMeal}</h5>
          <Link to={{pathname: `/${meal.strMeal}`}} >
            <button
              class="btn btn-primary"
            >
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Meal;
