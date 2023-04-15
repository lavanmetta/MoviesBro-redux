import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import User from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

function Header() {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h2>MoviesBro</h2>
        </div>
      </Link>
      <div>
      <form onSubmit={submitHandler}>
      <input type="text" value={term} placeholder="search" onChange={(e) => {setTerm(e.target.value)}} />
      <button type="submit">Search</button>
      </form>
      </div>
      <div className="user-image">
        <img src={User} alt="user" />
      </div>
    </div>
  );
}

export default Header;
