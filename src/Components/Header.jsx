import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [searchInput, setSearchInput] = useState()

  return (
    <div className="mb-5">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link to={"/"}  className="navbar-brand px-lg-5">
          Recipe App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item px-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link to={"/meals"} className="nav-link">
                Meals
              </Link>
            </li>
          </ul>

          <form className="d-flex form-inline my-2">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>{setSearchInput(e.target.value) }}
            />
            <Link to={ `/${searchInput}`}>
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="button"
            >
              Search
            </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
