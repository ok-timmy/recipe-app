import React from "react";
import { Link } from "react-router-dom";

function Meal({meal}) {


  
  return (
    <div>
      <div className="card shadow p-1 mb-5 bg-white rounded" style={{ width: "18rem" }}>
        <img src={meal.strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{meal.strMeal}</h5>
          <Link to={{pathname: `/${meal.strMeal}`}} >
            <button
              className="btn btn-primary"
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
