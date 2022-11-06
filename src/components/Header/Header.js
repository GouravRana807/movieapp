import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import user from "../../images/user.png"
import "./Header.scss"
import { fetchAsyncMovies, fetchAsyncShows } from './../../features/movies/movieSlice';
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    if(term === "") return alert("please enter search term")
    e.preventDefault();
    // console.log(term)
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }
  return (
    <div className='header'>
    <div className="logo">
    <Link to={"/"}> Movie App </Link>
    </div>

    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=> setTerm(e.target.value)} />
        <button type='submit'><i className='fas fa-search'></i></button>
      </form>
    </div>
    <div className="user-image">
      <img src= {user } alt="" />
    </div>

    </div>
  )
}

export default Header