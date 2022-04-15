import React from "react";
import { Link } from "react-router-dom";
import ImageThree from "./assets/pexels-photo-1640777.jpeg";

function Home() {
  return (
    <>
      <div
        className="bg-image"
        style={{ background: `url(${ImageThree})`, height: "95vh" }}
      >
        <div
          className="px-lg-5"
          style={{
            background: "rgba(20, 20, 20, 0.4)",
            height: "95vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="col-lg-6">
            <p className="display-4 text-light">
              Super Food From A Special Place
            </p>
            <p className="text-light py-3" style={{ fontSize: "1.3rem" }}>
              Delicious meals from Across the globe. Each Meal comes with
              instructions on how to prepare the meals and the ingredients
              needed to prepare recipe
            </p>
            <Link to={"/meals"}>
              <button className="btn btn-outline-light">
                Check Out More meals
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
