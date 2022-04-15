import React from "react";
import Meal from "./Meal";

function Meals({ meals}) {
  return (
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
