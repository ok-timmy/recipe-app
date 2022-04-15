import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import Meal from "./Meal";

function Singlemeal() {
  const [foundMeal, setFoundMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [mealName, setmealName] = useState();

  // console.log(foundMeal);
  const location = useLocation();
  
  useEffect(() => {
    let path = location.pathname;
    const mainPath = path.split("/");
    const mealname = mainPath[mainPath.length - 1];
    setmealName(mealname);
  }, [location]);

  useEffect(() => {
    const APIURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    const fetchSingleMeal = async () => {
      try {
        const meal = await axios.get(APIURL);
        const mealdata = meal.data.meals;
        // console.log(mealdata)
        setFoundMeal(mealdata);
        setIsLoading(false)
      } catch (error) {
        setFoundMeal([]);
        setIsLoading(false)
      }
    };
    fetchSingleMeal();
  }, [mealName]);

 if (isLoading) {return <div>Loading...</div>} else { if (foundMeal && foundMeal.length === 1) {
    const singleMeal = foundMeal[0];
    // console.log(singleMeal);
    return (
      <div>
        <div className="col-lg-6 mx-lg-auto mx-sm-3 pb-3">
          <img
            src={singleMeal.strMealThumb}
            className="h-25 w-100 px-2 pt-3"
            alt="Responsive"
          />
          <div className="p-2">
            <h1 className="display-3">{singleMeal.strMeal}</h1>
            <blockquote className="blockquote">
              <h5 className="display-6">
                Instructions on How to Prepare {singleMeal.strMeal}
              </h5>
              <p className="mb-0">{singleMeal.strInstructions}</p>
            </blockquote>
          </div>
          <h5 className="display-5 p-2"> Ingredients </h5>
          <ol>
            {/* {checkIngredient(singleMeal)} */}
            {singleMeal.strIngredient1 && <li>{singleMeal.strIngredient1}</li>}
            {singleMeal.strIngredient3 && <li>{singleMeal.strIngredient3}</li>}
            {singleMeal.strIngredient4 && <li>{singleMeal.strIngredient4}</li>}
            {singleMeal.strIngredient5 && <li>{singleMeal.strIngredient5}</li>}
            {singleMeal.strIngredient6 && <li>{singleMeal.strIngredient6}</li>}
            {singleMeal.strIngredient7 && <li>{singleMeal.strIngredient7}</li>}
            {singleMeal.strIngredient8 && <li>{singleMeal.strIngredient8}</li>}
            {singleMeal.strIngredient9 && <li>{singleMeal.strIngredient9}</li>}
            {singleMeal.strIngredient10 && (
              <li>{singleMeal.strIngredient10}</li>
            )}
            {singleMeal.strIngredient11 && (
              <li>{singleMeal.strIngredient11}</li>
            )}
            {singleMeal.strIngredient12 && (
              <li>{singleMeal.strIngredient12}</li>
            )}
            {singleMeal.strIngredient13 && (
              <li>{singleMeal.strIngredient13}</li>
            )}
            {singleMeal.strIngredient14 && (
              <li>{singleMeal.strIngredient14}</li>
            )}
            {singleMeal.strIngredient15 && (
              <li>{singleMeal.strIngredient15}</li>
            )}
          </ol>
          <button className="btn btn-outline-danger">
            <a
              className="text-decoration-none text-dark"
              target="_blank"
              rel="noreferrer"
              href={singleMeal.strYoutube}
            >
              {" "}
              Watch Tutorial Video
            </a>
          </button>
        </div>
      </div>
    );
  } else if (foundMeal && foundMeal.length > 1) {
    return (
      <div className="mt-3 mx-sm-auto">
        <div className="container mx-auto">
          <div className="row">
            {foundMeal.map((meal) => {
              return (
                <div key={meal.idMeal} className="col-sm mb-3">
                <Meal  meal={meal} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );

  } else return <div> We could not get your search Input</div>;
}}

export default Singlemeal;
