import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import User from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h2>Movies'Bro</h2>
        </div>
      </Link>

      <div className="user-image">
        <div className="input-container">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={term}
              placeholder="Search Movies..."
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
            <div>
              
              <button type="submit">
                <i className="ri-search-line"></i>
              </button>
            </div>
          </form>
        </div>
        <img src={User} alt="user" />
      </div>
    </div>
  );
}

export default Header;
