import React from "react";
import Meal from "./Meal";

function Meals({ meals}) {
  return (
    <div className="mt-3">
      <div class="container">
        <div class="row">
          {meals.map((meal) => {
            return (
              <div key={meal.idMeal} class="col-sm mb-3">
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
